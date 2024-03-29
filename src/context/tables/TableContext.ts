import { createContext } from 'react';
/* import {TableRestaurant } from '../../interfaces'; */


interface ContextProps {
	idPeopleInTable: string,
	setIdPeopleInTable: (description: string) => void;
	sittingOnTheTableCall: boolean | undefined;
	setSittingOnTheTableCall: (description: boolean | undefined ) => void;
	sittingOnTheTableActivate: boolean | undefined;
	setSittingOnTheTableActivate: (description: boolean | undefined ) => void;
}

export const TableContext = createContext({} as ContextProps);
