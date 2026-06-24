"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

function useSearchFilterParams(searchTag) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const result = useMemo(() => {
        const resultRaw = searchParams.get(searchTag);
        return resultRaw ? resultRaw?.split(",") : [];
    }, [searchParams, searchTag]);

    const getNewParams = () => new URLSearchParams(searchParams.toString());

    const updateErrorRoute = useCallback(() => {
        const newParams = getNewParams();
        newParams.delete(searchTag);
        router.replace(`/shop?${newParams.toString()}`, { scroll: false });
        router.refresh();
        return;
    }, [searchParams, searchTag, router]);

    const updateRoute = useCallback((item, totalPages ) => {
        const newParams = getNewParams();
        const resultRaw = searchParams.get(searchTag);
        const currentValues = resultRaw ? resultRaw.split(",") : [];
        let updatedValues;

        if(searchTag === 'order') {
            newParams.delete(searchTag);
            updatedValues = ['name', 'price', 'created_at'].includes(item) ? item : 'name';
            newParams.set(searchTag, updatedValues);
            router.replace(`/shop?${newParams.toString()}`, { scroll: false });
            return;
        }

        if(searchTag === 'page') {
            newParams.delete(searchTag);
            updatedValues = totalPages < item || item < 1 ? '1' : `${item}`;
            newParams.set(searchTag, updatedValues);
            router.replace(`/shop?${newParams.toString()}`, { scroll: false });
            return;
        }
        if(typeof item != 'string' && searchTag != 'page') {
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
    }, [searchParams, searchTag, router]);

    return { updateRoute, updateErrorRoute, result};
}

export default useSearchFilterParams;
