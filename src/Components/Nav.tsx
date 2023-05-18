import Link from 'next/link'
import Search from './Search'

// Assets
import logo from '@/assets/mini-trips.com.png'
import profilePic from '@/assets/profile-pic.jpg'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { RiNotification2Line } from 'react-icons/ri'


function Nav() {
    return (
        <div className="shadow-xl p-3 bg-white">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <div className='flex'>
                    <Link href="https://mini-trips.com" target="_blank"><img alt="logo" src={logo.src} className="h-8" /></Link>
                    <div className="ml-12">
                        <Search />
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    {/* Categories */}
                    <strong className="inline-flex gap-1 items-center cursor-pointer">
                        <AiOutlineUnorderedList /> Categories
                    </strong>

                    {/* Notification */}
                    <div className="relative cursor-pointer">
                        <RiNotification2Line className="text-gray-600" />
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                    </div>

                    {/* Profile pic */}
                    <Link href="https://www.linkedin.com/in/v-kas/" target='_blank'>
                        <img alt="Vikas Kumar" src={profilePic.src} className="rounded-full h-8 w-8 object-cover border-white border-2 shadow-lg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav