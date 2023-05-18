import NavLinks from "@/Components/NavLinks";
import Sidebar from "@/Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <div className="flex-1">
        <div className="flex">
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
        </div>
      </div>
    </div>
  )
}
