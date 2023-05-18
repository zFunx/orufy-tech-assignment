import { GoSettings } from 'react-icons/go'
import { Brand } from "@/lib/brand"
import { Category } from "@/lib/category"
import { priceRanges } from '@/lib/price'

// Components
import BoxHOC from "../BoxHOC"
import NameFilter from "../Filter/NameFilter"
import PriceFilter from "../Filter/PriceFilter"
import { useContext } from 'react'
import { FilterContext } from '@/context/FilterContext'

interface Props {
    showSidebarOnMobile: boolean,
    closeSidebar: () => void
}

function Sidebar(props: Props) {
    const filterContext = useContext(FilterContext);

    return (
        <div className={`bg-white shadow rounded fixed inset-0 sm:static sm:w-60 sm:block md:h-fit  ${props.showSidebarOnMobile ? '' : 'hidden'}`}>
            <BoxHOC>
                <div className="flex justify-between items-center">
                    <strong className="text-lg">Filter</strong>
                    <GoSettings size={24} className="cursor-pointer hidden sm:block" />
                    <button onClick={props.closeSidebar} className="sm:hidden rounded-full px-3 py-1 bg-black text-white">Apply Filters</button>
                </div>
            </BoxHOC>
            <BoxHOC>
                <NameFilter names={Brand}
                    addNameFilter={(val) => filterContext.addBrand(val as Brand)}
                    removeNameFilter={(val) => filterContext.removeBrand(val as Brand)}
                />
            </BoxHOC>
            <BoxHOC>
                <NameFilter
                    names={Category}
                    addNameFilter={(val) => filterContext.addCategory(val as Category)}
                    removeNameFilter={(val) => filterContext.removeCategory(val as Category)}
                />
            </BoxHOC>
            <BoxHOC>
                <PriceFilter priceRanges={priceRanges} />
            </BoxHOC>
        </div>
    )
}

export default Sidebar