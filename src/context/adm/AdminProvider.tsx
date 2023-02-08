import { useState } from 'react';
import { AdminContext } from './AdminContext';
import { TableRestaurant,OrderItem } from '../../interfaces';


interface Props {
	children: JSX.Element | JSX.Element[];
}

export const AdminProvider = ({ children }: Props) => {
	const [tablesRestaurant, setTablesRestaurant] = useState<TableRestaurant[]>([]);

	const [tablesCallRestaurant, setTablesCallRestaurant] = useState<TableRestaurant[]>([]);

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
