import { useState } from 'react';
import { TableContext } from './TableContext';
import { Table } from '../../interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const TableProvider = ({ children }: Props) => {
	//TODO DEBE IR UN OBJETO COMO MESA
	const [table, setTable] = useState<Table>({
		table_number: '',
	});

	const [call, setCall] = useState<boolean>(false);

	return (
		<TableContext.Provider
			value={{
				table,
				setTable,
				call,
				setCall,
			}}
		>
			{children}
		</TableContext.Provider>
	);
};
