import { Brand } from '@/lib/brand';
import { Category } from '@/lib/category';
import { PriceRange } from '@/lib/price';
import { Sort } from '@/lib/sort';
import { createContext, ReactNode, useState } from 'react';

export const FilterContext = createContext({
    query: '',
    setQuery: (val: string) => { },
    sort: Sort.NoSort,
    setSort: (sort: Sort) => { },

    brands: [] as Brand[],
    addBrand: (brand: Brand) => { },
    removeBrand: (brand: Brand) => { },

    categories: [] as Category[],
    addCategory: (category: Category) => { },
    removeCategory: (category: Category) => { },

    priceRanges: [] as PriceRange[],
    addPriceRanges: (priceRange: PriceRange) => { },
    removePriceRange: (priceRange: PriceRange) => { }
});

interface Props {
    children: ReactNode
}

export default function FilterProvider({ children }: Props) {
    const [query, setQuery] = useState<string>('')
    const [sort, setSort] = useState<Sort>(Sort.NoSort)

    const [brands, setBrands] = useState<Brand[]>([])
    const addBrand = (brand: Brand) => {
        setBrands([...brands, brand])
    }
    const removeBrand = (brand: Brand) => {
        setBrands(prev => prev.filter(prevBrand => prevBrand != brand))
    }
    
    const [categories, setCategories] = useState<Category[]>([])
    const addCategory = (category: Category) => {
        setCategories([...categories, category])
    }
    const removeCategory = (category: Category) => {
        setCategories(prev => prev.filter(prevCat => prevCat != category))
    }

    const [priceRanges, setPriceRanges] = useState<PriceRange[]>([])
    const addPriceRanges = (priceRange: PriceRange) => {
        setPriceRanges([...priceRanges, priceRange])
        console.log('priceRanges', priceRanges);
        
    }
    const removePriceRange = (priceRange: PriceRange) => {
        setPriceRanges(prev => prev.filter(prevRange => prevRange.min != priceRange.min))
    }

    return <FilterContext.Provider value={{
        query,
        setQuery,
        sort,
        setSort,

        brands,
        addBrand,
        removeBrand,

        categories,
        addCategory,
        removeCategory,

        priceRanges,
        addPriceRanges,
        removePriceRange
    }}>{children}</FilterContext.Provider>
}