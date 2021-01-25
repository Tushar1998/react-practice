// Importing Defined Constants
import { counterTypes } from "../constants/counterTypes.action";

export const counterGenerators = (actionType) => {
	switch (actionType) {
		// INCREMENT : counter/increment
		case counterTypes.INCREMENT:
			return {
				type: counterTypes.INCREMENT,
			};

		// DECREMENT : counter/decrement
		case counterTypes.DECREMENT:
			return {
				type: counterTypes.DECREMENT,
			};

		// Default Case or Invalid Type
		default:
			return {
				type: "Invalid Action",
			};
	}
};
