import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {enroll, unenroll, setEnrollments} from "./enrollmentsReducer";
import * as enrollmentsClient from "./client";
import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";

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
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [myCourses, setMyCourses] = useState<any[]>([]);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const dispatch = useDispatch();


  const fetchAllCourses = async () => {
    let allCourses = [];
    try {
      allCourses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setAllCourses(allCourses);
  };


  const fetchMyCourses = async () => {
    const myCourses = await userClient.findMyCourses();
    setMyCourses(myCourses);
  }

  const fetchEnrollments = async () => {
    try {
      const userEnrollments = await userClient.findAllMyEnrollments(currentUser._id);
      dispatch(setEnrollments(userEnrollments));
    } catch (error) {
      console.error("Error fetching enrollments:", error); // Log error
      console.log("Current User ID:", currentUser?._id); // Log current user ID
    }
  };
  
  useEffect(() => {
    fetchMyCourses()
    fetchAllCourses();
    fetchEnrollments();
  }, []);


   // Filter show courses
   const studentCourses = showAllCourses ? allCourses : myCourses;
   const filteredCourses = isStudent ? studentCourses : courses;



  const enrollCourse = async ({ course }: { course: any }) => {
    await enrollmentsClient.addEnrollment(currentUser._id, course._id)
    fetchMyCourses();
    dispatch(enroll({userId: currentUser._id, courseId : course._id}));
  };


  const dropCourse = async ({ course }: { course: any }) => {
    await enrollmentsClient.deleteEnrollment(currentUser._id, course._id)
    fetchMyCourses();
    dispatch(unenroll({userId: currentUser._id, courseId : course._id}));
  };


  const isCourseEnrolled = (course: any) => 
    enrollments.some((enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === course._id);
  







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

      {/* {JSON.stringify(allCourses)} */}

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
      {DashboardEditor()}

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
