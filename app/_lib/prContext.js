"use client";
import { createContext, useEffect, useState } from "react";

// typeof window !== "undefined" && localStorage.removeItem("favourite");

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
    const [favourites, setFavourites] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        console.log("useEffect is running...");
        const updatedFavourites = JSON.parse(localStorage.getItem("favourite")) || [];
        console.log("Updated Favourites:", updatedFavourites);
        setFavourites(updatedFavourites);
        setIsClient(true);
    }, [])

    const addFavourites = (id) => {
        if (!id) return;
        const updatedFavourites = favourites.includes(id) ? 
            favourites.filter((num) => num !== id)
         : 
            [...favourites, id]
        ;
        setFavourites(updatedFavourites);
        localStorage.setItem("favourite", JSON.stringify(updatedFavourites));
    };

    const removeFavourites = (id) => {
        if (!id) return;
        const updatedFavourites = favourites.filter((num) => num != id);
        setFavourites(updatedFavourites);
        localStorage.setItem("favourite", JSON.stringify(updatedFavourites));
    }

    return (
        <ProductsContext.Provider value={{favourites, addFavourites, isClient, removeFavourites}}>
            {children}
        </ProductsContext.Provider>
    )
}