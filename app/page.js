import Strengths from "./_components/shared/Strengths";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PromoCard from "./_components/PromoCard";
import CompanyInfo from "./_components/shared/CompanyInfo";
import PopularProducts from "./_components/PopularProducts";
import Testimonials from "./_components/Testimonials";
import OurCategories from "./_components/shared/OurCategories";
import NewArrival from "./_components/NewArrival";
import Sponsors from "./_components/shared/Sponsors";
import Image from "next/image";

export default function Home() {
  return (<>
    <main>
      <div className="relative h-[800px] pt-[143px]">
        <Image  
            src="/main1.jpg"
            alt="Background Homepage"
            fill
            className="z-5 object-cover object-center"
            />
        <div className="z-10 grid grid-cols-1 gap-[15vw] min-[1350px]:grid-cols-2 mt-[143px] mx-auto max-w-[1300px] px-4 max-[1350px]:justify-items-center">
          <div className="z-10 flex flex-col justify-between h-fit max-sm:gap-y-[25px] w-[95vw] min-[650px]:min-w-[600px] min-[650px]:max-w-[60%] sm:h-[372px] ml-3">
            <h1 className="text-basic-50 font-bold text-[60px]">Where Classic Charm Meets Modern Flair</h1>
            <p className="text-basic-50 text-[16px] max-w-[650px]">Haven is a modern home decor store where style meets comfort. We offer carefully curated, high-quality pieces to transform any space into a cozy and elegant retreat.</p>
            <div className="flex relative max-w-[600px]">
              <input type="text" className="h-[60px] w-full pl-[15px] placeholder:tracking-wide" placeholder="Search Product"/>
              <button className="absolute h-[48px] w-[207px] top-[6px] right-[1%] bg-basic-600 text-basic-50 text-[20px] font-semibold">SEARCH <MagnifyingGlassIcon className="inline-block text-basic-50 h-[24px]"/></button>
            </div>
          </div>
          <div className="relative max-w-[455px] block max-[1350px]:hidden">
            <PromoCard number={9} onBottom={true}/>
            <PromoCard number={20} onBottom={false}/>
          </div>
        </div>
      </div>
      <Strengths />
      <OurCategories />
      <CompanyInfo products={114}/>
      <PopularProducts/>
      <Testimonials />
      <NewArrival />
      <Sponsors />
    </main>
    </>);
}
