import { useContext } from 'react';
import { FaConciergeBell, FaRegStopCircle} from 'react-icons/fa';
import { Closed } from '../../../atoms';
import { SearchContext, TableContext } from '../../../../context';
import styles from './ModalInfo.module.scss';

export const ModalInfo = () => {
	const { modalInfo, setModalInfo } = useContext(SearchContext);

	const { sittingOnTheTableCall } = useContext(TableContext);

	const closedModalInfo = () => {
		setModalInfo({
			state: false,
			description: '',
			section: '',
		});
	};

	return (
		<>
			<div className={styles.containerModalInfo} onClick={closedModalInfo}>
			</div>
			<div className={styles.modalInfo}>
				{modalInfo.section === 'form' && (
					<button onClick={closedModalInfo} className={styles.buttonClosedModal}>
						<Closed />
					</button>
				)}
				{modalInfo.section !== 'form' && sittingOnTheTableCall === true && <FaConciergeBell className={styles.icon}/>}
				{modalInfo.section !== 'form' && sittingOnTheTableCall === false && <FaRegStopCircle className={styles.icon}/>}
				<p className={styles.description}>{modalInfo.description}</p>
			</div>
		</>
	);
};
