import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {enroll, unenroll, setEnrollments} from "./enrollmentsReducer";
import * as enrollmentsClient from "./client";
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, isFaculty, enrolling, setEnrolling, updateEnrollment}: {
  courses: any[]; course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  isFaculty: boolean;
  enrolling: boolean; 
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void 
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isStudent = currentUser?.role === "STUDENT";

  // const enrolledCourses = courseClient

  // const allCourses = courseClient.fetchAllCourses

    function DashboardEditor() {
      if (currentUser.role === "FACULTY") {
      return (
        <div>

         <h5>
             New Course
             <button
               className="btn btn-primary float-end"
               id="wd-add-new-course-click"
               onClick={addNewCourse}
             >
               {" "}
               Add{" "}
             </button>
             <button
               className="btn btn-warning float-end me-2"
               onClick={updateCourse}
               id="wd-update-course-click"
             >
               Update
             </button>
           </h5>
             <br />
             <input
               value={course.name}
               className="form-control mb-2"
               onChange={(e) => setCourse({...course, name: e.target.value})}/>
             <textarea
               value={course.description}
               className="form-control"
               onChange={(e) => setCourse({ ...course, description: e.target.value })}
             />
                   <hr />
              </div>
           
       ); } else {
        return (
          <span><hr /></span>
          
        );
       }
     }

  return (
    <div id="wd-dashboard">


      <div className="d-flex align-items-center justify-content-between">
        <h1 id="wd-dashboard-title" className="mb-0">Dashboard</h1>
        {isStudent && <div>
          <button onClick={() => setEnrolling(!enrolling)} className={`btn ${enrolling ? "btn-success" : "btn-primary" } float-end`} >
          {enrolling ? "Done!" : "All Courses"}
        </button>

        </div>}
      </div>

      <hr/>
      {DashboardEditor()}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr/>
      <div id="wd-dashboard-courses" className="row">
        {/* {JSON.stringify(courses)} */}
        {/* {courses} */}
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map(course => (
              
            <div className="wd-dashboard-course col" style={{width: "300px"}} key={course._id}>
                {/* {JSON.stringify(course)} */}
                {/* {enrolledCourses} */}
                <br /> 
                <br /> 
              <div className="card rounded-3 overflow-hidden">
                {/* {JSON.stringify(course)} */}
                <Link
                  className={`wd-dashboard-course-link text-decoration-none text-dark }`}
                  to={`/Kanbas/Courses/${course.number}/Home`}
                >
                  <img src={`/images/${course.number}.jpg`} width="100%" alt=" " height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title overflow-y-hidden" style={{maxHeight: 23}}>
                    {course.number} {course.name}
                    </h5>
                    <p className="wd-dashboard-course-text card-text overflow-y-hidden" style={{maxHeight: 100}}>
                      {course.description}
                    </p>
                    <div className="d-flex justify-content-between">
                      {!enrolling && <button className="btn btn-primary" style={{maxWidth: 50}}>Go</button>}
                      {isStudent &&
                        <div id="wd-enrollment-control">
                        {enrolling && (
              <button onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(course.number, !course.enrolled);
                      }}
                      className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                {course.enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}


                        </div>
                      }
                      {isFaculty && <div>
                        <button id="wd-edit-course-click"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setCourse(course);
                                }}
                                className="btn btn-warning me-2">
                          Edit
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger"
                          id="wd-delete-course-click"
                          style={{maxWidth: 80}}
                        >
                          Delete
                        </button>
                      </div>}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
