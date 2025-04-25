"use client";
import { useEffect, useRef, useState } from "react";
import getArrayOfProducts from "./getArrayOfProducts";
import ModalFavouriteItem from "./ModalFavouriteItem";

const ModalFavourites = ({setShowFavourites, favourites, showFavourites, removeFavourites, butRef}) => {
    const modalRef = useRef();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            if (favourites?.length) {
                const data = await getArrayOfProducts(favourites);
                setProducts(data);
            }
        };
        const handleClickOutside = (event) => {
            if (modalRef.current &&
                !modalRef.current.contains(event.target) &&
                butRef.current &&
                !butRef.current.contains(event.target)) {
              setShowFavourites(false);
            }
        };
        if (showFavourites) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        fetchProducts();
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showFavourites, favourites]);
    return(<div ref={modalRef} className="favouriteModal absolute h-fit max-h-[385px] w-[500px] flex flex-col gap-y-[10px] overflow-y-scroll bg-basic-50/95 top-[30px] left-1/2 -translate-x-1/2 min-[800px]:left-0 min-[800px]:-translate-x-[480px] z-30">
                    <p className="pb-1 pt-2 text-xl font-bold uppercase text-basic-500/80 text-shadow-sm text-shadow-basic-600">Your Favourite Products</p>
                {products.map((item) => <ModalFavouriteItem key={item.name + item.id} product={item} removeFavourites={removeFavourites} setShowFavourites={setShowFavourites} favourites={favourites}/>)}
           </div>)
}

export default ModalFavourites;