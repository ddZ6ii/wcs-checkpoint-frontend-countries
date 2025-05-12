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
