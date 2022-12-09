export interface Plate {
  id: number;
  title: string;
  photo: string;
  description: string;
  price: string;
  id_category?: number;
  id_restaurant?: number;
  quantity: number;
}

export interface Table {
  id: number;
  table_number: string;
}

export interface TableRestaurantOptions {
  id: number;
  table_number: string;
  table_active: number;
  table_call: number;
  id_restaurant?: number;
}

export interface CategoryRestaurant {
  id: number;
  name: string;
}

export interface ModalPlate {
  id: number;
  title: string;
  description: string;
  state: boolean;
  price: string;
  quantity: number;
}
