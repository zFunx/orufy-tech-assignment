import { PriceRange } from "@/lib/price";

interface Props {
    priceRanges: Record<string, PriceRange>
}

function PriceFilter(props: Props) {
    return (
        <div>
            {Object.entries(props.priceRanges).map(([key, { min, max }]) => (
                <label key={key as string} className="flex items-center capitalize">
                    <input
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600"
                    // onChange={onChange}
                    />
                    <span className="ml-2 text-gray-700">{key as string}</span>
                </label>
            )
            )}
        </div>
    )
}

export default PriceFilter;