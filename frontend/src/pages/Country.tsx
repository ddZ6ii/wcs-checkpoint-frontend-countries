import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_COUNTRY } from "../api/country"
import { Country } from "../types"
import { Loader } from "../components/Loader"

export function CountryPage() {
  const { code } = useParams()

  const {
    data: { country } = {},
    loading,
    error,
  } = useQuery<{
    country: Country
  }>(GET_COUNTRY, {
    variables: { code: code?.toUpperCase() },
    skip: !code,
  })

  if (loading) {
    return <Loader />
  }

  if (error || !country) {
    return (
      <p>
        No country found for code <em>{code}</em>
      </p>
    )
  }

  return (
    <div className="grid gap-4 p-4 w-fit mx-auto justify-items-center">
      <span className="text-8xl">{country.emoji}</span>
      <div className="grid gap-1 justify-items-center">
        <h2>
          Name: {country.name} ({country.code})
        </h2>
        {country.continent.name && <p>Continent: {country.continent.name}</p>}
      </div>
    </div>
  )
}
