import getArrayOfProducts from "./getArrayOfProducts";
import MainPageHeader from "./MainPageHeader";
import MainPagePar from "./MainPagePar";
import ProductCard from "./ProductCard";

export default async function PopularProducts() {
    const popProducts = await getArrayOfProducts([2, 7 , 12, 15, 42, 26, 31, 38]);
    return(<div className="flex flex-col items-center">
            <MainPageHeader>Popular Products</MainPageHeader>
            <MainPagePar>Explore our best-selling products, carefully selected for their style, quality, and timeless appeal. From elegant furniture to statement décor, shop the pieces our customers love the most.</MainPagePar>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px] mx-auto py-[60px]">
                {popProducts.map((popProduct) => <ProductCard key={popProduct.name} product={popProduct} />)}
            </div>
        </div>)
}