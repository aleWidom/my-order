/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory_items = /* GraphQL */ `
  subscription OnCreateCategory_items {
    onCreateCategory_items {
      id
      name
      photo
    }
  }
`;
export const onCreateItems = /* GraphQL */ `
  subscription OnCreateItems {
    onCreateItems {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
      id
      date
      id_table
    }
  }
`;
export const onCreateRestaurants = /* GraphQL */ `
  subscription OnCreateRestaurants {
    onCreateRestaurants {
      id
      name
      address
      mail
      phone
      location
    }
  }
`;
export const onCreateTables = /* GraphQL */ `
  subscription OnCreateTables {
    onCreateTables {
      id
      table_number
      table_active
      table_call
      id_restaurant
    }
  }
`;
