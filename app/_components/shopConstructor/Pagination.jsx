"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useSearchFilterParams from "./searchFilterParams";
import { useEffect } from "react";

const Pagination = ({page, total, resultPageQuantity, isPage, productsLength}) => {
    const { updateRoute } = useSearchFilterParams('page');
    const totalPages =  Math.ceil(total / resultPageQuantity);
    useEffect(() => {
        if (page > totalPages && totalPages > 0) {
          updateRoute(1, totalPages);
        }
    }, [page, totalPages, updateRoute]);
    const getPageNumbers = () => {
        const visiblePages = 3;
        let start = Math.max(1, page - 1);
        let end = Math.min(totalPages, start + visiblePages - 1);
    
        if (end - start < visiblePages - 1) {
          start = Math.max(1, end - visiblePages + 1);
        }
    
        const pages = [];
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        return pages;
      };
    if (totalPages <= 1) return null;
    return(<>
        {((isPage || productsLength) && total > resultPageQuantity) ? <div className="flex justify-between items-center my-[40px]">
            <button onClick={() => updateRoute((page - 1), totalPages)} disabled={page === 1} className={`h-[40px] w-[100px] flex justify-center items-center text-basic-600/60 rounded-md shadow-md border border-basic-600/60 ${page === 1 ? 'opacity-55' : 'hover:scale-105 hover:shadow-lg'}`}>
                <ChevronLeftIcon className="h-[20px]"/> Prev
            </button>
            <div className="flex justify-center gap-x-3">
                {getPageNumbers().map((p) => (
                    <button key={p}
                        onClick={() => updateRoute(p, totalPages)}
                        className={`h-[40px] w-[40px] rounded-md border text-sm font-semibold ${
                            p === page
                            ? "bg-green-100 text-white border-basic-600/60 -translate-y-0.5"
                            : "hover:bg-gray-100 border-basic-600/60"
                        }`}
                    >{p}
                    </button>
                ))}
            </div>
            <button onClick={() => updateRoute((page + 1), totalPages)} disabled={page === totalPages} className={`h-[40px] w-[100px] flex justify-center items-center text-basic-600/60 rounded-md shadow-md border border-basic-600/60 ${page === totalPages ? 'opacity-55' : 'hover:scale-105 hover:shadow-lg'}`}>
                Next <ChevronRightIcon className="h-[20px]"/>
            </button>
        </div>
        :
        null}
    </>)
}

export default Pagination;