import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainPlate } from '../../../molecules';
import { Plate } from '../../../../interfaces';
import styles from './MainPlates.module.scss';
import 'swiper/css/navigation';
import 'swiper/css';

interface Props {
	cardsDayPlates: Plate[];
	cardsRankingPlates: Plate[];
}

export const MainPlates: FC<Props> = ({ cardsDayPlates, cardsRankingPlates }) => {
	return (
		<>
			<div className={styles.cardsPlates}>
				<h3 className={styles.title}>Platos del día</h3>
				<Swiper slidesPerView={1.2} spaceBetween={20}>
					{cardsDayPlates.map((e) => (
						<SwiperSlide key={e.id}>
							<MainPlate key={e.id} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.id} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={styles.cardsPlates}>
				<h3 className={styles.title}>Platos más solicitados</h3>
				<Swiper slidesPerView={1.2} spaceBetween={20}>
					{cardsRankingPlates.map((e) => (
						<SwiperSlide key={e.id}>
							<MainPlate key={e.id} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.id} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
