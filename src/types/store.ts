export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	products: any[];
	currentProduct: {  
        title: string;
        date: number;
        location: string;
        image: string;
        attendeess: number;
    } | null;
};



export enum Screens {
	'ADD' = 'ADD',
	'EDIT' = 'EDIT',
	'HOME' = 'HOME',
	'MODIFICAR' = 'MODIFICAR'
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'GETPRODUCTS' = 'GETPRODUCTS',
}
