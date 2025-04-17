import Link from "next/link";
import Favourite from "./Favourite";
import Logo from "./Logo";
import MainLink from "./MainLink";
import Search from "./Search";
import ShoppingCartButton from "./ShoppingCartButton";

export default function Header() {
    return(<header className="absolute text-center h-[80px] w-full bg-gradient-to-b from-basic-600/90 to-basic-50/0">
      <div className="flex justify-between items-center h-full mx-[25px] min-[1125px]:mx-[100px] min-[1600px]:mx-[312px]"> 
        <Link href="/" className="flex justify-start px-1">
            <Logo />
            <p className="text-[16px] px-2 text-basic-50 max-[690px]:hidden">Haven</p>
        </Link>
        <nav className="max-[800px]:hidden">
            <MainLink dest='/'>Home</MainLink>
            <MainLink dest='/shop'>Shop</MainLink>
            <MainLink dest='/about'>About Us</MainLink>
            <MainLink dest='/contact'>Contact Us</MainLink>
        </nav>
        <div className="flex justify-end max-[690px]:gap-4">
            <Search />
            <Favourite />
            <ShoppingCartButton />
        </div>
        <div className="min-[800px]:hidden text-basic-50">
          Ham
        </div>
      </div>   
    </header>)
}