import { useContext } from 'react';
import { OrderContext, TableContext } from '../../../../context';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import styles from './Requireds.module.scss';

const Requireds = () => {
	const { cartTemporary, cartDefinitive, modalPlate } = useContext(OrderContext);

	const { sittingOnTheTable } = useContext(TableContext);

	return (
		<div className={styles.required}>
			{(cartTemporary.length > 0 || cartDefinitive.length) && modalPlate.stateModal === false ?
				(
					<>
						<Link to={`/order/${sittingOnTheTable}`} className={styles.link}>
							<FaBell />
						</Link>

					</>
				) :
				""}
		</div>
	);
};

export default Requireds;
