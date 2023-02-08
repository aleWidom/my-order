import { createContext } from 'react';
import { SittingOnTheTable } from '../../interfaces';


interface ContextProps {
	sittingOnTheTable: SittingOnTheTable;
	setSittingOnTheTable: (description: SittingOnTheTable) => void;
	sittingOnTheTableCall: boolean | undefined;
	setSittingOnTheTableCall: (description: boolean | undefined ) => void;
	sittingOnTheTableActivate: boolean | undefined;
	setSittingOnTheTableActivate: (description: boolean | undefined ) => void;
}

export const TableContext = createContext({} as ContextProps);
