export interface PriceRange {
    min: number;
    max: number;
}

export const priceRanges: Record<string, PriceRange> = {
    'less than $100': { min: 0, max: 100 },
    '$100 - $200': { min: 100, max: 200 },
    '$200 - $500': { min: 200, max: 500 },
    '$500 - $1000': { min: 500, max: 1000 },
    'more than $1000': { min: 1000, max: Infinity },
};
