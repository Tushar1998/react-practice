import { userTypes } from "../constants/userTypes.action";

export const userGenerator = (actionType, payload = { users: [] }) => {
	switch (actionType) {
        // User fetch action generator without thunk
		case userTypes.FETCH_USERS:
			return {
				type: userTypes.FETCH_USERS,
				payload: { ...payload },
			};

		default:
			return {
				type: "Invalid Action Type",
				payload: { ...payload },
			};
	}
};
