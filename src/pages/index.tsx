import { useState } from "react";
import NavLinks from "@/Components/NavLinks";
import Products from "@/Components/Products";
import Sidebar from "@/Components/Sidebar/Sidebar";
import SortDropdown from "@/Components/Sort";
import { GoSettings } from 'react-icons/go'

export default function Home() {
  const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false)

  return (
    <div className="flex gap-6">
      <Sidebar showSidebarOnMobile={showSidebarOnMobile} closeSidebar={() => setShowSidebarOnMobile(false)}/>
      <div className="md:flex-1 w-full">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <div className="flex gap-2 cursor-pointer md:hidden" onClick={() => setShowSidebarOnMobile(true)}><GoSettings size={24} /> Filters</div>
          <NavLinks links={[
            {
              name: 'Home',
              link: '#'
            },
            {
              name: 'Home Decoration',
              link: '#'
            },
            {
              name: 'Artifical',
              link: '#'
            },
          ]} />

          <SortDropdown />
        </div>

        <div className="pt-4">
          <Products />
        </div>
      </div>
    </div>
  )
}
