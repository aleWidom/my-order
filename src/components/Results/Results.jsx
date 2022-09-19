import { useContext } from "react"
import { InputContext } from "../../context/input"
import CardMenu from "../CardMenu/CardMenu"


const Results = () => {
  
  const { wordSearched } = useContext(InputContext)

  console.log(wordSearched)

  return (
    <>
    {wordSearched.map((e)=> (
        <CardMenu header={e.header} key={e.id}/>
    ))}
    </>
  )
}

export default Results