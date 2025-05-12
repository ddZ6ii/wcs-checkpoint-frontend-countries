import { Suspense } from "react"
import { CountryList } from "../components/CountryList"
import { Loader } from "../components/Loader"
import { AddCountry } from "../components/AddCountry"

export function HomePage() {
  return (
    <div className="h-full items-start grid grid-rows-[auto_1fr] gap-8">
      <AddCountry />
      <Suspense fallback={<Loader />}>
        <CountryList />
      </Suspense>
    </div>
  )
}
