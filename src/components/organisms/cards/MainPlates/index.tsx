import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MainPlate } from '../../../molecules';
import styles from './MainPlates.module.scss';
import 'swiper/css/navigation';
import 'swiper/css';



export const MainPlates = () => {

	const {cardsRankingPlates, cardsDayPlates, cardsSpecialsCheff} = useContext(OrderContext)

	return (
		<>
			<div className={styles.cardsPlates}>
				<h3 className={styles.title}>Platos más solicitados</h3>
				<Swiper slidesPerView={1.2} spaceBetween={20}>
					{cardsRankingPlates.length &&
						cardsRankingPlates.map((e) => (
							<SwiperSlide key={e.ItemID}>
								<MainPlate key={e.ItemID} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.ItemID} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
			<div className={styles.cardsPlates}>
				<h3 className={styles.title}>Platos del día</h3>
				<Swiper slidesPerView={1.2} spaceBetween={20}>
					{cardsDayPlates.length &&
						cardsDayPlates.map((e) => (
							<SwiperSlide key={e.ItemID}>
								<MainPlate key={e.ItemID} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.ItemID} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>

			<div className={styles.cardsPlates}>
				<h3 className={styles.title}>Sugerencias del chef</h3>
				<Swiper slidesPerView={1.2} spaceBetween={20}>
					{cardsSpecialsCheff.length &&
						cardsSpecialsCheff.map((e) => (
							<SwiperSlide key={e.ItemID}>
								<MainPlate key={e.ItemID} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.ItemID} />
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</>
	);
};
