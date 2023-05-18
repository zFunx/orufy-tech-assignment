import { FilterContext } from '@/context/FilterContext';
import { Sort } from '@/lib/sort';
import { useContext, useState } from 'react';

function SortDropdown() {
    const filterContext = useContext(FilterContext);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        filterContext.setSort(event.target.value as Sort);
    };

    return (
        <div>
            <select
                id="sortDropdown"
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1"
            >
                <option value={Sort.NoSort}>Sort by</option>
                <option value={Sort.HighToLow}>High to Low</option>
                <option value={Sort.LowToHigh}>Low to High</option>
            </select>
        </div>
    );
};

export default SortDropdown;
