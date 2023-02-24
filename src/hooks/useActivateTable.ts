import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TableContext } from '../context';
import { updateTableNumberActive } from '../services';


export const useActivateTable = () => {

    const { setSittingOnTheTable} = useContext(TableContext);

    const [params] = useSearchParams();
    
    //se setea número de mesa elegido por el cliente del restarutante y se comunica a base de datos
    //TODO VER DE QUE SE EJECUTE SOLO UNA VEZ
	useEffect(() => {
        setSittingOnTheTable({
			id: params.get('table'),
		});
		updateTableNumberActive(params.get('table')); 
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
