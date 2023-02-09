import { useState } from 'react';
import { TableContext } from './TableContext';
import { SittingOnTheTable } from '../../interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const TableProvider = ({ children }: Props) => {
	//TODO DEBE IR UN OBJETO COMO MESA
	const [sittingOnTheTable, setSittingOnTheTable] = useState<SittingOnTheTable>({
		id: '',
	});

	const [sittingOnTheTableCall, setSittingOnTheTableCall] = useState<boolean | undefined>(false);
	
	const [sittingOnTheTableActivate, setSittingOnTheTableActivate] = useState<boolean | undefined>(false);

	return (
		<TableContext.Provider
			value={{
				sittingOnTheTable, 
				setSittingOnTheTable,
				sittingOnTheTableCall, 
				setSittingOnTheTableCall,
				sittingOnTheTableActivate,
				setSittingOnTheTableActivate
			}}
		>
			{children}
		</TableContext.Provider>
	);
};
