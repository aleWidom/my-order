import { useEffect, useContext } from 'react';
import { TableContext } from '../context/tables/TableContext';

export const useFetchCallTable = () => {

   
   
    const { stateTable, setSittingOnTheTableCall} = useContext(TableContext);

 //se ve si la mesa esta llamada o no, y se setea estado para que luego se vea desde el botón si fue llamada o no la mesa.
    //TODO VER DE QUE SE EJECUTE SOLO UNA VEZ
    
	useEffect(() => {  
        if (stateTable?.table_call === '1') {
            setSittingOnTheTableCall(true);
        } else {
            setSittingOnTheTableCall(false);
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};


