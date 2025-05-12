import { gql } from "@apollo/client"

export const GET_COUNTRY = gql(/* GraphQL */ `
  query country($code: String!) {
    country(code: $code) {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`)
