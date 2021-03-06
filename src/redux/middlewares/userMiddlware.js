const fetchUrl = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = (store) => (next) => async (action) => {
	try {
		let response = await fetch(fetchUrl);
		let data = await response.json();
		// console.log(data);
		action.payload = { users: [...data] };
		return next(action);
	} catch (error) {
		console.warn(error);
	}
};

export default fetchUsers;
