import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, {payload: enrollment}) => {
      const newEnrollment: any = {
        _id: enrollment._id || new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },

    unenroll: (state, {payload: enrollmentID}) => {
      state.enrollments = state.enrollments.filter((e) => e._id !== enrollmentID);

    },
  },
});

export const {enroll, unenroll} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;