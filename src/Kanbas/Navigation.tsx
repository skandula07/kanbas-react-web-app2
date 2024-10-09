import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoFlaskOutline } from "react-icons/io5";
import { LiaBookSolid} from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
export default function KanbasNavigation() {
  return (
    <div
      style={{ width: 120 }}
      className="d-none d-md-block bg-black position-fixed bottom-0 top-0 z-2 list-group rounded-0 border-0"
      id="wd-kanbas-navigation"
    >
      <a
        className="list-group-item bg-black text-white text-center border-0"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/NEU.png" alt="NEU" width="100" height="100" />
      </a>
      <Link
        className="list-group-item active text-center border-0 bg-white text-danger"
        to="/Kanbas/Account"
        id="wd-account-link"
      >
        <FaRegCircleUser className="fs-1 text text-black" />
        <br />
        Account
      </Link>
      <Link
        className="list-group-item bg-black text-white text-center border-0"
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        className="list-group-item bg-black text-white text-center border-0"
        to="/Kanbas/Dashboard"
        id="wd-course-link"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link
        className="list-group-item bg-black text-white text-center border-0"
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <Link
        className="list-group-item bg-black text-white text-center border-0"
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
      >
        <BsInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link
        className="list-group-item bg-black text-white text-center border-0"
        to="/Labs"
        id="wd-labs-link"
      >
      <IoFlaskOutline className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
);}
