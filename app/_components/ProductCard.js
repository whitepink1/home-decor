import Image from "next/image";

export default async function ProductCard({promo, t, r}) {
    return(<div className={`flex flex-col justify-start items-center h-[470px] w-[305px] bg-basic-50 ${promo ? `absolute top-[${t}px] right-[${r}px]` : ""}`}>
        {/* <Image /> */}
        <h4 className="text-[20px] font-medium text-basic-600">Super Lamp</h4>
        <p className="text-[14px] text-basic-600/50">Lightning</p>
        <p className="text-[16px] font-semibold text-green-200">$ 220</p>
    </div>)
}