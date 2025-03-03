export default function MainPagePar({children, bot}) {
    return(<p className={`text-center text-[16px] max-w-[750px] mx-auto ${bot ? 'pb-[60px]' : ""}`}>{children}</p>)
}