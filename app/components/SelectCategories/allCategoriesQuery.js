import { gql } from 'react-apollo';

export const allCategoriesQuery = gql`query allCategoriesSearch {
  allCategory{
    title
    id
  }
}`;
