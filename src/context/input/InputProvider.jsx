
import { useState } from 'react';
import { InputContext } from '.';

export const InputProvider = ({ children }) => {

    const [valueInput, setValueInput] = useState("")

    const [wordSearched, setWordSearched] = useState([])

    return (
        <InputContext.Provider value={{
            valueInput,
            setValueInput,
            wordSearched,
            setWordSearched
        }}>
            {children}
        </InputContext.Provider>
    )
}


