"use client";

import { useEffect, useState } from "react";

const DualRangeSlider = ({result, onChange, handleRangeApply}) => {
    const isResult = result && result[0];
    const rangeParams = isResult?.includes('_') ? isResult.split("_") : [0, 1500];
    const [min, max] = [0, 1500];
    const [minValue, setMinValue] = useState(Number(rangeParams[0]) >= Number(rangeParams[1]) ? min : Number(rangeParams[0]));// || min);
    const [maxValue, setMaxValue] = useState(Number(rangeParams[1]) > 1500 ? max : Number(rangeParams[1]));// || max);
    useEffect(() => {
        onChange({min: minValue, max: maxValue})
    }, [minValue, maxValue]); 

    return(<>
        <div className="w-full h-[25px] my-[15px]">        
            <div className="relative w-[300px] h-[4px] price_range_slider">
                <div className="absolute top-0 left-0 h-[4px] w-full bg-basic-200 rounded track-slider" />
                <div  className="absolute top-0 h-[3px] bg-green-100 rounded range-slider"style={{
                            left: `${(minValue / max) * 100}%`,
                            width: `${minValue > max - 100 || minValue === maxValue ? 0 : ((maxValue - minValue) / max ) * 100}%`,
                            maxWidth: `${100 - (minValue / max) * 100}%`,
                }}/>
                <input type="range" min={min} max={max} value={minValue} onChange={(e) => {
                        const value = Math.min(Number(e.target.value ), maxValue - 1);
                        setMinValue(value)
                }} className={`thumb thumb-left w-[300px]`} style={{zIndex: minValue > max - 100 || minValue === maxValue ? 5 : undefined}}/>
                <input type="range" min={min} max={max} value={maxValue} onChange={(e) => {
                        const value = Math.max(Number(e.target.value ), minValue + 1);
                        setMaxValue(value)
                }} className={`thumb thumb-right w-[300px]`} style={{zIndex: minValue > max - 100 || minValue === maxValue ? 4 : undefined}}/>
            </div>
        </div>
        <div className="flex justify-between">
            <p className="text-[16px] font-semibold">Price: ${minValue} - ${maxValue}</p>
            <button onClick={handleRangeApply} className="w-[72px] bg-basic-600 text-basic-50 hover:scale-[101%]">Apply</button>
        </div>
    </>)
}

export default DualRangeSlider;
