export type Continent = {
  id: number
  name: string
}

export type Country = {
  id: number
  name: string
  code: string
  emoji: string
  continent: Continent
}

export type CountryFormData = {
  name: string
  code: string
  emoji: string
}

export type CountryFormStatus = "typing" | "submitting" | "success"

export type AddCountryForm = {
  data: CountryFormData
  status: CountryFormStatus
}
