import Image from "next/image";
import { getProduct } from "../_lib/data-service";
import FavouriteButton from "./FavouriteButton";

export default async function PromoCard({onBottom, number}) {
    const {id, name, type, price, discount, image } = await getProduct(number);
    
    return(<div className={`absolute hover:drop-shadow-lg hover:scale-[101%] ${onBottom ? 'bottom-0 right-[150px] z-10' : 'top-0 right-0 hover:z-20 '}`}>
      <div className={`flex flex-col justify-start items-center h-[450px] w-[305px] bg-basic-50`}>
        <Image className="object-fill" height={360} width={305} src={image} alt={name} />
        {discount ? <p className="absolute h-[28px] w-[80px] top-[20px] left-[20px] text-center text-[16px] leading-[28px] font-bold text-basic-50 bg-red-50">-{discount}%</p> : ""}
        <FavouriteButton id={id}/>
        <div className="flex flex-col justify-between items-center h-full">
            <h4 className="text-[20px] font-medium text-basic-600 mt-5">{name}</h4>
            <p className="text-[14px] text-basic-600/50">{type}</p>
            <p className="text-[16px] font-semibold text-green-200 mb-5">$ {price}</p>
        </div>
      </div>
    </div>)
}