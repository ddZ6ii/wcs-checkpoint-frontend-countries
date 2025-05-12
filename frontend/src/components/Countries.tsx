import { useSuspenseQuery } from "@apollo/client"
import { GET_COUNTRIES } from "../api/countries"
import { Country } from "../types"

export default function Countries() {
  const { data: { countries = [] } = {}, error } = useSuspenseQuery<{
    countries: Country[]
  }>(GET_COUNTRIES)

  if (error) {
    console.error(error)
    return <p>No countries currently available...</p>
  }

  return (
    <ul className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(96px,100%),1fr))]">
      {countries.map((country) => (
        <li
          key={country.id}
          className="grid gap-1 border border-neutral-200 p-4 rounded-md shadow-sm hover:shadow-lg cursor-pointer hover:bg-neutral-50 transition-all duration-150 hover:shadow-accent-500/10 place-items-center"
        >
          <h2>{country.name}</h2>
          <span className="text-2xl">{country.emoji}</span>
        </li>
      ))}
    </ul>
  )
}
