"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ModalMenu = () => {
    const [showModalMenu, setShowModalMenu] = useState(false);
    const modalMenuRef = useRef();
    const butMenuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalMenuRef.current &&
                !modalMenuRef.current.contains(event.target) &&
                butMenuRef.current &&
                !butMenuRef.current.contains(event.target)) {
                setShowModalMenu(false);
            }
        };
        if (showModalMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [showModalMenu])

    return(<div>
        <Bars3Icon ref={butMenuRef} onClick={() => setShowModalMenu(!showModalMenu)} className={`h-[28px] text-basic-50 ${showModalMenu && 'bg-basic-50/25 rounded-md'}`}/>
        {showModalMenu && <div ref={modalMenuRef} className="menuModal absolute h-fit w-[130px] flex flex-col gap-y-[15px] justify-between items-start bg-basic-50/95 right-1/2 top-8 p-[15px] font-semibold tracking-widest rounded-md">
                <Link href="/" onClick={(() => setShowModalMenu(false))}>Home</Link>
                <Link href="/shop" onClick={(() => setShowModalMenu(false))}>Shop</Link>
                <Link href="/about" onClick={(() => setShowModalMenu(false))}>About Us</Link>
                <Link href="/contact" onClick={(() => setShowModalMenu(false))}>Contact Us</Link>
            </div>}
    </div>)
}

export default ModalMenu;