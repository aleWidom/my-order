import { useEffect, useContext } from 'react';
import { TableContext } from '../context/tables/TableContext';
import { peopleInTable } from '../services';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { OrderContext } from '../context';



export const useIdUnicoPeopleInTable = () => {
   
        const [params] = useSearchParams();

    	const { stateTable} = useContext(TableContext);

 //se genera ID unico del grupo de personas que actualmente están en la mesa, si la mesa no esta activa, y se guarda en la base de datos.
    //TODO VER DE QUE SE EJECUTE SOLO UNA VEZ
    
	useEffect(() => {   
        if (stateTable?.table_active !== '1') {
            const idPeopleInTableUuid = uuidv4();
            peopleInTable(idPeopleInTableUuid, params.get('table'));
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};


