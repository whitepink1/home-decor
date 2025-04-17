import Link from "next/link";

export default function MainLink({children, dest}) {
    return(<Link className="text-basic-50 text-[16px] px-8 my-4" href={dest}>{children}</Link>)
}