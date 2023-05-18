import Link from 'next/link'
import logo from '@/assets/mini-trips.com.png'

function Nav() {
    return (
        <div className="shadow-xl p-2">
            <div className="max-w-4xl bg-red-500 mx-auto flex">
                <Link href="https://mini-trips.com" target="_blank"><img alt="logo" src={logo.src} className="h-8" /></Link>
            </div>
        </div>
    )
}

export default Nav