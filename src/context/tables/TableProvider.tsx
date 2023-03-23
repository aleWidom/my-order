import { useState } from 'react';
import { TableContext } from './TableContext';
import { TableRestaurant } from '../../interfaces/interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const TableProvider = ({ children }: Props) => {

/* 	const [sittingOnTheTable, setSittingOnTheTable] = useState<string>("") */

	const [stateTable, setStateTable] = useState<TableRestaurant>({
	TableID: "",
	table_number: "",
	table_active: "",
	table_call: ""
	});

	const [idPeopleInTable, setIdPeopleInTable] = useState<string>("");

	const [sittingOnTheTableCall, setSittingOnTheTableCall] = useState<boolean | undefined>(false);
	
	const [sittingOnTheTableActivate, setSittingOnTheTableActivate] = useState<boolean | undefined>(false);

	return (
		<TableContext.Provider
			value={{
				/* sittingOnTheTable, 
				setSittingOnTheTable, */
				idPeopleInTable,
				setIdPeopleInTable,
				sittingOnTheTableCall, 
				setSittingOnTheTableCall,
				sittingOnTheTableActivate,
				setSittingOnTheTableActivate,
				stateTable, 
				setStateTable
			}}
		>
			{children}
		</TableContext.Provider>
	);
};
