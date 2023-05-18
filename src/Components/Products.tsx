import { useContext, useEffect, useState } from 'react';
import data from '@/assets/products.json'
import Card from './Card/Card';
import Link from 'next/link';
import { FilterContext } from '@/context/FilterContext';
import { Sort } from '@/lib/sort';

function Products() {
    const [products, setProducts] = useState(data.items);
    const filterContext = useContext(FilterContext);

    useEffect(() => {
        let filteredProducts = [...data.items]

        // Filter by search terms
        if (filterContext.query) {
            filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().startsWith(filterContext.query.toLowerCase()))
        }

        // Sort
        if(filterContext.sort === Sort.LowToHigh){
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        }else if(filterContext.sort === Sort.HighToLow){
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredProducts)
    }, [filterContext])


    return (
        <Link href="https://mini-trips.com" target="_blank" className="grid grid-cols-3 gap-4">
            {products.map(item => <Card key={item.name} {...item} />)}
        </Link>
    )
}

export default Products;