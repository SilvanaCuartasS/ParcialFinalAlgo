import { Actions } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.navigate:
			return {
				...currentState,
				screen: payload,
			};

		case Actions.GETPRODUCTS:
			return {
				...currentState,
				products: payload,
			};


		default:
			return currentState;
	}
};