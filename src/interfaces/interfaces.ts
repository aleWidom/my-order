
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
	id_peopleInTable?: string,
	ItemID: string,
	id_item?: string;
	id_table?: string,
	title: string;
	description: string;
	price: string;
	quantity: number;
	modalType?: 'main' | 'required',
	modalEditOrDelete?: 'edit'| 'delete',
	stateModal?: boolean,
	date?: string,
	photo?: string ,
	id_category?: string
	ItemPeopleInTableID?: string,
	state?: string

}

export interface ModalInfo {
	description: string;
	state: boolean;
	section: string;
}

