import { FilterContext } from "@/context/FilterContext";
import { PriceRange } from "@/lib/price";
import { useContext } from "react";

interface Props {
    priceRanges: Record<string, PriceRange>
}

function PriceFilter(props: Props) {
    const filterContext = useContext(FilterContext);
    const onAddingPriceRange = (val: PriceRange) => {
        filterContext.addPriceRanges(val)
    }

    return (
        <div>
            {Object.entries(props.priceRanges).map(([key, { min, max }]) => (
                <label key={key as string} className="flex items-center capitalize">
                    <input
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600"
                        onChange={(event) => event.target.checked ? filterContext.addPriceRanges(props.priceRanges[key]) : filterContext.removePriceRange(props.priceRanges[key])}
                    />
                    <span className="ml-2 text-gray-700">{key as string}</span>
                </label>
            )
            )}
        </div>
    )
}

export default PriceFilter;