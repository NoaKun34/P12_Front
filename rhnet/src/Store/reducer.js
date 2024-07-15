import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const employee = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (currentSlice, action) => {
      currentSlice.push(action.payload);
    },
  },
});

export const { addEmployee } = employee.actions;
export default employee.reducer;
