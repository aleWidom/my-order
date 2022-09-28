import { useContext } from 'react'
import { SearchContext } from '../../context/search'
import { getItemsResultsCardHome } from '../../services'
import styles from './CardHome.module.css'


const CardHome = ({ title, source }) => {

    const {setResultsSearched} = useContext(SearchContext)

    const onClickCardHome = () => {
        getItemsResultsCardHome(title)
        .then(({data})=> {
           setResultsSearched(data)
        })
        .catch((err) => err)
    }

    return  <div className={styles.container} onClick={onClickCardHome}>
                <img src={source} className={styles.img} alt={source} />
                <h5 className={styles.title}>{title}</h5>
            </div>
}

export default CardHome;

