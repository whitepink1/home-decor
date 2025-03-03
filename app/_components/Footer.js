import Image from "next/image";
import Logo from "./Logo";
import facebook from "../../public/Facebook_black.png";
import x from "../../public/X.png";
import instagram from "../../public/Instagram_black.png";
import youtube from "../../public/Youtube_black.png";
import FooterNavigation from "./FooterNavigation";
import PaymentIcons from '../../public/payment-icons.png';

export default function Footer() {
    const itemShop1 = [
        {name: "Furniture", url: "/"},
        {name: "Vases", url: "/"},
        {name: "Lightning", url: "/"},
        {name: "Sale", url: "/"},
        {name: "Decor", url: "/"},
        {name: "Accessories", url: "/"},
    ];
    const itemShop2 = [
        {name: "Home", url: "/"},
        {name: "Shop", url: "/shop"},
        {name: "About", url: "/about"},
        {name: "Blog", url: "/"},
        {name: "F.A.Q", url: "/"},
        {name: "Contact", url: "/contact"},
    ]

    return(<footer className="h-[415px]">
        <div className="flex justify-between mx-[312px] pt-[80px]">
            <div className="flex flex-col justify-between h-[200px]">
                <div className="flex h-[42px] items-center">
                    <Logo black={true}/>
                    <p className="text-[16px] px-2 text-basic-600">Haven</p>
                </div>
                <p className="font-[16px] text-basic-600/50 w-[250px]">Haven is your destination for stylish and high-quality home decor. We offer a carefully curated selection to help you create a beautiful and inviting space.</p>
                <div className="flex justify-start gap-x-2">
                    <Image className="hover:cursor-pointer hover:scale-[103%]" src={facebook} alt="Facebook logo" />
                    <Image className="hover:cursor-pointer hover:scale-[103%]" src={x} alt="X logo" />
                    <Image className="hover:cursor-pointer hover:scale-[103%]" src={instagram} alt="Instagram logo" />
                    <Image className="hover:cursor-pointer hover:scale-[103%]" src={youtube} alt="Youtube logo" />
                </div>
            </div>
            <FooterNavigation listOfItems={itemShop1}>Shop</FooterNavigation>
            <FooterNavigation listOfItems={itemShop2}>Useful Links</FooterNavigation>
            <div className="flex flex-col justify-between">
                <div>
                    <h5 className="text-[20px] font-semibold pb-[12px]">Address</h5>
                    <p>8911 Tanglewood Ave.</p>
                    <p>Capitol Heights,MD 20743</p>
                </div>
                <div>
                    <h5 className="text-[20px] font-semibold pb-[12px]">Opening hours</h5>
                    <p>Mon-Fri 08:00AM - 08:00PM</p>
                    <p>Sat-Sun 10:00AM - 06:00PM</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between pt-[64px] mx-[312px]">
            <p className="text-basic-600/60">© Copyright Decor 2023. Design by Figma.guru</p>
            <Image src={PaymentIcons} alt='Payment Icons' />
        </div>
    </footer>)
}