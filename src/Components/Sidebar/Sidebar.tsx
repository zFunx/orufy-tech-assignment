import BoxHOC from "../BoxHOC"
import { GoSettings } from 'react-icons/go'

function Sidebar() {
    return (
        <div className="bg-white shadow rounded w-[200px]">
            <BoxHOC>
                <div className="flex justify-between items-center">
                    <strong className="text-lg">Filter</strong>
                    <GoSettings size={24} className="cursor-pointer" />
                </div>
            </BoxHOC>
            <BoxHOC>
                Filter
            </BoxHOC>
        </div>
    )
}

export default Sidebar