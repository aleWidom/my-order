
import { useState } from 'react';
import { SearchContext } from '.';

export const SearchProvider = ({ children }) => {

    const [valueInput, setValueInput] = useState("")

    const [resultsSearched, setResultsSearched] = useState([])

    return (
        <SearchContext.Provider value={{
            valueInput,
            setValueInput,
            resultsSearched, 
            setResultsSearched
        }}>
            {children}
        </SearchContext.Provider>
    )
}


