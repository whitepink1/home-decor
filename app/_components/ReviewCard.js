import Image from "next/image";
import RatingStars from "./RatingStars";
import TwoCommas from '../../public/twoCommas.png';

export default function ReviewCard({name, location, header, text, stars, image, prodImage}) {
    return(<div className="relative flex justify-between h-[400px] w-[1300px] mx-auto bg-basic-50 px-5 mt-[50px]">      
        <div className="my-auto">
            <Image className="object-cover" height={300} width={300} src={prodImage} alt="Product Image" />
        </div>
        <div className="flex flex-col justify-start items-center text-center max-w-[50%] max-h-[300px] my-[50px]">
            <Image className="absolute object-cover  top-[-50px] rounded-full" height={100} width={100} src={image} alt={name} />
            <h5 className="text-[20px] font-medium text-basic-600">{name}</h5>
            <p className="text-[14px] text-basic-600/60">{location}</p>
            <h4 className="text-[28px] font-semibold my-4 ">{header}</h4>
            <p className="text-[16px] text-basic-600/60">{text}</p>
            <RatingStars stars={stars}/>
        </div>
        <div className="my-auto w-[200px]">
            <Image className="mx-auto text-green-100" src={TwoCommas} alt="Two Commas Icon" />
        </div>
    </div>)
}