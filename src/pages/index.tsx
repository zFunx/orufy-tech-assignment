import Sidebar from "@/Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        Main
      </div>
    </div>
  )
}
