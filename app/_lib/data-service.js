import { filterCategories } from "../constants/constants";
import calculatePriceArray from "../utils/calculatePrice";
import { supabase } from "./supabase";
const resultPageQuantity = 9;

export async function getProduct(id) {
    const {data, error} = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

    if(error) {
        console.error(error);
    }
    return data;
}
export const getShopProducts = async ({page = 1, price, category, color, material, order = 'name'}) => {
    const from = (page - 1) * resultPageQuantity;
    const to = (page * resultPageQuantity) - 1;
    const filterColor = color?.split(',') || filterCategories.Color.map(c => c.toLowerCase());
    const filterCategory = category && category != 'sale' ? category?.split(',').map((word) => word.charAt(0).toUpperCase() + word.slice(1)) : filterCategories.Categories;
    const filterMaterial = material?.split(',') || filterCategories.Material.map(m => m.toLowerCase());
    const isOnSale = category?.split(',').includes('sale') || category === 'sale';
    const isCheckboxPrice = price?.includes("-") || price?.includes("under") || price?.includes("over");
    let priceRangeResults = [];
    let priceRangeCounts = 0;
    let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .order(['name', 'price', 'created_at'].includes(order) ? order : 'name')
    .in('type', filterCategory)
    .in('color', filterColor)
    .in('material', filterMaterial);

    if (category?.split(',').includes('sale') || category === 'sale') {
        query = query.not('discount', 'is', null);
    }

    const fetchProductsByRange = async (min, max) => {
        const { data, error, count } = isOnSale ?
        await supabase
        .from('products')
        .select('*', { count: 'exact' })
        .gte('price', min)
        .lte('price', max)
        .in('type', filterCategory)
        .in('color', filterColor)
        .in('material', filterMaterial)
        .not('discount', 'is', null)
        .order(order) 
        :
         await supabase
        .from('products')
        .select('*', { count: 'exact' })
        .gte('price', min)
        .lte('price', max)
        .in('type', filterCategory)
        .in('color', filterColor)
        .in('material', filterMaterial)
        .order(order);

        if (error) console.log(error);

        return {data, count}
    };

    const getFilteredProducts = async () => {
        let filterPrice = price?.replaceAll("under50","0-50").replaceAll("over450","450-1500");
        let sortedArray = calculatePriceArray(filterPrice?.split(","));

        const rangePromises = sortedArray.map((range) => {
        const [min, max] = range.split("-").map(Number);
        return fetchProductsByRange(min, max);
    });
        const resultsItems = await Promise.all(rangePromises);
        const productsItems = resultsItems.flatMap(({ data }) => data || []);
        const total = resultsItems.reduce((acc, { count }) => acc + (count || 0), 0);
        return { productsItems, total };
    }

    if (price) {
        if(price.includes("_")){
            const [low, high] = price.split("_");
            query = query.gte('price', Number(low)).lte("price", Number(high));
        } else {
            const {productsItems, total} = await getFilteredProducts();
            priceRangeResults = productsItems;
            priceRangeCounts = total;
            }
    }
    
    const { count } = await query;

    if(count < resultPageQuantity) {
        query = query.range(0, count + 1);
    } else if(page > Math.ceil(count / resultPageQuantity)){
        query = query.range(0, 8);
    } else {
        query = query.range(from, to);
    } 

    const { data, error } = await query;

    if(error) {
        console.error(error);
    }

    return {products: isCheckboxPrice ? priceRangeResults : data ? data : [] ,
            total: isCheckboxPrice ? priceRangeCounts : count ? count : 0 ,
            resultPageQuantity, isPage: isCheckboxPrice};
}
export const getReviews = async function(){
    const {data, error} = await supabase
    .from('reviews')
    .select('*')
    .order('id');

    if(error) {
        console.error(error);
    }
    return data;
}
export async function createRequest(newRequest) {
    const { data, error } = await supabase
      .from("contactUS")
      .insert([newRequest]);
  
    if (error) {
      console.error(error);
      throw new Error("Request could not be send");
    }
    return {data, error};
}