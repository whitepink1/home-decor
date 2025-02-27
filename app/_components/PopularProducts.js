import getPopularProducts from "./getPopularProducts";
import MainPageHeader from "./MainPageHeader";
import MainPagePar from "./MainPagePar";
import ProductCard from "./ProductCard";

export default async function PopularProducts() {
    const popProducts = await getPopularProducts();
    return(<div className="h-1200 mx-[250px] max-[1800px]:mx-[200px] max-[1700px]:mx-[100px]">
        <MainPageHeader>Popular Products</MainPageHeader>
        <MainPagePar>Explore our best-selling products, carefully selected for their style, quality, and timeless appeal. From elegant furniture to statement décor, shop the pieces our customers love the most.</MainPagePar>
        <div className="flex gap-y-[25px] justify-between flex-wrap py-[60px]">
            {popProducts.map((popProduct) => <ProductCard key={popProduct.name} product={popProduct} />)}        </div>
        </div>)
}