import Image from "next/image";
import Strengths from "./_components/Strengths";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ProductCard from "./_components/ProductCard";

export default function Home() {
  return (<main>
      <div className="h-[800px] pt-[143px] bg-[url('../public/main1.jpg')] bg-cover">
        <div className="flex justify-between h-[576px] mx-[312px]">
        <div className="flex flex-col justify-between max-w-[60%] h-[372px] my-auto">
          <h1 className="text-basic-50 font-bold text-[60px]">Where Classic Charm Meets Modern Flair</h1>
          <p className="text-basic-50 text-[16px]">Haven is a modern home decor store where style meets comfort. We offer carefully curated, high-quality pieces to transform any space into a cozy and elegant retreat.</p>
          <div className="block relative w-[600px]">
            <input type="text" className="h-[60px] w-full placeholder:pl-[15px] placeholder:tracking-wide" placeholder="Search Product"/>
            <button className="absolute h-[48px] w-[207px] top-[6px] right-[1%] bg-basic-600 text-basic-50 text-[20px] font-semibold">SEARCH <MagnifyingGlassIcon className="inline-block text-basic-50 h-[24px]"/></button>
          </div>
        </div>
        <div className="block relative">
          <ProductCard promo={true} t="0" r="0"/>
          <ProductCard promo={true} t="50" r="500"/>
        </div>
        </div>
      </div>
      <Strengths />
    </main>
  );
}
