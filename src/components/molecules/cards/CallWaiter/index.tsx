import { useContext } from 'react';
import { SearchContext, TableContext } from '../../../../context';
import { updateTableNumberCall, updateTableNumberNotCall } from '../../../../services';
import styles from './CallWaiter.module.scss';

export const CallWaiter = () => {
	const { setModalInfo } = useContext(SearchContext);

	const { table, call, setCall } = useContext(TableContext);

	const handleCall = () => {
		setModalInfo({
			description: 'Su moza/o se acercará a su mesa.',
			state: true,
			section: 'call',
		});

		setTimeout(() => {
			setModalInfo({
				description: '',
				state: false,
				section: '',
			});
		}, 3000);

		updateTableNumberCall(table);

		setCall(true);
	};

	const handNotCall = () => {
		setModalInfo({
			description: 'Se ha cancelado el llamado de su moza/o a su mesa.',
			state: true,
			section: 'call',
		});

		setTimeout(() => {
			setModalInfo({
				description: '',
				state: false,
				section: '',
			});
		}, 3000);

		updateTableNumberNotCall(table);
		setCall(false);
	};

	return (
		<div className={styles.containerCallWaiter}>
			{call ? (
				<button className={styles.buttonCall} onClick={handNotCall}>
					Cancelar llamado moza/o a la maesa.
				</button>
			) : (
				<button className={styles.buttonCall} onClick={handleCall}>
					Llamar a moza/o a la mesa.
				</button>
			)}
		</div>
	);
};
