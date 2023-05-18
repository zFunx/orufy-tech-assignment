import { Sort } from '@/lib/sort';
import { createContext, ReactNode, useState } from 'react';

export const FilterContext = createContext({
    query: '',
    setQuery: (val: string) => { },
    sort: Sort.NoSort,
    setSort: (sort: Sort) => { }
});

interface Props {
    children: ReactNode
}

export default function FilterProvider({ children }: Props) {
    const [query, setQuery] = useState<string>('')
    const [sort, setSort] = useState<Sort>(Sort.NoSort)

    return <FilterContext.Provider value={{
        query,
        setQuery,
        sort,
        setSort
    }}>{children}</FilterContext.Provider>
}