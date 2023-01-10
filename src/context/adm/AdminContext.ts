import { createContext } from 'react';
import { TableRestaurantOptions, OrderItem } from '../../interfaces';


interface ContextProps {
	tablesRestaurant: TableRestaurantOptions[];
	setTablesRestaurant: (description: TableRestaurantOptions[]) => void;
	tablesCallRestaurant: TableRestaurantOptions[];
	setTablesCallRestaurant: (description: TableRestaurantOptions[]) => void;
	orderItem: OrderItem[];
	setOrderItem: (description: OrderItem[]) => void;
}

export const AdminContext = createContext({} as ContextProps);
