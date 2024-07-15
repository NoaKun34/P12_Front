import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./reducer.js";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export { store };
