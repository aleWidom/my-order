/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory_items = /* GraphQL */ `
  query GetCategory_items($id: Int!) {
    getCategory_items(id: $id) {
      id
      name
      photo
    }
  }
`;
export const listCategory_itemss = /* GraphQL */ `
  query ListCategory_itemss {
    listCategory_itemss {
      id
      name
      photo
    }
  }
`;
export const getItems = /* GraphQL */ `
  query GetItems($id: Int!) {
    getItems(id: $id) {
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
export const listItemss = /* GraphQL */ `
  query ListItemss {
    listItemss {
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
export const getOrders = /* GraphQL */ `
  query GetOrders($id: Int!) {
    getOrders(id: $id) {
      id
      date
      id_table
    }
  }
`;
export const listOrderss = /* GraphQL */ `
  query ListOrderss {
    listOrderss {
      id
      date
      id_table
    }
  }
`;
export const getRestaurants = /* GraphQL */ `
  query GetRestaurants($id: Int!) {
    getRestaurants(id: $id) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const listRestaurantss = /* GraphQL */ `
  query ListRestaurantss {
    listRestaurantss {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const getTables = /* GraphQL */ `
  query GetTables($id: Int!) {
    getTables(id: $id) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
export const listTabless = /* GraphQL */ `
  query ListTabless {
    listTabless {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
