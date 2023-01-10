import { useState } from 'react';
import { AdminContext } from './AdminContext';
import { TableRestaurantOptions,OrderItem } from '../../interfaces';


interface Props {
	children: JSX.Element | JSX.Element[];
}

export const AdminProvider = ({ children }: Props) => {
	const [tablesRestaurant, setTablesRestaurant] = useState<TableRestaurantOptions[]>([]);

	const [tablesCallRestaurant, setTablesCallRestaurant] = useState<TableRestaurantOptions[]>([]);

	const [orderItem, setOrderItem] = useState<OrderItem[]>([]);

	return (
		<AdminContext.Provider
			value={{
				tablesRestaurant,
				setTablesRestaurant,
				tablesCallRestaurant,
				setTablesCallRestaurant,
				orderItem, 
				setOrderItem
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};
