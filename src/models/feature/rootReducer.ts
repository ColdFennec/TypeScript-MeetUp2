import { combineReducers } from "redux";

import { reducer as searchReducer  } from "./search"
import { reducer as createEventReducer } from "./createEvent"

export const rootReducer = combineReducers({
  searchString: searchReducer,
  createEvent: createEventReducer
})
