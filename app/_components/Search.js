'use client';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Search(){
    return(<div className="block relative mx-2">
        <input id="search" type="text" className="px-1 rounded-lg bg-basic-50/0 text-basic-50 focus:bg-basic-50/35 focus:outline-none"/>
        <MagnifyingGlassIcon onClick={() => document.getElementById("search").focus()} className="absolute h-[24px] top-0 right-0 text-basic-50 hover:cursor-pointer"/>
    </div>)
}