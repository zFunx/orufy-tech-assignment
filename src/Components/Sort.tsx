import React, { useState } from 'react';

function SortDropdown() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select
                id="sortDropdown"
                value={selectedOption}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1"
            >
                <option value="">Sort by</option>
                <option value="highToLow">High to Low</option>
                <option value="lowToHigh">Low to High</option>
            </select>
        </div>
    );
};

export default SortDropdown;
