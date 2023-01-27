export interface Plate {
	ItemID: string;
	title: string;
	photo: string;
	description: string;
	price: string;
	id_category?: number;
	id_restaurant?: number;
	quantity: number;
}

export interface Table {
	id: string | null;
}

export interface TableRestaurantOptions {
	TableID: string;
	table_number: string;
	table_active: string;
	table_call: string;
}

export interface CategoryRestaurant {
	id: number;
	name: string;
	photo: string;
}

export interface ModalPlate {
	id: string;
	title: string;
	description: string;
	state: boolean;
	price: string;
	quantity: number;
	photo: string;
	section: '' | 'request' | 'edit' | 'delete';
}

export interface ModalPlateRequired {
	id: string;
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

export interface OrderItem {
	id:string;
	title: 'string';
	id_table: number;
	quantity: number;
}
