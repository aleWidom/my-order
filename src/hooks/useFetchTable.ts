import { useEffect, useContext } from 'react';
import { TableContext } from '../context/tables/TableContext';
import { fetchTable } from '../services';
import { useSearchParams } from 'react-router-dom';



export const useFetchTable = () => {
   
     const [params] = useSearchParams();

    const {setStateTable } = useContext(TableContext);

//Busco la info de la mesa desde la base de datos según el params y la seteo en un estado de react.
//TODO VER DE QUE SE EJECUTE SOLO UNA VEZ
    
	useEffect(() => {  
        fetchTable(params.get('table'))
        .then((data) => {
			if(data) {
                setStateTable(data)
            }
		})
        .catch((err) => {
            console.log(err)
        })
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
