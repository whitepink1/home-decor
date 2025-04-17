"use client";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const { useState, useEffect } = require("react");

const ScrollButton = () => {
    const [isDownScroll, setIsDownScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 600){
                setIsDownScroll(true)
            } else {
                setIsDownScroll(false);
            }
        })
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (<>{isDownScroll && 
                <button onClick={scrollUp} className="fixed bottom-[50px] right-[50px] h-[50px] w-[50px] rounded-full max-[1100px]:hidden">
                    <ArrowUpCircleIcon className=" fill-basic-300 text-red-50 bg-basic-50 rounded-full"/>
                </button>}  
        </>)
}

export default ScrollButton;