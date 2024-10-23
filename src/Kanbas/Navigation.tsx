import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoFlaskOutline } from "react-icons/io5";
import { LiaBookSolid} from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { BsInbox } from "react-icons/bs";
export default function KanbasNavigation() {
  

  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: BsInbox },
    { label: "Labs",      path: "/Labs",             icon: IoFlaskOutline },
  ];
  
  
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
      <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}

    </div>
);}
