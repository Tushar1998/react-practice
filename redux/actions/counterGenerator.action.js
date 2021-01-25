// Importing Defined Constants
import { counterTypes } from "../constants/counterTypes.action";

export const userGenerator = (actionType) => {
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

    // Default Case or Invalid Type
    default:
      return {
        type: "Invalid Action",
      };
  }
};
