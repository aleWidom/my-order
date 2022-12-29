import { useState } from 'react';
import { AdminContext } from './AdminContext';
import { TableRestaurantOptions } from '../../interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const AdminProvider = ({ children }: Props) => {
	const [tablesRestaurant, setTablesRestaurant] = useState<TableRestaurantOptions[]>([]);

	const [tablesCallRestaurant, setTablesCallRestaurant] = useState<TableRestaurantOptions[]>([]);

	return (
		<AdminContext.Provider
			value={{
				tablesRestaurant,
				setTablesRestaurant,
				tablesCallRestaurant,
				setTablesCallRestaurant,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};
