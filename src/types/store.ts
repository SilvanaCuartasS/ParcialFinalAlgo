export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: string;
  events: event[];
  // something: {};
};

type event = {
  title: string,
  date: number
  location: string,
  image: string,
  atendees: number
}

export enum SomeActions {
  "X" = "X",
}


export enum Screens {

	'EDIT' = 'EDIT',
	'USER' = 'USER',
	'ADMIN' = 'ADMIN'
}

export enum Actions {
	'navigate' = 'navigate',
	'GETPRODUCTS' = 'GETPRODUCTS',
}