import { createContext } from 'react';
import { PlateRestaurant, PlateSelected, CategoryRestaurant } from '../../interfaces';

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
	modalPlate: PlateSelected;
	setModalPlate: (description: PlateSelected) => void;
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
