import { gql } from 'react-apollo';

export const productListQuery = gql`query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
  poc(id: $id) {
    products(categoryId: $categoryId, search: $search) {
      productVariants{
        title
        description
        imageUrl
        price
      }
    }
  }
}`;

export const allCategoriesQuery = gql`query allCategoriesSearch {
  allCategory{
    title
    id
  }
}`;
