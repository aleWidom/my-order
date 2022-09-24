import { useContext } from "react"
import { InputContext } from "../../context/input"
import CardMenu from "../CardMenu/CardMenu"


const Results = () => {
  
  const { resultsSearched } = useContext(InputContext)

  return (
    <>
    {resultsSearched.map((e)=> (
        <CardMenu header={e.title} key={e.id} source={e.photo} description={e.description} price={e.price}/>
    ))}
    </>
  )
}

export default Results