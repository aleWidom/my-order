
import { useState } from 'react';
import { SearchContext } from '.';

export const SearchProvider = ({ children }) => {

    const [valueInput, setValueInput] = useState("")

    const [results, setResults] = useState([])

    const [nameCategorySelected, setNameCategorySelected] = useState("")

    return (
        <SearchContext.Provider value={{
            valueInput,
            setValueInput,
            results, 
            setResults,
            nameCategorySelected,
            setNameCategorySelected,
        }}>
            {children}
        </SearchContext.Provider>
    )
}


