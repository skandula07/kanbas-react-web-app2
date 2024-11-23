import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import {useDispatch, useSelector} from "react-redux";
import { enroll } from "./Dashboard/enrollmentsReducer";

export default function Kanbas() {


  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const dispatch = useDispatch();
  
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });


  const addNewCourse = () => {
    const newCourse = { ...course,
      _id: new Date().getTime().toString() };
      const newEnrollment = {
        user: currentUser._id,
        course: newCourse._id,
      };
      dispatch(enroll(newEnrollment));
    setCourses([...courses, newCourse ]);


  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => ( c._id === course._id ? course : c ))
    );
    setCourse({ ...course, name: "New Course", description: "New Description"});
  };



  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={
            <ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}

              />
            </ProtectedRoute>
          } />
          <Route path="/Courses/:cid/*" element={
            <ProtectedRoute>
              <Courses
                courses={courses}
              />
            </ProtectedRoute>
          } />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>

    </div>
  );}