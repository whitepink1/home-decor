import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function ShoppingCartButton() {
    return(<div className="inline-block mx-2 hover:scale-[104%] hover:cursor-pointer">
        <ShoppingCartIcon  className="h-[24px] w-auto text-basic-50 "/>
    </div>)
}