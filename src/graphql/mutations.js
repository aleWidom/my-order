/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory($id: Int!) {
    deleteCategory(id: $id) {
      id
      name
      photo
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
    createCategory(createCategoryInput: $createCategoryInput) {
      id
      name
      photo
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory($updateCategoryInput: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $updateCategoryInput) {
      id
      name
      photo
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem($id: Int!) {
    deleteItem(id: $id) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem($createItemInput: CreateItemInput!) {
    createItem(createItemInput: $createItemInput) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem($updateItemInput: UpdateItemInput!) {
    updateItem(updateItemInput: $updateItemInput) {
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
export const deleteOrder_ = /* GraphQL */ `
  mutation DeleteOrder_($id: Int!) {
    deleteOrder_(id: $id) {
      id
      date
      id_table
    }
  }
`;
export const createOrder_ = /* GraphQL */ `
  mutation CreateOrder_($createOrder_Input: CreateOrder_Input!) {
    createOrder_(createOrder_Input: $createOrder_Input) {
      id
      date
      id_table
    }
  }
`;
export const updateOrder_ = /* GraphQL */ `
  mutation UpdateOrder_($updateOrder_Input: UpdateOrder_Input!) {
    updateOrder_(updateOrder_Input: $updateOrder_Input) {
      id
      date
      id_table
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant($id: Int!) {
    deleteRestaurant(id: $id) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant($createRestaurantInput: CreateRestaurantInput!) {
    createRestaurant(createRestaurantInput: $createRestaurantInput) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant($updateRestaurantInput: UpdateRestaurantInput!) {
    updateRestaurant(updateRestaurantInput: $updateRestaurantInput) {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const deleteTable_ = /* GraphQL */ `
  mutation DeleteTable_($id: Int!) {
    deleteTable_(id: $id) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
export const createTable_ = /* GraphQL */ `
  mutation CreateTable_($createTable_Input: CreateTable_Input!) {
    createTable_(createTable_Input: $createTable_Input) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
export const updateTable_ = /* GraphQL */ `
  mutation UpdateTable_($updateTable_Input: UpdateTable_Input!) {
    updateTable_(updateTable_Input: $updateTable_Input) {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
