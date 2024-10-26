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
import Editor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "./../Database";

export default function Courses() {
  const { pathname } = useLocation();

  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
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
              <Route path="Assignments/aid:" element={<Editor />} />
              <Route path="People" element={<People />} />
              <Route path="Piazza" element={<Piazza />} />
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Zoom" element={<Zoom />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
            </div></div>
    </div>
);}
