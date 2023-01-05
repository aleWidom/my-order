import { createContext } from 'react';
import { Table } from '../../interfaces';

interface ContextProps {
	table: Table;
	setTable: (description: Table) => void;
	call: boolean | undefined;
	setCall: (description: boolean | undefined ) => void;
}

export const TableContext = createContext({} as ContextProps);
