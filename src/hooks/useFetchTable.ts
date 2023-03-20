import { useEffect, useContext } from 'react';
import { TableContext } from '../context/tables/TableContext';
import { fetchTable } from '../services';

export const useFetchTable = () => {
   
    const {setStateTable, sittingOnTheTable } = useContext(TableContext);

//Busco la info de la mesa desde la base de datos según el params y la seteo en un estado de react.
//TODO VER DE QUE SE EJECUTE SOLO UNA VEZ
    
	useEffect(() => {  
        if (sittingOnTheTable!== '') {
            fetchTable(sittingOnTheTable)
        .then((data) => {
			if(data) {
                setStateTable(data)
            }
		})
        .catch((err) => {
            console.log(err)
        })
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sittingOnTheTable]);
};
