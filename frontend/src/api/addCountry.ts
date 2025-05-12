import { gql } from "@apollo/client"

export const ADD_COUNTRY = gql(/* GraphQL */ `
  mutation addCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      code
      emoji
    }
  }
`)
