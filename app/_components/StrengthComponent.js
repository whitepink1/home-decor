export default function StrengthComponent({children, name, icon}) {
    return(
    <div className="flex flex-col justify-start text-center max-w-[350px]">
        {icon}
        <h4 className="text-basic-50 font-semibold text-[24px] py-[10px]">{name}</h4>
        <p className="text-basic-50 text-[16px] w-auto max-[1200px]:hidden">{children}</p>
    </div>)
}