import Image from "next/image";
import { getProduct } from "../_lib/data-service";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import RatingStars from "./RatingStars";

export default async function ReviewCard({name, location, header, text, stars}) {
    const rew1 = await getProduct(17);
    return(<div className="relative flex justify-between h-[400px] w-[1300px] bg-basic-50 px-5">
        
        <div className="my-auto">
            <Image className="object-cover" height={300} width={300} src={rew1.image} alt={rew1.name} />
        </div>
        <div className="flex flex-col justify-start items-center text-center max-w-[50%] max-h-[300px] my-[50px]">
            <Image className="absolute object-cover top-[-50px] rounded-full" height={100} width={100} src={rew1.image} alt={rew1.name} />
            <h5 className="text-[20px] font-medium text-basic-600">{name}</h5>
            <p className="text-[14px] text-basic-600/60">{location}</p>
            <h4 className="text-[28px] font-semibold my-4 ">{header}</h4>
            <p className="text-[16px] text-basic-600/60">{text}</p>
            <RatingStars stars={stars}/>
        </div>
        <div className="my-auto w-[200px]">
            <ChatBubbleBottomCenterIcon className="mx-auto text-green-100 h-[70px]"/>
        </div>
    </div>)
}