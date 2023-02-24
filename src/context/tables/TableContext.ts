import { createContext } from 'react';
import { SittingOnTheTable, TableRestaurant } from '../../interfaces';


interface ContextProps {
	sittingOnTheTable: SittingOnTheTable;
	setSittingOnTheTable: (description: SittingOnTheTable) => void;
	idPeopleInTable: string,
	setIdPeopleInTable: (description: string) => void;
	sittingOnTheTableCall: boolean | undefined;
	setSittingOnTheTableCall: (description: boolean | undefined ) => void;
	sittingOnTheTableActivate: boolean | undefined;
	setSittingOnTheTableActivate: (description: boolean | undefined ) => void;
	stateTable: TableRestaurant;
	setStateTable: (description: TableRestaurant ) => void;
}

export const TableContext = createContext({} as ContextProps);
