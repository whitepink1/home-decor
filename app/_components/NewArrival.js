import { getProduct } from "../_lib/data-service";
import MainPageHeader from "./MainPageHeader";
import MainPagePar from "./MainPagePar";
import ProductCard from "./ProductCard";

export default async function NewArrival() {
    const prod1 = await getProduct(95);
    const prod2 = await getProduct(45);
    const prod3 = await getProduct(65);
    return(<div>
        <MainPageHeader>New Arrival</MainPageHeader>
        <MainPagePar bot={true}>Discover the latest additions to our collection! Explore fresh, stylish, and carefully curated pieces designed to elevate your space with modern elegance and timeless charm.</MainPagePar>
        <div className="flex gap-5 justify-between h-[450px] mx-[50px] min-[1200px]:mx-[100px] min-[1600px]:mx-[312px] mb-[120px]">
           <ProductCard key={prod1.name} product={prod1} />
           <ProductCard key={prod2.name} product={prod2} />
           <ProductCard key={prod3.name} product={prod3} />
        </div>
    </div>)
}