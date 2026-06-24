import { Suspense } from "react";
import Strengths from "../_components/shared/Strengths";
import ShopCatalogue from "../_components/shopConstructor/ShopCatalogue";
import ShopCatalogueResult from "../_components/shopConstructor/ShopCatalogueResult";

export const metadata = {
    title: "Shop",
  };

  export default async function Page({ searchParams }) {
    const page = await Number(searchParams.page) || 1;
    const order = await searchParams.order;
    return (<main>
        <div className="flex justify-center h-[250px] items-center min-[1200px]:h-[420px] bg-[url('../public/main4.jpg')] bg-cover bg-center text-center align-middle">
            <h1 className="text-[50px] font-bold text-basic-50">Shop</h1>
        </div>
        <div className="flex justify-center gap-[20px] mt-[60px] min-[1200px]:gap-[50px]">
          <Suspense fallback={<div className="text-center py-10">Loading filters...</div>}>
            <ShopCatalogue />
          </Suspense>
          <ShopCatalogueResult searchParams={ searchParams } page={page} order={order}/>
        </div>
        <Strengths />
    </main>)
  }