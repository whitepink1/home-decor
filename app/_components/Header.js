import Favourite from "./Favourite";
import Logo from "./Logo";
import MainLink from "./MainLink";
import Search from "./Search";
import ShoppingCartButton from "./ShoppingCartButton";

export default function Header() {
    return(<header className="absolute text-center h-[80px] w-full bg-gradient-to-b from-basic-600/90 to-basic-50/0 ">
      <div className="flex justify-between items-center h-full mx-[312px]"> 
        <div className="flex justify-start px-1">
            <Logo />
            <p className="text-[16px] px-2 text-basic-50">Haven</p>
        </div>
        <nav>
            <MainLink dest='/'>Home</MainLink>
            <MainLink dest='/shop'>Shop</MainLink>
            <MainLink dest='/about'>About Us</MainLink>
            <MainLink dest='/contact'>Contact Us</MainLink>
        </nav>
        <div className="flex justify-end">
            <Search />
            <Favourite />
            <ShoppingCartButton />
        </div>
      </div>   
    </header>)
}