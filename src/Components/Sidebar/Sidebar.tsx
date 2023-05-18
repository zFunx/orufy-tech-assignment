import { GoSettings } from 'react-icons/go'
import { Brand } from "@/lib/brand"
import { Category } from "@/lib/category"
import { priceRanges } from '@/lib/price'

// Components
import BoxHOC from "../BoxHOC"
import NameFilter from "../Filter/NameFilter"
import PriceFilter from "../Filter/PriceFilter"

function Sidebar() {
    return (
        <div className="bg-white shadow rounded w-[250px]">
            <BoxHOC>
                <div className="flex justify-between items-center">
                    <strong className="text-lg">Filter</strong>
                    <GoSettings size={24} className="cursor-pointer" />
                </div>
            </BoxHOC>
            <BoxHOC>
                <NameFilter names={Brand}/>
            </BoxHOC>
            <BoxHOC>
                <NameFilter names={Category}/>
            </BoxHOC>
            <BoxHOC>
                <PriceFilter priceRanges={priceRanges}/>
            </BoxHOC>
        </div>
    )
}

export default Sidebar