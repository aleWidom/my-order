
export interface TableRestaurant {
	TableID: string;
	table_number: string;
	table_active: string;
	table_call: string;
}

export interface PlateRestaurant {
	ItemID: string;
	title: string;
	photo: string;
	description: string;
	price: string;
	id_category?: string;
}

export interface CategoryRestaurant {
	CategoryID: string;
	name: string;
	photo: string;
}

export interface SittingOnTheTable {
	id: string | null;
}

export interface PlateSelected {
	id: string;
	title: string;
	description: string;
	price: string;
	quantity: number;
	modalType?: 'main' | 'required',
	modalEditOrDelete?: 'edit'| 'delete',
	state?: boolean,

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
