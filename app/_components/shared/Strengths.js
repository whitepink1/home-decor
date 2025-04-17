import { ChatBubbleLeftRightIcon, CreditCardIcon, TruckIcon } from "@heroicons/react/24/solid";
import StrengthComponent from "../StrengthComponent";
import { ST } from "next/dist/shared/lib/utils";

export default function Strengths() {
    return(<div className="bg-green-100 h-[240px]">
        <div  className="flex justify-between mx-[312px] max-2xl:mx-[150px] max-xl:mx-auto">
            <StrengthComponent name={'Secure Payments'} icon={<CreditCardIcon className="text-basic-50 h-[48px]"/>}>Shop with confidence using our safe and encrypted payment methods.</StrengthComponent>
            <StrengthComponent name={'Free Shipping'} icon={<TruckIcon className="text-basic-50 h-[48px]"/>}>Enjoy fast and free shipping on all your orders.</StrengthComponent>
            <StrengthComponent name={'24/7 Support'} icon={<ChatBubbleLeftRightIcon className="text-basic-50 h-[48px]"/>}>Our team is available around the clock to assist you anytime.</StrengthComponent>
        </div>
    </div>)
}