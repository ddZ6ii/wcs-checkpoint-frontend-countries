import { Suspense } from "react"
import Countries from "../components/Countries"
import Loader from "../components/Loader"

export function HomePage() {
  return (
    <div className="h-full items-center grid">
      <Suspense fallback={<Loader />}>
        <Countries />
      </Suspense>
    </div>
  )
}
