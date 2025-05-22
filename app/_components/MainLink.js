"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainLink({children, dest}) {
    const pathname = usePathname();
    return(<Link className={`text-basic-50 text-[16px] px-8 py-2 my-2 ${pathname === dest ? 'bg-white/15' : ''}`} href={dest}>{children}</Link>)
}