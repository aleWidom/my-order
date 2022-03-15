/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      photo
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onCreateOrder_ = /* GraphQL */ `
  subscription OnCreateOrder_ {
    onCreateOrder_ {
      id
      date
      id_table
    }
  }
`;
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const onCreateTable_ = /* GraphQL */ `
  subscription OnCreateTable_ {
    onCreateTable_ {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
