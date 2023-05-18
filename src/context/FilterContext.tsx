import { createContext, ReactNode, useState } from 'react';

export const FilterContext = createContext({
    query: '',
    setQuery: (val: string) => { }
});

interface Props {
    children: ReactNode
}

export default function FilterProvider({ children }: Props) {
    const [query, setQuery] = useState<string>('')

    return <FilterContext.Provider value={{
        query,
        setQuery
    }}>{children}</FilterContext.Provider>
}