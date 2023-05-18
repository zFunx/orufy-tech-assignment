import { Brand } from '@/lib/brand';
import { Category } from '@/lib/category';
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
    removeCategory: (category: Category) => { }
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
        setCategories(prev => prev.filter(prevBrand => prevBrand != category))
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
        removeCategory
    }}>{children}</FilterContext.Provider>
}