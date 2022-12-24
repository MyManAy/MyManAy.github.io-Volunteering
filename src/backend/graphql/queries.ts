import { gql } from "graphql-tag";

export const getUserIdByEmail = gql`
  query getUserIdByEmail($email: String!) {
    volunteer(query: { email: $email }) {
      _id
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
