import { createContext } from 'react';
import { TableRestaurant, OrderItem } from '../../interfaces';


interface ContextProps {
	tablesRestaurant: TableRestaurant[];
	setTablesRestaurant: (description: TableRestaurant[]) => void;
	tablesCallRestaurant: TableRestaurant[];
	setTablesCallRestaurant: (description: TableRestaurant[]) => void;
	orderItem: OrderItem[];
	setOrderItem: (description: OrderItem[]) => void;
}

export const AdminContext = createContext({} as ContextProps);
