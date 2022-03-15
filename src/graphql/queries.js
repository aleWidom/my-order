/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: Int!) {
    getCategory(id: $id) {
      id
      name
      photo
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys {
    listCategorys {
      id
      name
      photo
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: Int!) {
    getItem(id: $id) {
      id
      title
      description
      price
      photo
      id_category
      id_restaurant
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems {
    listItems {
      id
      title
      description
      price
      photo
      id_category
      id_restaurant
    }
  }
`;
export const getOrder_ = /* GraphQL */ `
  query GetOrder_($id: Int!) {
    getOrder_(id: $id) {
      id
      date
      id_table
    }
  }
`;
export const listOrder_s = /* GraphQL */ `
  query ListOrder_s {
    listOrder_s {
      id
      date
      id_table
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: Int!) {
    getRestaurant(id: $id) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants {
    listRestaurants {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const getTable_ = /* GraphQL */ `
  query GetTable_($id: Int!) {
    getTable_(id: $id) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
export const listTable_s = /* GraphQL */ `
  query ListTable_s {
    listTable_s {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
