import { useContext } from 'react';
import { OrderContext} from '../../../../context';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import styles from './Requireds.module.scss';

const Requireds = () => {
	const { cartTemporary, cartDefinitive, modalPlate } = useContext(OrderContext);

	const  numberTable = JSON.parse(localStorage.getItem('table') as any)

	return (
		<div className={styles.required}>
			{(cartTemporary.length || cartDefinitive.length) && modalPlate.stateModal === false ?
				(
					<>
						<Link to={`/order/${numberTable}`} className={styles.link}>
							<FaBell />
						</Link>

					</>
				) :
				""}
		</div>
	);
};

export default Requireds;
