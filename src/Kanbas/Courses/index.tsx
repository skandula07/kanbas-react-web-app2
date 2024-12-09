import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Home from "./Home";
import People from "./People";
import Zoom from "./Zoom";
import Piazza from "./Piazza";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import * as assignmentsClient from "./Assignments/client"
import { FaAlignJustify } from "react-icons/fa";
// import { assignments } from "./../Database";
import Editor from "./Assignments/Editor/Editor";
import { useEffect, useState } from "react";

export default function Courses({ courses }: { courses: any[]; }) {

  const { pathname } = useLocation();

  const { cid } = useParams();
  const course = courses.find((course) => course.number === cid);
  // const as = assignments.filter((a) => a.course === course?.number);

  const [assignments, setAssignments] = useState<any[]>([]);
  
  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    setAssignments(assignments);
  }

  useEffect(() => {
    fetchAssignments();
    // eslint-disable-next-line
  }, [cid])

  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2> <hr />

     <div className="d-flex">
   <div className="d-none d-md-block">
            <CoursesNavigation />
          </div>
          <div className="flex-fill">

            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              
              <Route path="/Assignments/New" element={<Editor />} />


              {assignments.map((a) => (
                 <Route path={`Assignments/${a.number}`} element={<Editor />} />
              ))}

              <Route path="People" element={<People />} />
              <Route path="Piazza" element={<Piazza />} />
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Zoom" element={<Zoom />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
            </div></div>
    </div>
);}
