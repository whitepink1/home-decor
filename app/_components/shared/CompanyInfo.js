import { UsersIcon } from "@heroicons/react/24/solid";
import CompanyInfoComponent from "../CompanyInfoComponent";
import img1 from '../../../public/CI1.png';
import img2 from '../../../public/CI2.png';
import img3 from '../../../public/CI3.png';
import img4 from '../../../public/CI4.png';
import Image from "next/image";

export default function CompanyInfo({products}){
    return(<div className="h-[240px] flex justify-center items-center gap-[50px] min-[1200px]:gap-[150px] bg-green-100/90 ">
            <CompanyInfoComponent  name={'35 k'} icon={<Image className="mx-auto" src={img1} alt="Happy Clients" />}>Happy Clients</CompanyInfoComponent>
            <CompanyInfoComponent  name={`${products}`} icon={<Image className="mx-auto" src={img2} alt="Original products" />}>Original Products</CompanyInfoComponent>
            <CompanyInfoComponent  name={'25'} icon={<Image className="mx-auto" src={img3} alt="Years of Experience" />}>Years of Experience</CompanyInfoComponent>
            <CompanyInfoComponent  name={'12'} icon={<Image className="mx-auto" src={img4} alt="Brands" />} addClass="max-[850px]:hidden">Brands</CompanyInfoComponent>
    </div>)
}