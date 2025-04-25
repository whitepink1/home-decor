import getArrayOfProducts from "./getArrayOfProducts";
import MainPageHeader from "./MainPageHeader";
import MainPagePar from "./MainPagePar";
import ProductCard from "./ProductCard";

export default async function NewArrival() {
    const newArrivalProducts = await getArrayOfProducts([95, 45, 65]);
    return(<div className="flex flex-col items-center">
        <MainPageHeader>New Arrival</MainPageHeader>
        <MainPagePar bot={true}>Discover the latest additions to our collection! Explore fresh, stylish, and carefully curated pieces designed to elevate your space with modern elegance and timeless charm.</MainPagePar>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[120px]">
           {newArrivalProducts.map((newArrival) => <ProductCard key={newArrival.name} product={newArrival} />)}
        </div>
    </div>)
}