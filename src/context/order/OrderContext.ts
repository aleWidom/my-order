import { createContext } from 'react';
import { PlateRestaurant, ModalPlate, ModalPlateRequired, CategoryRestaurant } from '../../interfaces';

interface ContextProps {
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
	modalPlateRequired: ModalPlateRequired;
	setModalPlateRequired: (description: ModalPlateRequired) => void;
	cart: PlateRestaurant[];
	setCart: (description: PlateRestaurant[]) => void;
	loading: boolean;
	setLoading: (description: boolean) => void;
	loadingOrder: boolean;
	setLoadingOrder: (description: boolean) => void;
	loadingPlates: boolean;
	setLoadingPlates: (description: boolean) => void;
}

export const OrderContext = createContext({} as ContextProps);
