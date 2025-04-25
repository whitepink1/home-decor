import { getShopProducts } from "@/app/_lib/data-service";
import ProductCard from "../ProductCard";
import Pagination from "./Pagination";
import OrderFilter from "./OrderFilter";

const ShopCatalogueResult = async ({ searchParams , page, order}) => {
    const {price, category, color, material} = await searchParams;
    const { products, total, resultPageQuantity, isPage} = await getShopProducts({ page , price, category, color, material, order});
    const from = page > Math.ceil(total / resultPageQuantity) && isPage ? 0 : page > Math.ceil(total / resultPageQuantity) ? 1 : (page - 1) * resultPageQuantity;
    const end = page > Math.ceil(total / resultPageQuantity) ? 9 :(page * resultPageQuantity);

    return(<div className="w-[650px] flex-col min-[1400px]:w-[950px]">
        <OrderFilter order={order} from={from} end={end} total={total} productsLength={products.length}/>
        <div className="flex justify-start flex-wrap gap-[10px]">
            {products.length && isPage ? 
            products?.map((item, id) => (id >= from) && (id <= end - 1) ? (<ProductCard key={item.name} product={item} />) : null)
            : products.length ?
            products?.map((item, id) => (<ProductCard key={item.name} product={item} />))
            :
            <div className="text-center">No Results</div>}
        </div>
        <Pagination isPage={isPage} productsLength={products.length} page={page} resultPageQuantity={resultPageQuantity} total={total}/>
    </div>)
}

export default ShopCatalogueResult;