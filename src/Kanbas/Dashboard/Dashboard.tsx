import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {enroll, unenroll} from "./enrollmentsReducer";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, isFaculty}: {
  courses: any[]; course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  isFaculty: boolean;}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isStudent = currentUser?.role === "STUDENT";
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const dispatch = useDispatch();

  const enrollCourse = ({ course }: { course: any }) => {
    const newEnrollment = {
      user: currentUser._id,
      course: course._id,
    };
    dispatch(enroll(newEnrollment));
  };

  const dropCourse = ({ course }: { course: any }) => {
    const enrollment = enrollments.find((e: any) =>
      e.user === currentUser._id && e.course === course._id);
    dispatch(unenroll(enrollment._id));
  };

  const isCourseEnrolled = (course: any) =>
    enrollments.some((enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === course._id);

  // Filter show courses
  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) => isCourseEnrolled(course));

  return (
    <div id="wd-dashboard">
      <div className="d-flex align-items-center justify-content-between">
        <h1 id="wd-dashboard-title" className="mb-0">Dashboard</h1>
        {isStudent && <div>
          {showAllCourses ? (
            <button className="btn btn-success" onClick={() => setShowAllCourses(false)}>Done</button>
          ) : (
            <button className="btn btn-primary" onClick={() => setShowAllCourses(true)}>Enrollments</button>
          )}
        </div>}
      </div>

      <hr/>
      {currentUser==="FACULTY" && <div>
        <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => addNewCourse()}> Add </button>
          <button className="btn btn-warning float-end me-2"
                  onClick={() => updateCourse()} id="wd-update-course-click">
            Update
          </button>
        </h5>
        <br/>
        <input value={course.name} className="form-control mb-2"
               onChange={(e) => setCourse({...course, name: e.target.value})}/>
        <textarea value={course.description} className="form-control"
                  onChange={(e) => setCourse({...course, description: e.target.value})}/>
        <hr/>
      </div>}

      <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2>
      <hr/>
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map(course => (
            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className={`wd-dashboard-course-link text-decoration-none text-dark }`}
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  onClick={(event) => {
                    if (!isCourseEnrolled(course)) {
                      event.preventDefault(); // Prevents navigation if not enrolled
                    }
                  }} 
                >
                  <img src={`/images/${course._id}.jpg`} width="100%" alt=" " height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title overflow-y-hidden" style={{maxHeight: 23}}>
                      {course._id} {course.name}
                    </h5>
                    <p className="wd-dashboard-course-text card-text overflow-y-hidden" style={{maxHeight: 100}}>
                      {course.description}
                    </p>
                    <div className="d-flex justify-content-between">
                      {!showAllCourses && <button className="btn btn-primary" style={{maxWidth: 50}}>Go</button>}
                      {isStudent && showAllCourses &&
                        <div id="wd-enrollment-control">
                          {isCourseEnrolled(course) &&
                            <button className="btn btn-danger" style={{maxWidth: 100}}
                                    onClick={(event) => {
                                      event.preventDefault();
                                      dropCourse({ course });
                                    }}>Unenroll</button>}
                          {!isCourseEnrolled(course) &&
                            <button className="btn btn-success" style={{maxWidth: 100}}
                                    onClick={(event) => {
                                      event.preventDefault();
                                      enrollCourse({ course });
                                    }}>Enroll</button>}
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
