import { getShopProducts } from "@/app/_lib/data-service";
import ProductCard from "../ProductCard";

const ShopCatalogueResult = async ({ searchParams }) => {
    const page = Number(searchParams.page) || 1;
    const {price, category, color, material} = await searchParams;
    const { products, total, resultPageQuantity, isPage} = await getShopProducts({ page , price, category, color, material});
    const from = page > Math.ceil(total / resultPageQuantity) && isPage ? 0 : page > Math.ceil(total / resultPageQuantity) ? 1 : (page - 1) * resultPageQuantity;
    const end = page > Math.ceil(total / resultPageQuantity) ? 9 :(page * resultPageQuantity);
    console.log(from)
    console.log(end)

    return(<div className="w-[650px] flex-col min-[1400px]:w-[950px]">
        {products.length ? 
        <div className="h-[40px] flex justify-between items-center mb-[20px]">
            <p className="text-basic-600/60">Showing {from ? from : 1} - {end > total ? total : end} of {total} result</p>
            <select className="mr-[10px]">
                <option>Filter by name</option>
                <option>Filter by price</option>
                <option>Filter by date</option>
            </select>
        </div>
        :
        <></>}
        <div className="flex justify-start flex-wrap gap-[10px]">
            {products.length && isPage ? 
            products?.map((item, id) => (id >= from) && (id <= end - 1) ? (<ProductCard key={item.name} product={item} />) : null)
            : products.length ?
            products?.map((item, id) => (<ProductCard key={item.name} product={item} />))
            :
            <div className="text-center">No Results</div>}
        </div>
    </div>)
}

export default ShopCatalogueResult;