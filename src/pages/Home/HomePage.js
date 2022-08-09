
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TableContext } from "../../context/tables";
import { updateTableNumberCall, updateTableNumberNotCall } from "../../services";
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable";
import styles from './HomePage.module.css'




const HomePage = () => {

    const {call, setCall, table, setTable} = useContext(TableContext)

    const handleCall = () => {
        setCall(true)
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

    const handleCancelCall = () => {
        setCall(false)
        updateTableNumberNotCall(table)
            .then((data) => {
                const newTableNotCall = {
                    ...table,
                    table_call: 0
                }
                setTable(newTableNotCall)
            })
            .catch((err) => err)
    } 

    return (
            <div className={styles.home}>
                <HeaderBrandTable/>
                 <div className={styles.container}>
                 {call === false ? <p onClick={handleCall} className={styles.call}>Llamar camarera/o</p> :
                        <div className={styles.notCallContainer}>
                            <p className={styles.notCall} >Su camarera/o se acercará a su mesa.</p>
                            <button onClick={handleCancelCall} className={styles.call} >Cancelar llamado</button>
                        </div>
                    }
                    <Link to={`/table/${table.table_number}/menu`} className={styles.menu}>Menú</Link>
                </div> 
            </div>
    )
};

export default HomePage;
