import { useContext } from 'react'
import { SearchContext } from '../../../../context'
import { getItemsResultsCardHome } from '../../../../services'
import styles from './MainFood.module.css'


export const MainFood = ({ title, source }) => {

    const { setResults } = useContext(SearchContext)

    const onClickCardHome = () => {
        getItemsResultsCardHome(title)
            .then(({ data }) => {
                setResults(data)
            })
            .catch((err) => err)
    }

    return <div className={styles.container} onClick={onClickCardHome}>
        <img src={source} className={styles.img} alt={source} />
        <h5 className={styles.title}>{title}</h5>
    </div>
}



