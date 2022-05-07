import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    personalDetails: [],
  },
  reducers: {
    addFormData(state, action) {
      const newDetails = action.payload;
      state.personalDetails.push({
        name: newDetails.name,
        age: newDetails.age,
        qual: newDetails.qual,
        college: newDetails.college,
        email: newDetails.email,
      });
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice;
