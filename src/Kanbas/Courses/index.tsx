import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Home from "./Home";
import People from "./People";
import Zoom from "./Zoom";
import Piazza from "./Piazza";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import Editor from "./Assignments/Editor";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<Editor />} />
              <Route path="People" element={<People />} />
              <Route path="Piazza" element={<Piazza />} />
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Zoom" element={<Zoom />} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
