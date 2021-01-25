import { userTypes } from "../constants/userTypes.action";

const initialState = {
	users: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case userTypes.FETCH_USERS:
			return { ...state, users: [...state.users, action.payload.users] };

		default:
			return {
				...state,
			};
	}
};
