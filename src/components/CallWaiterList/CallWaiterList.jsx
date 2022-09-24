import { useContext } from 'react'
import {TableContext} from '../../context/tables'
import {updateTableNumberCall} from '../../services/tables' 
import styles from './CallWaiterList.module.css'

const CallWaiterList = () => {

    const {setCall, setTable} = useContext(TableContext)

    const handleSubmitWaiterList = (e) => {
        e.preventDefault()
        setCall(true)
        const table = 
            {
                "id": 20,
                "table_number": "005",
                "table_active": 1,
                "table_call": 0,
                "id_restaurant": 1
                }
        
        updateTableNumberCall(table)
            .then((data) => {
                const newTableCall = {
                    ...table,
                    table_call: 1
                }
                setTable(newTableCall)
            })
            .catch((err) => err)
    }

    return (
        <form className={styles.containerCallWaiterList}  onSubmit={handleSubmitWaiterList}>
            <div>
                <input type="radio" id="callWaiter" name="call" value={"callWaiter"} />
                <label>Llamar Mozo</label>
            </div>
            <div>
                <input type="radio" id="account" name="call" value={"account"} />
                <label>Pedir la cuenta</label>
            </div>
            <button className={styles.button} >Realizar solicitud</button>
        </form >
    )
}

export default CallWaiterList