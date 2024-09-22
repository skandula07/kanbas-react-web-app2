import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="https://ssec.si.edu/sites/default/files/ThinkstockPhotos-72967326.jpg" width={400} alt="PICTURE!"/>
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS1234 React JS </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Road_in_Norway.jpg/640px-Road_in_Norway.jpg" width={400} alt="PICTURE!"/>
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> CS2345 Terminal Coding </Link>
            <p className="wd-dashboard-course-title">
              Learn how to use the command line 😨💥 </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <img src="https://oceanservice.noaa.gov/facts/waves-of-poster.jpg" width={400} alt="PICTURE!"/>
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kanbas/Courses/1234/Home"> AD7654 Movies </Link>
            <p className="wd-dashboard-course-title">
              The watch scary movies class. </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
);}
