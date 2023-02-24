import { createContext } from 'react';
import { PlateRestaurant, PlateSelected, CategoryRestaurant } from '../../interfaces';
import { ModalPlate } from '../../interfaces/interfaces';

interface ContextProps {
	itemsRestaurant: PlateRestaurant[];
	setItemsRestaurant: (description: PlateRestaurant[]) => void;
	categoriesMenuRestaurant: CategoryRestaurant[];
	setCategoriesMenuRestaurant: (description: CategoryRestaurant[]) => void;
	cardsRankingPlates: PlateRestaurant[];
	setCardsRankingPlates: (description: PlateRestaurant[]) => void;
	cardsSpecialsCheff: PlateRestaurant[];
	setCardsSpecialsCheff: (description: PlateRestaurant[]) => void;
	cardsDayPlates: PlateRestaurant[];
	setCardsDayPlates: (description: PlateRestaurant[]) => void;
	menuWaiterActive: boolean;
	setMenuWaiterActive: (description: boolean) => void;
	modalPlate: ModalPlate;
	setModalPlate: (description: ModalPlate) => void;
	cart: PlateSelected[];
	setCart: (description: PlateSelected[]) => void;
	loading: boolean;
	setLoading: (description: boolean) => void;
	loadingOrder: boolean;
	setLoadingOrder: (description: boolean) => void;
	loadingPlates: boolean;
	setLoadingPlates: (description: boolean) => void;
}

export const OrderContext = createContext({} as ContextProps);
