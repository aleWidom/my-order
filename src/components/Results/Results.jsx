import { useContext } from "react"
import { SearchContext } from "../../context/search"
import CardMenu from "../CardMenu/CardMenu"


const Results = () => {
  
  const { resultsSearched } = useContext(SearchContext)

  return (
    <>
    {resultsSearched.map((e)=> (
        <CardMenu header={e.title} key={e.id} source={e.photo} description={e.description} price={e.price}/>
    ))}
    </>
  )
}

export default Results

