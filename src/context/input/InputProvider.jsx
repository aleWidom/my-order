
import { useState } from 'react';
import { InputContext } from '.';

export const InputProvider = ({ children }) => {

    const [valueInput, setValueInput] = useState("")

    const [resultsSearched, setResultsSearched] = useState([])

    return (
        <InputContext.Provider value={{
            valueInput,
            setValueInput,
            resultsSearched, 
            setResultsSearched
        }}>
            {children}
        </InputContext.Provider>
    )
}


