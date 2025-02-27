import { UsersIcon } from "@heroicons/react/24/solid";
import CompanyInfoComponent from "./CompanyInfoComponent";

export default function CompanyInfo({products}){
    return(<div className="h-[320px] bg-green-100/90 ">
        <div className="flex justify-between  w-[1296px] h-full mx-auto ">
            <CompanyInfoComponent  name={'35 k'} icon={<UsersIcon className="text-basic-50 h-[48px]"/>}>Happy Clients</CompanyInfoComponent>
            <CompanyInfoComponent  name={`${products}`} icon={<UsersIcon className="text-basic-50 h-[48px]"/>}>Original Products</CompanyInfoComponent>
            <CompanyInfoComponent  name={'25'} icon={<UsersIcon className="text-basic-50 h-[48px]"/>}>Years of Experience</CompanyInfoComponent>
            <CompanyInfoComponent  name={'12'} icon={<UsersIcon className="text-basic-50 h-[48px]"/>}>Brands</CompanyInfoComponent>
        </div>
    </div>)
}