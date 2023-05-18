import data from '@/assets/products.json'
import Card from './Card/Card';
import Link from 'next/link';

function Products() {
    return (
        <Link href="https://mini-trips.com" target="_blank" className="grid grid-cols-3 gap-4">
            {data.items.map(item => <Card key={item.name} {...item} />)}
        </Link>
    )
}

export default Products;