import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { peopleInTable, peopleInTableFetch, updateTableNumberActive } from '../services';

export const useFetchTable = () => {

    const [params] = useSearchParams();

    useEffect(() => {
       
        

        //Genero el idPeopleInTable 
        const idPeopleInTableUuid = uuidv4().replaceAll('/', '-');
        peopleInTable(idPeopleInTableUuid, params.get('table'));



        peopleInTableFetch(params.get('table'))
        .then((response) => {
            console.log(response)
        })













        //si no se encuentra en el local storage quiere decir que no ingreso antes
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
