import { useContext } from 'react';
import { OrderContext, TableContext } from '../../../../context';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import styles from './Requireds.module.scss';

const Requireds = () => {
	const { cart, modalPlate} = useContext(OrderContext);

	const { sittingOnTheTable} = useContext(TableContext);

	return (
		<div className={styles.required}>
			{cart.length > 0 && modalPlate.stateModal === false && (
				<>
					<Link to={`/order/${sittingOnTheTable.id}`} className={styles.link}>
						<FaBell />
					</Link>
					<div className={styles.quantity}>
						<small>{cart.length}</small>
					</div>
				</>
			)}
		</div>
	);
};

export default Requireds;
