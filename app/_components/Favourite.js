"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import ModalFavourites from "./ModalFavourites";
import { useContext, useRef, useState } from "react";
import { ProductsContext } from "../_lib/prContext";

export default function Favourite() {
    const { favourites, removeFavourites} = useContext(ProductsContext);
    const buttonRef = useRef();
    const [showFavourites, setShowFavourites] = useState(false);
    const favouritesHandle = () => {
        if(favourites.length){
            setShowFavourites(!showFavourites)
        }
    }
    return(<div className="relative mx-2">
        <div ref={buttonRef} onClick={favouritesHandle} className="hover:scale-[104%] hover:cursor-pointer">
            <HeartIcon className={`h-[24px] w-auto stroke-[2px] stroke-basic-50 ${showFavourites ? 'text-basic-100/70' : 'text-transparent'}`}/>
            {favourites?.length > 0 && <span className="absolute -top-1 -right-1 flex items-center justify-center h-[15px] w-[15px] bg-basic-50 rounded-full z-5 font-semibold text-[10px]">{favourites?.length}</span>}
        </div>
        {showFavourites && <ModalFavourites butRef={buttonRef} removeFavourites={removeFavourites} showFavourites={showFavourites} setShowFavourites={setShowFavourites} favourites={favourites}/>}
    </div>)
}