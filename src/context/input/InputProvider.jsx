
import { useState } from 'react';
import { InputContext } from '.';

export const InputProvider = ({ children }) => {

    const [valueInput, setValueInput] = useState("")

    const [errInput, setErrInput] = useState("")

    return (
        <InputContext.Provider value={{
            valueInput,
            setValueInput,
            errInput,
            setErrInput
        }}>
            {children}
        </InputContext.Provider>
    )
}


