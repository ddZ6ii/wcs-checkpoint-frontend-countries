import { gql } from "@apollo/client"

export const GET_COUNTRIES = gql(/* GraphQL */ `
  query countries {
    countries {
      id
      name
      emoji
    }
  }
`)
