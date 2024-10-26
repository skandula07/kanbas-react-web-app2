import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router";

import { courses } from "./../Database";
export default function CoursesNavigation() {

  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const c = courses.find((course) => course._id === cid);



  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

      {links.map((link) =>
      (
        <Link to={`/Kanbas/Courses/${c?._id}/${link}`} id="wd-course-home-link"
        className= {`list-group-item border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}  > {link} </Link>
      )
      )}
    </div>
);}

