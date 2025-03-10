import Strengths from "./_components/Strengths";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import PromoCard from "./_components/PromoCard";
import CompanyInfo from "./_components/CompanyInfo";
import PopularProducts from "./_components/PopularProducts";
import Testimonials from "./_components/Testimonials";
import OurCategories from "./_components/OurCategories";
import NewArrival from "./_components/NewArrival";
import Sponsors from "./_components/Sponsors";

export default function Home() {
  return (<>
    <main>
      <div className="h-[800px] pt-[143px] bg-[url('../public/main1.jpg')] bg-cover">
        <div className="flex justify-between h-[576px] mx-base max-[1700px]:mx-[150px]">
        <div className="flex flex-col justify-between max-w-[60%] h-[372px] my-auto">
          <h1 className="text-basic-50 font-bold text-[60px]">Where Classic Charm Meets Modern Flair</h1>
          <p className="text-basic-50 text-[16px] max-w-[650px]">Haven is a modern home decor store where style meets comfort. We offer carefully curated, high-quality pieces to transform any space into a cozy and elegant retreat.</p>
          <div className="block relative w-[600px]">
            <input type="text" className="h-[60px] w-full pl-[15px] placeholder:tracking-wide" placeholder="Search Product"/>
            <button className="absolute h-[48px] w-[207px] top-[6px] right-[1%] bg-basic-600 text-basic-50 text-[20px] font-semibold">SEARCH <MagnifyingGlassIcon className="inline-block text-basic-50 h-[24px]"/></button>
          </div>
        </div>
        <div className="relative w-[455px]">
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
