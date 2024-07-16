import SideBar from "@/components/SideBar";

export default function Dashboard() {
  return (
    <div className="bg-grey h-screen flex flex-row justify-start">
      <SideBar />
      <div className="flex-1 p-4 border border-dashed">
        Gemini
      </div>
    </div>
  )
}
