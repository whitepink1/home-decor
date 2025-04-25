export default function CompanyInfoComponent({children, name, icon, addClass}) {
    return(
    <div className={`flex flex-col justify-center text-center max-w-[300px] ${addClass}`}>
        {icon}
        <h4 className="text-basic-50 font-semibold text-[40px] py-[10px]">{name}</h4>
        <p className="text-basic-50 text-[24px] w-auto">{children}</p>
    </div>)
}