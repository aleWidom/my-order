import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchTable, peopleInTable, peopleInTableFetch, updateTableNumberActive } from '../services';

export const useFetchTable = () => {

    const [params] = useSearchParams();

    useEffect(() => {
        //seteo en el storage con nombre table el número de mesa
        localStorage.setItem('table', JSON.stringify(params.get('table')))

        fetchTable(params.get('table'))
            .then((response) => {
                //si la mesa ya se encuentra activa o sea ocupada
                if (response?.table_active === '1') {
                    //si la mesa esta activa pero no existe el localstorage idPeopleTableId busco el último PeopleInTable y lo seteo en el local storage (esto es por si entra otro celular a la misma mesa)
                    if(!localStorage.getItem('idPeopleTableId')) {
                        peopleInTableFetch(params.get('table'))
                        .then((response) => {
                            localStorage.setItem('idPeopleTableId', JSON.stringify(response[0].PeopleInTableID)) 
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    }
                }
                //si la mesa no esta activada
                else {
                    //activo la mesa
                    updateTableNumberActive(params.get('table'))

                    //Genero el idPeopleInTable 
                    const idPeopleInTableUuid = uuidv4().replaceAll('/', '-');
                    peopleInTable(idPeopleInTableUuid, params.get('table'));
                    localStorage.setItem('idPeopleTableId', JSON.stringify(idPeopleInTableUuid))
                }
            })
            .catch((err) => {
                console.log(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
