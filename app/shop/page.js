import ShopCatalogue from "../_components/shopConstructor/ShopCatalogue";
import ShopCatalogueResult from "../_components/shopConstructor/ShopCatalogueResult";
import ShortCategoriesNavigation from "../_components/shopConstructor/shortCategoriesNavigation";

export const metadata = {
    title: "Shop",
  };

  export default function Page({ searchParams }) {
    return (<main>
        <div className="flex justify-center h-[250px] items-center min-[1200px]:h-[420px] bg-[url('../public/main4.jpg')] bg-cover bg-center text-center align-middle">
            <h1 className="text-[50px] font-bold text-basic-50">Shop</h1>
        </div>
        {/* <ShortCategoriesNavigation /> */}
        <div className="flex justify-center gap-[50px] mt-[60px]">
          <ShopCatalogue />
          <ShopCatalogueResult searchParams={ searchParams } />
        </div>
    </main>)
  }