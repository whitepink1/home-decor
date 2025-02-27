export default function MainPageHeader({children, noTop}) {
    return(<h3 className={`text-center text-[40px] font-semibold ${noTop ? "" : 'pt-[60px]'}`}>{children}</h3>)
}