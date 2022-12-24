import { gql } from "graphql-request";

export const updateMoneyByUserId = gql`
  mutation updateMoneyByUserId($id: uuid!, $newAmount: money!) {
    update_Money(
      where: { userId: { _eq: $id } }
      _set: { amount: $newAmount }
    ) {
      affected_rows
    }
  }
`;

export const insertUserByEmail = gql`
  mutation insertUserByEmail($email: String!) {
    insert_User_one(object: { email: $email }) {
      id
      email
    }
  }
`;
