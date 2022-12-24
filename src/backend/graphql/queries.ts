import { gql } from "graphql-request";

export const getUserIdByEmail = gql`
  query getUserIdByEmail($email: String!) {
    User(where: { email: { _eq: $email } }) {
      id
    }
  }
`;

export const getMoneyByUserId = gql`
  query getMoneyByUserId($id: uuid!) {
    Money(where: { userId: { _eq: $id } }) {
      amount
    }
  }
`;
