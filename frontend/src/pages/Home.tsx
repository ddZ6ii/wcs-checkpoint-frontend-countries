import { Suspense } from "react"
import { CountryList } from "../components/CountryList"
import { Loader } from "../components/Loader"

export function HomePage() {
  return (
    <div className="h-full items-center grid">
      <Suspense fallback={<Loader />}>
        <CountryList />
      </Suspense>
    </div>
  )
}
