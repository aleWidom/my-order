import { useEffect, useContext } from 'react';
import { TableContext } from '../context/tables/TableContext';

export const useFetchCallTable = () => {   
    const { setSittingOnTheTableCall} = useContext(TableContext);

	useEffect(() => {  
        //me fijo se existe un local storage llamado tableCall, si existe traigo la info, sino la seteo en false porque antes no ingresaron
        if (localStorage.getItem('tableCall')) {
            setSittingOnTheTableCall((JSON.parse(localStorage.getItem('tableCall') as any)))
        }
        else {
            setSittingOnTheTableCall(false)
            localStorage.setItem('tableCall', JSON.stringify(false))
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};


