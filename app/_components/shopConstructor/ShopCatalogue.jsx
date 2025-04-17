"use client";

import DualRangeSlider from "./DualRangeSlider";
import { useEffect, useState } from "react";
import FilterCategory from "./FilterCategory";
import { filterCategories } from "@/app/constants/constants";
import useSearchFilterParams from "./searchFilterParams";

const ShopCatalogue = () => {
    const { updateRoute, updateErrorRoute, result } = useSearchFilterParams("price");
    const [rangeValues, setRangeValues] = useState({min: 0, max: 1500});

    useEffect(() => {
        if(result && result[0]?.includes('_')){
            const [checkMin, checkMax] = [Number(result[0].split("_")[0]), Number(result[0].split("_")[1])];
            let isMinValid = checkMin >= 0 && checkMin < checkMax && checkMin <= 1500;
            let isMaxValid = checkMax > checkMin && checkMax <= 1500;

            const finalMin = isMinValid ? checkMin : 0;
            const finalMax = isMaxValid ? checkMax : 1500;

            if (!isMinValid || !isMaxValid || result[0] !== `${finalMin}_${finalMax}`) {
                updateErrorRoute();
            }
        }
    }, [result])    
    const handleRangePrice = (value) => {
        setRangeValues(value);
    }
    const handleRangeApply = () => {
        updateRoute(rangeValues);
    }

    return(
    <div className="flex flex-col w-[305px] gap-y-[28px]">
            <div className="flex-col justify-start">
                <p className="text-[20px] font-semibold">Filter by Price</p>
                <DualRangeSlider result={result} onChange={handleRangePrice} handleRangeApply={handleRangeApply}/>
            </div>
            <FilterCategory name="Price" values={filterCategories.Price} searchValue={filterCategories.PriceValue} searchTag="price"/>
            <FilterCategory name="Categories" values={filterCategories.Categories} searchTag="category"/>
            <FilterCategory name="Color" values={filterCategories.Color} searchTag="color"/>
            <FilterCategory name="Material" values={filterCategories.Material} searchTag="material"/>        
    </div>)
}

export default ShopCatalogue;