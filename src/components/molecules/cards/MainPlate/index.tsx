import { FC, useContext } from 'react';
import { OrderContext } from '../../../../context';
import styles from './MainPlate.module.scss';

interface Props {
	header: string;
	price: string;
	source: string;
	description: string;
	id: number;
}

export const MainPlate: FC<Props> = ({ header, price, source, description, id }) => {
	const { modalPlate, setModalPlate } = useContext(OrderContext);

	const onClickCardHome = () => {
		setModalPlate({
			...modalPlate,
			id: id,
			state: true,
			title: header,
			price: price,
			description: description,
			photo: source,
		});
	};

	return (
		<div className={styles.container} onClick={onClickCardHome}>
			<div className={styles.containerImg} style={{ backgroundImage: `url(${source})` }}></div>
			<h5 className={styles.title}>{header.length > 35 ? header.slice(0, 35) + '...' : header}</h5>
		</div>
	);
};
