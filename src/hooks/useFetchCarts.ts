import { useContext, useEffect } from "react";
import { OrderContext } from "../context";
import { fetchItemPeopleInTable } from "../services";


export const useFetchCarts = () => {

    const { setCartTemporary, setCartDefinitive } = useContext(OrderContext)

    useEffect(() => {
        //si existe localStorage.getItem('cartTemporary') seteo el cartTemporary con el valor que trae, sino creo el local storage con dicho nombre y seteo un array vacio
        if (localStorage.getItem('cartTemporary')) {
            setCartTemporary((JSON.parse(localStorage.getItem('cartTemporary') as any)))
        }
        else {
            setCartTemporary([])
            localStorage.setItem('cartTemporary', JSON.stringify([]))
        }

        //realizo la busqueda de los items que pidio tal peopleInTableID, si está en el local storage lo seteo de ahí sino hago la búsqueda, sino creo el local storage con dicho nombre y seteo la respuesta
        if (localStorage.getItem('cartDefinitive')) {
            setCartDefinitive((JSON.parse(localStorage.getItem('cartDefinitive') as any)))
        }
        else {
            fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
                .then((response) => {
                    //si la respuesta es vacia seteoCartDefinitive y el local storage con array vacio, si obtengo una respuesta seteo la respuesta.
                    if(response === "") {
                        setCartDefinitive([])
                        localStorage.setItem('cartDefinitive', JSON.stringify([]))
                    } else {
                        setCartDefinitive(response)
                        localStorage.setItem('cartDefinitive', JSON.stringify(response))
                    }
                })
                .catch((err)=> {
                    console.log(err)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
};
