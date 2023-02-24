import { useState } from 'react';
import { OrderContext } from '.';
import { PlateRestaurant, PlateSelected, CategoryRestaurant, ModalPlate } from '../../interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const OrderProvider = ({ children }: Props) => {

	const [itemsRestaurant, setItemsRestaurant] = useState<PlateRestaurant[]>([]);

	const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState<CategoryRestaurant[]>([]);

	const [cardsRankingPlates, setCardsRankingPlates] = useState<PlateRestaurant[]>([]);

	const [cardsDayPlates, setCardsDayPlates] = useState<PlateRestaurant[]>([]);

	const [cardsSpecialsCheff, setCardsSpecialsCheff] = useState<PlateRestaurant[]>([]);

	const [menuWaiterActive, setMenuWaiterActive] = useState<boolean>(false);

	const [modalPlate, setModalPlate] = useState<ModalPlate>({
		title: '',
		description: '',
		price: '0',
		quantity: 1,
		stateModal: false,
		modalType: 'main'
	});

	const [cart, setCart] = useState<PlateSelected[]>([]);

	const [loading, setLoading] = useState<boolean>(true);

	const [loadingOrder, setLoadingOrder] = useState<boolean>(true);

	const [loadingPlates, setLoadingPlates] = useState<boolean>(true);

	return (
		<OrderContext.Provider
			value={{
				itemsRestaurant, 
				setItemsRestaurant,
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
