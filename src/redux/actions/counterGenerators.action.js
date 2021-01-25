// Importing Defined Constants
import { counterTypes } from "../constants/counterTypes.action";
import { userTypes } from "../constants/userTypes.action";

export const counterGenerators = (actionType) => {
	switch (actionType) {
		// INCREMENT : counter/increment
		case counterTypes.INCREMENT:
			return {
				type: actionType.INCREMENT,
			};

		// DECREMENT : counter/decrement
		case counterTypes.DECREMENT:
			return {
				type: actionType.DECREMENT,
			};

		// FETCH_USERS : user/fetch
		case userTypes.FETCH_USERS:
			return {
				type: userTypes.FETCH_USERS,
			};

		// Default Case or Invalid Type
		default:
			return {
				type: "Invalid Action",
			};
	}
};
