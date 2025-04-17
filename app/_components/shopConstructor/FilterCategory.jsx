import { useSearchParams } from "next/navigation";
import useSearchFilterParams from "./searchFilterParams";

const FilterCategory = ({name, values, searchTag, searchValue = []}) => {
    const { updateRoute, result } = useSearchFilterParams(searchTag);

    return (<div className="flex flex-col justify-start h-fit w-full">
        <p className="h-[37px] leading-[37px] text-[20px]  text-basic-50 font-semibold bg-green-100 pl-3">Filter by {name}</p>
        <div className="flex flex-col justify-center items-start gap-y-2 mt-4 ml-3">
            {values.map((item, id) => (
                <div key={item} className="h-[20px] flex">
                    {name === "Price" ? 
                    <input id={item} type="checkbox" onChange={() => updateRoute(searchValue[id])} checked={result.includes(searchValue[id].toLowerCase())} className="peer h-full w-[20px] rounded-md appearance-none border-[1px] border-basic-600/80 checked:bg-green-50/75 focus:ring-1 focus:ring-green-200 checked:border-0"/>
                    :
                    <input id={item} type="checkbox" onChange={() => updateRoute(item)} checked={result.includes(item.toLowerCase())} className="peer h-full w-[20px] rounded-md appearance-none border-[1px] border-basic-600/80 checked:bg-green-50/75 focus:ring-1 focus:ring-green-200 checked:border-0"/>
                    }
                    <label htmlFor={item} className="text-[16px] font-medium leading-[20px] ml-2">{item}</label>
                    <svg className="absolute w-4 h-4 hidden peer-checked:block pointer-events-none text-basic-50/90 mt-[3px] ml-[2px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            ))}
        </div>
    </div>)
}

export default FilterCategory;