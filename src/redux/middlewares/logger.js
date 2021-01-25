const logger = (store) => (next) => (action) => {
	// Processing Logic
	console.log("This is a simple Logger Middleware");
	action.text = "This is a logger.js Middleware Action.text";
	return next(action);
};

export default logger;
