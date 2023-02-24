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
	ItemID: string;
	title: string;
	quantity: number;
	state?: string

}

export interface ModalPlate {
	title: string;
	description: string;
	price: string;
	quantity: number;
	stateModal?: boolean,
	modalType?: 'main' | 'required',
	modalEditOrDelete?: 'edit'| 'delete',
}

export interface ModalInfo {
	description: string;
	state: boolean;
	section: string;
}

