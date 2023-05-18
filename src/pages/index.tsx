import NavLinks from "@/Components/NavLinks";
import Sidebar from "@/Components/Sidebar/Sidebar";
import SortDropdown from "@/Components/Sort";

export default function Home() {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="flex-1">
        <div className="flex justify-between items-center">
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
      </div>
    </div>
  )
}
