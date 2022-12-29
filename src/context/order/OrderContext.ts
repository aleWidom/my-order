import { createContext } from 'react';
import { Plate, ModalPlate, ModalPlateRequired, CategoryRestaurant } from '../../interfaces';

interface ContextProps {
	categoriesMenuRestaurant: CategoryRestaurant[];
	setCategoriesMenuRestaurant: (description: CategoryRestaurant[]) => void;
	cardsRankingPlates: Plate[];
	setCardsRankingPlates: (description: Plate[]) => void;
	cardsSpecialsCheff: Plate[];
	setCardsSpecialsCheff: (description: Plate[]) => void;
	cardsDayPlates: Plate[];
	setCardsDayPlates: (description: Plate[]) => void;
	menuWaiterActive: boolean;
	setMenuWaiterActive: (description: boolean) => void;
	modalPlate: ModalPlate;
	setModalPlate: (description: ModalPlate) => void;
	modalPlateRequired: ModalPlateRequired;
	setModalPlateRequired: (description: ModalPlateRequired) => void;
	cart: Plate[];
	setCart: (description: Plate[]) => void;
	loading: boolean;
	setLoading: (description: boolean) => void;
}

export const OrderContext = createContext({} as ContextProps);
