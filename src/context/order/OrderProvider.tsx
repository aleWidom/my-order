import { useState } from 'react';
import { OrderContext } from '.';
import { PlateRestaurant, ModalPlate, ModalPlateRequired, CategoryRestaurant } from '../../interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const OrderProvider = ({ children }: Props) => {
	const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState<CategoryRestaurant[]>([]);

	const [cardsRankingPlates, setCardsRankingPlates] = useState<PlateRestaurant[]>([]);

	const [cardsDayPlates, setCardsDayPlates] = useState<PlateRestaurant[]>([]);

	const [cardsSpecialsCheff, setCardsSpecialsCheff] = useState<PlateRestaurant[]>([]);

	const [menuWaiterActive, setMenuWaiterActive] = useState<boolean>(false);

	const [modalPlate, setModalPlate] = useState<ModalPlate>({
		id: '0',
		state: false,
		title: '',
		price: '0',
		description: '',
		quantity: 1,
		photo: '',
		section: '',
	});

	const [modalPlateRequired, setModalPlateRequired] = useState<ModalPlateRequired>({
		id: '0',
		title: '',
		quantity: 1,
		state: false,
		section: '',
	});

	const [cart, setCart] = useState<PlateRestaurant[]>([]);

	const [loading, setLoading] = useState<boolean>(true);

	const [loadingOrder, setLoadingOrder] = useState<boolean>(true);

	const [loadingPlates, setLoadingPlates] = useState<boolean>(true);

	return (
		<OrderContext.Provider
			value={{
				categoriesMenuRestaurant,
				setCategoriesMenuRestaurant,
				cardsRankingPlates,
				setCardsRankingPlates,
				cardsDayPlates,
				setCardsDayPlates,
				menuWaiterActive,
				setMenuWaiterActive,
				modalPlate,
				setModalPlate,
				cart,
				setCart,
				loading,
				setLoading,
				modalPlateRequired,
				setModalPlateRequired,
				cardsSpecialsCheff,
				setCardsSpecialsCheff,
				loadingOrder, 
				setLoadingOrder,
				loadingPlates, 
				setLoadingPlates
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};
