import { FilterContext } from '@/context/FilterContext';
import { useContext } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function Search() {
    const filterContext = useContext(FilterContext);

    const search = (event: React.FormEvent<HTMLInputElement>): void => {
        const target = event.target as HTMLInputElement;
        filterContext.setQuery(target.value)
    }

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className="flex-1 pl-3 pr-8 py-1 border border-gray-300 rounded"
                onInput={search}
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <RiSearchLine className="text-gray-400" />
            </div>
        </div>
    )
}

export default Search