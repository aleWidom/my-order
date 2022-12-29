import { createContext } from 'react';
import { TableRestaurantOptions } from '../../interfaces';

interface ContextProps {
	tablesRestaurant: TableRestaurantOptions[];
	setTablesRestaurant: (description: TableRestaurantOptions[]) => void;
	tablesCallRestaurant: TableRestaurantOptions[];
	setTablesCallRestaurant: (description: TableRestaurantOptions[]) => void;
}

export const AdminContext = createContext({} as ContextProps);
