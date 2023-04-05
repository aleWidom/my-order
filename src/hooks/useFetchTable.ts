import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { peopleInTable, updateTableNumberActive } from '../services';

export const useFetchTable = () => {

    const [params] = useSearchParams();

    useEffect(() => {
        //si no se encuentra en el local storage quiere decir que no ingreso antes
        if (!localStorage.getItem('table')) {
            //Genero el idPeopleInTable 
            const idPeopleInTableUuid = uuidv4().replaceAll('/', '-');
            peopleInTable(idPeopleInTableUuid, params.get('table'));
            //Paso la mesa a activa
            updateTableNumberActive(params.get('table'));
            //Guardo en local storage el idPeopleInTable y el número de mesa y si fue llamada la mesa o no
            localStorage.setItem('table', JSON.stringify(params.get('table')))
            localStorage.setItem('idPeopleTableId', JSON.stringify(idPeopleInTableUuid))
        }

        
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
