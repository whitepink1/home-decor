import GridPart from "../GridPart";
import MainPageHeader from "../MainPageHeader";
import MainPagePar from "../MainPagePar";

export default function OurCategories(){
    return(
    <div className="flex flex-col justify-start items-center bg-basic-50 h-[900px] pb-[80px]">
        <MainPageHeader>Our Categories</MainPageHeader>
        <MainPagePar>Discover our curated collections designed to elevate your home. From stylish furniture and elegant lighting to unique décor, handcrafted vases, and chic accessories—find the perfect pieces to create a cozy and sophisticated space.</MainPagePar>
        {/* <div className="grid gap-[24px] mx-auto h-[636px] w-[1296px] mt-[60px] midGridCategories min-[1300px]:gridCategories"> */}
        <div className="grid-layout min-[1350px]:w-[1296px] w-[95dvw]">
          <GridPart prop="categoriesFurniture" quantity={16} url={`bg-[url('../public/catA.jpg')]`} link={'/shop?category=furniture'}>Furniture</GridPart>
          <GridPart prop="categoriesLightning" quantity={20} url={`bg-[url('../public/catD.jpg')]`} link={'/shop?category=lighting'}>Lightning</GridPart>
          <GridPart prop="categoriesVases" quantity={18} url={`bg-[url('../public/catF.jpg')]`} link={'/shop?category=vases'}>Vases</GridPart>
          <GridPart prop="categoriesDecor" quantity={35} url={`bg-[url('../public/catL.jpg')]`} link={'/shop?category=decor'}>Decor</GridPart>
          <GridPart prop="categoriesAccessories" quantity={25} url={`bg-[url('../public/catV.jpg')]`} link={'/shop?category=accessories'}>Accessories</GridPart>
        </div>
    </div>)
}