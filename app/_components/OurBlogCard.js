import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function OurBlogCard({img, date, name}) {
    return(<div className="flex flex-col justify-between h-fit w-fit min-[1450px]:w-[415px] max-[1450px]:mx-[5vw] min-[1450px]:h-[500px] max-[1450px]:mt-[30px]">
        <div>
            <Image className="max-h-[360px] opacity-95 aspect-video min-[1450px]:aspect-square "  src={img} alt={name} />
            <p className="text-[14px] font-medium text-basic-600/60 pt-3">{date}</p>
            <p className="text-[20px] font-medium leading-[28px]">{name}</p>
        </div>
        <Link href="/" className="text-green-200 text-[20px] leading-[20px] w-auto">Read more <ArrowUpRightIcon className=" inline-block h-[20px]"/></Link>
    </div>)
}