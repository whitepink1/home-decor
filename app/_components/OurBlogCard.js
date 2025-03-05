import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function OurBlogCard({img, date, name}) {
    return(<div className="flex flex-col justify-between h-[500px] w-[415px]">
        <div>
            <Image style={{objectFit: "cover"}} className="h-[360px] opacity-95"  src={img} alt={name} />
            <p className="text-[14px] font-medium text-basic-600/60 pt-3">{date}</p>
            <p className="text-[20px] font-medium leading-[28px]">{name}</p>
        </div>
        <Link href="/" className="text-green-200 text-[20px] leading-[20px] w-auto">Read more <ArrowUpRightIcon className=" inline-block h-[20px]"/></Link>
    </div>)
}