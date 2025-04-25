import Image from "next/image";
import FavouriteButton from "./FavouriteButton";

export default function ProductCard({product}) {
    const {id, name, type, price, discount, image } = product;
    
    return(<div className={`relative flex flex-col justify-start items-center h-[450px] w-[305px] bg-basic-50`}>
        <Image className="object-fill" height={360} width={305} src={image} alt={name} />
        {discount ? <p className="absolute h-[28px] w-[80px] top-[20px] left-[20px] text-center text-[16px] leading-[28px] font-bold text-basic-50 bg-red-50">-{discount}%</p> : ""}
        <FavouriteButton id={id}/>
        <div className="flex flex-col justify-between items-center text-center h-full">
            <h4 className="text-[20px] font-medium text-basic-600 mt-5">{name}</h4>
            <p className="text-[14px] text-basic-600/50">{type}</p>
            {discount ? <div><span className="inline-block text-basic-600/60 line-through text-[16px] font-semibold pr-2">$ {price}</span><p className="inline-block text-[16px] font-semibold text-green-200 mb-5">$ {(price * ((100 - discount)/100)).toFixed(1)}</p></div> : <p className="text-[16px] font-semibold text-green-200 mb-5">$ {price}</p>}
        </div>
    </div>)
}