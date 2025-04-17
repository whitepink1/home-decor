import { shortNavigation } from "@/app/constants/constants";
import Image from "next/image";
import Link from "next/link";

const ShortCategoriesNavigation = () => {
    return(<div className="h-[190px] min-[1400px]:h-[240px] flex justify-around items-center gap-[5px] min-[1400px]:justify-center min-[1400px]:gap-[45px] bg-green-100">
        {shortNavigation.map((item, id) => (
            <Link href={item.link} key={id} className="h-[120px] flex justify-between items-center gap-[10px] max-[1400px]:jsutify-center max-[1400px]:flex-col">
                <Image className="rounded-full bg-cover aspect-square opacity-95 max-[1400px]:h-[65px] max-[1400px]:w-[65px]" src={item.url} height={120} width={120} alt="Category image"/>
                <div className="flex-col justify-center items-center max-[1400px]:text-center">
                    <p className="text-[14px] text-basic-50 min-[1400px]:text-[20px]" >{item.name}</p>
                    <p className="text-[14px] text-basic-50 min-[1400px]:text-[20px]">{item.number > 1 ? `${item.number} products` : `${item.number} product`}</p>
                </div>
            </Link>
        ))}
    </div>)
}

export default ShortCategoriesNavigation;