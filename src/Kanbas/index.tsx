import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import {useSelector} from "react-redux";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";





export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);
 const findCoursesForUser = async () => {
   try {

    console.log("findcoursesForUser - KanbasIndex.tsx", currentUser.user)
     const courses = await userClient.findCoursesForUser(currentUser.user);
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };
 const updateEnrollment = async (courseId: string, enrolled: boolean) => {
  if (enrolled) {
    await userClient.enrollIntoCourse(currentUser.user, courseId);
  } else {
    await userClient.unenrollFromCourse(currentUser.user, courseId);
  }
  setCourses(
    courses.map((course) => {
      if (course.number === courseId) {
        return { ...course, enrolled: enrolled };
      } else {
        return course;
      }
    })
  );
};

 const fetchCourses = async () => {
   try {
     const allCourses = await courseClient.fetchAllCourses();
     const enrolledCourses = await userClient.findCoursesForUser(
       currentUser._id
     );
     const courses = allCourses.map((course: any) => {
       if (enrolledCourses.find((c: any) => c._id === course._id)) {
         return { ...course, enrolled: true };
       } else {
         return course;
       }
     });
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };



  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });


 const updateCourse = async () => {
  await courseClient.updateCourse(course);
  setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
  })
);};

const addNewCourse = async () => {
  const newCourse = await courseClient.createCourse(course);

  setCourses([ ...courses, newCourse ]);
};

const deleteCourse = async (courseId: string) => {
  const status = await courseClient.deleteCourse(courseId);
  setCourses(courses.filter((course) => course._id !== courseId));
};






useEffect(() => {
  if (enrolling) {
   fetchCourses();
 } else {
   findCoursesForUser();
 }
}, [currentUser, enrolling]);



  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <Session>

    <div id="wd-kanbas">


      {/* {JSON.stringify(courses)} */}

      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={
            <ProtectedRoute>
              <Dashboard courses={courses} course={course} setCourse={setCourse}
              addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse}
              enrolling={enrolling} isFaculty={isFaculty}setEnrolling={setEnrolling}
               updateEnrollment={updateEnrollment}
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
    </Session>
  );}