import { RiSearchLine } from 'react-icons/ri';

function Search() {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className="flex-1 pl-3 pr-8 py-1 border border-gray-300 rounded"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <RiSearchLine className="text-gray-400" />
            </div>
        </div>
    )
}

export default Search