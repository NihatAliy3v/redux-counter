import { createStore } from "redux";
import { allRedusers } from "./rootReducer";

export const store = createStore(allRedusers)