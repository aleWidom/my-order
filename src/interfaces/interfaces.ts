export interface Plate {
	id: number;
	title: string;
	photo: string;
	description: string;
	price: string;
	id_category?: number;
	id_restaurant?: number;
	quantity: number;
}

export interface Table {
	table_number: string | null;
}

export interface TableRestaurantOptions {
	id: number;
	table_number: string;
	table_active: number;
	table_call: number;
}

export interface CategoryRestaurant {
	id: number;
	name: string;
	photo: string;
}

export interface ModalPlate {
	id: number;
	title: string;
	description: string;
	state: boolean;
	price: string;
	quantity: number;
	photo: string;
	section: '' | 'request' | 'edit' | 'delete';
}

export interface ModalPlateRequired {
	id: number;
	title: string;
	quantity: number;
	state: boolean;
	section: '' | 'request' | 'edit' | 'delete';
}

export interface ModalInfo {
	description: string;
	state: boolean;
	section: string;
}
