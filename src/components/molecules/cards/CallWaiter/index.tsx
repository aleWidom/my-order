import { useContext } from 'react';
import { SearchContext, TableContext } from '../../../../context';
import { useFetchCallTable } from '../../../../hooks';
import { updateTableNumberCall, updateTableNumberNotCall } from '../../../../services';
import styles from './CallWaiter.module.scss';

export const CallWaiter = () => {
	const { setModalInfo } = useContext(SearchContext);

	const {sittingOnTheTableCall ,setSittingOnTheTableCall} = useContext(TableContext);

	const  numberTable = JSON.parse(localStorage.getItem('table') as any)
	
	useFetchCallTable()

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

		updateTableNumberCall(numberTable);
		setSittingOnTheTableCall(true);

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

		updateTableNumberNotCall(numberTable);
		setSittingOnTheTableCall(false);
	};

	return (
		<div className={styles.containerCallWaiter}>
			{sittingOnTheTableCall ? (
				<button className={styles.buttonCall} onClick={handNotCall}>
					Cancelar llamado moza/o a la maesa.
				</button>
			) : (
				<button className={styles.buttonNotCall} onClick={handleCall}>
					Llamar a moza/o a la mesa.
				</button>
			)}
		</div>
	);
};
