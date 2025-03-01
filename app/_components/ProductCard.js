import Image from "next/image";

export default function ProductCard({product}) {
    const {id, created_at, name, type, color, material, price, description, discount, image } = product;
    
    return(<div className={`flex flex-col justify-start items-center h-[450px] w-[305px] bg-basic-50`}>
        <Image className="object-fill" height={360} width={305} src={image} alt={name} />
        <div className="flex flex-col justify-between items-center h-full">
            <h4 className="text-[20px] font-medium text-basic-600 mt-5">{name}</h4>
            <p className="text-[14px] text-basic-600/50">{type}</p>
            <p className="text-[16px] font-semibold text-green-200 mb-5">$ {price}</p>
        </div>
    </div>)
}