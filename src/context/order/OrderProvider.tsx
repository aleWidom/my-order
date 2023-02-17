import { useState } from 'react';
import { OrderContext } from '.';
import { PlateRestaurant, PlateSelected, CategoryRestaurant } from '../../interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const OrderProvider = ({ children }: Props) => {
	const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState<CategoryRestaurant[]>([]);

	const [cardsRankingPlates, setCardsRankingPlates] = useState<PlateRestaurant[]>([]);

	const [cardsDayPlates, setCardsDayPlates] = useState<PlateRestaurant[]>([]);

	const [cardsSpecialsCheff, setCardsSpecialsCheff] = useState<PlateRestaurant[]>([]);

	const [menuWaiterActive, setMenuWaiterActive] = useState<boolean>(false);

	const [modalPlate, setModalPlate] = useState<PlateSelected>({
		ItemID: '0',
		stateModal: false,
		title: '',
		price: '0',
		description: '',
		quantity: 1,
		modalType: 'main'
	});

	const [cart, setCart] = useState<PlateSelected[]>([]);

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
		/* 		modalPlateRequired,
				setModalPlateRequired, */
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
