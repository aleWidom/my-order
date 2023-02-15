import { createContext } from 'react';
import { TableRestaurant, PlateSelected } from '../../interfaces';


interface ContextProps {
	tablesRestaurant: TableRestaurant[];
	setTablesRestaurant: (description: TableRestaurant[]) => void;
	tablesCallRestaurant: TableRestaurant[];
	setTablesCallRestaurant: (description: TableRestaurant[]) => void;
	orderItem: PlateSelected [];
	setOrderItem: (description: PlateSelected[]) => void;
}

export const AdminContext = createContext({} as ContextProps);
