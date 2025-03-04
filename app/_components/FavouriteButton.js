"use client";
import { HeartIcon, ArrowPathIcon } from "@heroicons/react/24/solid"
import { ProductsContext } from "../_lib/prContext";
import { useContext } from "react";

export default function FavouriteButton({id}) {
    const { favourites, addFavourites, isClient} = useContext(ProductsContext);

    return(<>{isClient ? 
    <button onClick={() => addFavourites(id)} className={`absolute h-[40px] w-[40px] top-[20px] right-[20px] rounded-full ${isClient && favourites.includes(id) ? "bg-green-100" : 'bg-basic-50'} hover:scale-[103%] hover:drop-shadow-lg`}><HeartIcon className="h-[24px] mx-auto text-basic-50 stroke-green-100 stroke-2"/></button>
    :
    <button className={`absolute h-[40px] w-[40px] top-[20px] right-[20px] rounded-full bg-basic-50 hover:scale-[103%] hover:drop-shadow-lg`}><ArrowPathIcon className="h-[24px] mx-auto text-basic-600"/></button>}
    </>);
}