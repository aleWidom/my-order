import { useEffect, useContext } from 'react';
import { TableContext } from '../context/tables/TableContext';
import { peopleInTable } from '../services';
import { v4 as uuidv4 } from 'uuid';




export const useIdUnicoPeopleInTable = () => {
   
    	const { stateTable, sittingOnTheTable} = useContext(TableContext);

 //se genera ID unico del grupo de personas que actualmente están en la mesa, si la mesa no esta activa, y se guarda en la base de datos.
    //TODO VER DE QUE SE EJECUTE SOLO UNA VEZ
    
	useEffect(() => {   
        if(sittingOnTheTable.id !== '' && stateTable?.table_active !== '1') {
                const idPeopleInTableUuid = uuidv4();
                peopleInTable(idPeopleInTableUuid,  sittingOnTheTable.id);
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sittingOnTheTable]);
};


