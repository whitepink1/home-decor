"use client";

import { useRouter, useSearchParams } from "next/navigation";

function useSearchFilterParams(searchTag) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const resultRaw = searchParams.get(searchTag);
    const result = resultRaw ? resultRaw?.split(",") : [];
    const newParams = new URLSearchParams(searchParams.toString());
    const currentValues = result;

    function updateErrorRoute() {
        newParams.delete(searchTag);
        router.replace(`/shop?${newParams.toString()}`, { scroll: false });
        router.refresh();
        return;
    }

    function updateRoute(item) {
        let updatedValues;

        if(typeof item != 'string') {
            newParams.delete(searchTag);
            updatedValues = `${item.min}_${item.max}`
            newParams.set(searchTag, updatedValues);
            router.replace(`/shop?${newParams.toString()}`, { scroll: false });
            return;
        }

        if(typeof item === 'string' && resultRaw?.includes('_')){
            newParams.delete(searchTag);
            updatedValues = item.toLowerCase();
            newParams.set(searchTag, updatedValues);
            router.replace(`/shop?${newParams.toString()}`, { scroll: false });
            return;
        }

        const itemLower = item.toLowerCase();

        if (currentValues.includes(itemLower)) {
            updatedValues = currentValues.filter((v) => v !== itemLower);
        } else {
            updatedValues = [...currentValues, itemLower];
        }

        if (updatedValues.length === 0) {
            newParams.delete(searchTag);
        } else {
            newParams.set(searchTag, updatedValues.join(","));
        }

        router.replace(`/shop?${newParams.toString()}`, { scroll: false });
    } 

    return { updateRoute, updateErrorRoute, result};
}

export default useSearchFilterParams;
