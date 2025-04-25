import Image from "next/image";

export default function ModalFavouriteItem({product, removeFavourites, favourites, setShowFavourites}) {
    const {id, name, type, price, discount, image } = product;
    const removeHandle = () => {
        if(favourites.length === 1){
            removeFavourites(id);
            setShowFavourites(false);
        } else {
            removeFavourites(id); 
        }
    }
    return(<div className="flex justify-between items-center h-[110px] border-2">
        <Image className="object-fill" height={100} width={100} src={image} alt={name} />
        <div className="flex flex-col justify-between items-center w-[300px]">
            <p>{name}</p>
            <p className="text-[14px] text-basic-600/50">{type}</p>
            {discount ? 
            <div>
                <span className="inline-block text-basic-600/60 line-through text-[16px] font-semibold pr-2">$ {price}</span>
                <p className="inline-block text-[16px] font-semibold text-green-200">$ {(price * ((100 - discount)/100)).toFixed(1)}</p>
            </div>
             : 
            <p className="text-[16px] font-semibold text-green-200">$ {price}</p>}
        </div>
        <button onClick={removeHandle} className="w-[30px] h-[30px] rounded-lg border-2 border-basic-300/25 mr-2">X</button>
    </div>)
}