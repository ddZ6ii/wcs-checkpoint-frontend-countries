import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export function PageLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen gap-4 bg-[#f5f5f5]">
      <Header />
      <main className="p-4 container mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
