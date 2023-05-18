import Link from 'next/link'
import Search from './Search'

// Assets
import logo from '@/assets/mini-trips.com.png'
import { AiOutlineUnorderedList } from 'react-icons/ai'


function Nav() {
    return (
        <div className="shadow-xl p-3">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div className='flex'>
                    <Link href="https://mini-trips.com" target="_blank"><img alt="logo" src={logo.src} className="h-8" /></Link>
                    <div className="ml-12">
                        <Search />
                    </div>
                </div>
                <div className='flex'>
                    <strong className="inline-flex gap-1 items-center cursor-pointer">
                        <AiOutlineUnorderedList /> Categories
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default Nav