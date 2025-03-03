import {HomeModernIcon} from '@heroicons/react/24/solid';

export default function Logo({black}) {
    return(<HomeModernIcon href="/"  className={`h-[24px] w-auto ${black ? 'text-basic-600' : 'text-basic-50'} hover:cursor-pointer`}/>)
}