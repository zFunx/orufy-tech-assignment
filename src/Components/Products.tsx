import { useContext, useEffect, useState } from 'react';
import data from '@/assets/products.json'
import Card from './Card/Card';
import Link from 'next/link';
import { FilterContext } from '@/context/FilterContext';
import { Sort } from '@/lib/sort';
import { Brand } from '@/lib/brand';
import { Category } from '@/lib/category';

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
        if (filterContext.sort === Sort.LowToHigh) {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else if (filterContext.sort === Sort.HighToLow) {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }

        // Brand filter
        if (filterContext.brands.length > 0) {
            filteredProducts = filteredProducts.filter(product => filterContext.brands.includes(product.brand as Brand))
        }

        // Category filter
        if (filterContext.categories.length > 0) {
            filteredProducts = filteredProducts.filter(product => filterContext.categories.includes(product.category as Category))
        }

        // Price Filter
        if (filterContext.priceRanges.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
                for (let i = 0; i < filterContext.priceRanges.length; i++) {
                    if (filterContext.priceRanges[i].min <= product.price && filterContext.priceRanges[i].max > product.price) {
                        return true
                    } 
                }
                return false
            })
        }


        setProducts(filteredProducts)
    }, [filterContext])


    return (
        <Link href="https://mini-trips.com" target="_blank" className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(item => <Card key={item.name} {...item} />)}
        </Link>
    )
}

export default Products;