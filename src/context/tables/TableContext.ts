import { createContext } from 'react';
import { Table } from '../../interfaces';

interface ContextProps {
	table: Table;
	setTable: (description: Table) => void;
	call: boolean;
	setCall: (description: boolean) => void;
}

export const TableContext = createContext({} as ContextProps);
