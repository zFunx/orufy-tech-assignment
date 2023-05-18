import Link from 'next/link'
import logo from '@/assets/mini-trips.com.png'
import Search from './Search'

function Nav() {
    return (
        <div className="shadow-xl p-3">
            <div className="max-w-4xl mx-auto flex">
                <Link href="https://mini-trips.com" target="_blank"><img alt="logo" src={logo.src} className="h-8" /></Link>
            <div className="ml-12">
                <Search />
            </div>
            </div>
        </div>
    )
}

export default Nav