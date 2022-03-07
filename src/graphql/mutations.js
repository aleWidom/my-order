/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCategory_items = /* GraphQL */ `
  mutation DeleteCategory_items($id: Int!) {
    deleteCategory_items(id: $id) {
      id
      name
      photo
    }
  }
`;
export const createCategory_items = /* GraphQL */ `
  mutation CreateCategory_items(
    $createCategory_itemsInput: CreateCategory_itemsInput!
  ) {
    createCategory_items(
      createCategory_itemsInput: $createCategory_itemsInput
    ) {
      id
      name
      photo
    }
  }
`;
export const updateCategory_items = /* GraphQL */ `
  mutation UpdateCategory_items(
    $updateCategory_itemsInput: UpdateCategory_itemsInput!
  ) {
    updateCategory_items(
      updateCategory_itemsInput: $updateCategory_itemsInput
    ) {
      id
      name
      photo
    }
  }
`;
export const deleteItems = /* GraphQL */ `
  mutation DeleteItems($id: Int!) {
    deleteItems(id: $id) {
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
export const createItems = /* GraphQL */ `
  mutation CreateItems($createItemsInput: CreateItemsInput!) {
    createItems(createItemsInput: $createItemsInput) {
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
export const updateItems = /* GraphQL */ `
  mutation UpdateItems($updateItemsInput: UpdateItemsInput!) {
    updateItems(updateItemsInput: $updateItemsInput) {
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
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders($id: Int!) {
    deleteOrders(id: $id) {
      id
      date
      id_table
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders($createOrdersInput: CreateOrdersInput!) {
    createOrders(createOrdersInput: $createOrdersInput) {
      id
      date
      id_table
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders($updateOrdersInput: UpdateOrdersInput!) {
    updateOrders(updateOrdersInput: $updateOrdersInput) {
      id
      date
      id_table
    }
  }
`;
export const deleteRestaurants = /* GraphQL */ `
  mutation DeleteRestaurants($id: Int!) {
    deleteRestaurants(id: $id) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const createRestaurants = /* GraphQL */ `
  mutation CreateRestaurants($createRestaurantsInput: CreateRestaurantsInput!) {
    createRestaurants(createRestaurantsInput: $createRestaurantsInput) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const updateRestaurants = /* GraphQL */ `
  mutation UpdateRestaurants($updateRestaurantsInput: UpdateRestaurantsInput!) {
    updateRestaurants(updateRestaurantsInput: $updateRestaurantsInput) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const deleteTables = /* GraphQL */ `
  mutation DeleteTables($id: Int!) {
    deleteTables(id: $id) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
export const createTables = /* GraphQL */ `
  mutation CreateTables($createTablesInput: CreateTablesInput!) {
    createTables(createTablesInput: $createTablesInput) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
export const updateTables = /* GraphQL */ `
  mutation UpdateTables($updateTablesInput: UpdateTablesInput!) {
    updateTables(updateTablesInput: $updateTablesInput) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
