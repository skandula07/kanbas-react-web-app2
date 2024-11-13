import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {
    title: "New Assignment Title",
    course: "Assignment's Course",
    description: "New Description",
    points: "100",
    dueDate: "2023-09-18",
    available_from: "2023-09-11",
    available_until: "2023-09-18",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString()},
        ...state.assignments,
      ];

      console.log(state.assignments[0]);
          
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment : any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment : any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;