"use client";
import { useEffect } from "react";
import useSearchFilterParams from "./searchFilterParams";

const OrderFilter = ({order, end, from, total, productsLength}) => {
    const { updateRoute } = useSearchFilterParams('order');
    console.log(!['name', 'price', 'created_at'].includes(order))
    useEffect(() => {
        if (!['name', 'price', 'created_at'].includes(order)) {
            console.log(order);
            updateRoute('name');
        }
    }, [order, updateRoute]);
    if (!productsLength) return null;
    return(<div className="h-[40px] flex justify-between items-center mb-[20px]">
        <p className="text-basic-600/60">Showing {from ? from : 1} - {end > total ? total : end} of {total} result</p>
    <select value={order || "name"} onChange={(e) => updateRoute(e.target.value)} className="h-[40px] w-[140px] mr-[15px] text-basic-600/60 rounded-none border-2 border-basic-600/50">
        <option value='name'>Sort by name</option>
        <option value='price'>Sort by price</option>
        <option value='created_at'>Sort by date</option>
    </select>
    </div>)
}

export default OrderFilter