import { BiPlus, BiSearch, BiSolidDownArrow } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import { FaClipboard } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-inline ">
        <button className="btn btn-danger me-1 float-end">
          <BiPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment{" "}
        </button>
        <button className="btn btn-secondary me-1 float-end">
          <BiPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group{" "}
        </button>
        <div className="input-group mb-3 float-right me-2 fs-5 border rounded w-25">
          <label
            className="input-group-text bg-white border-0 w-2"
            htmlFor="wd-search-assignment"
          >
            <BiSearch />
          </label>
          <input
            id="wd-search-assignment"
            className="form-control border-0 "
            placeholder="Search..."
          />
        </div>
      </div>
{/* ASSDIGNSDGMENTS */}

      <ul id="wd-assignment-list" className="list-group rounded-0 ">

      <li>
        <div className="wd-assignment-list-item list-group-item p-0
                      fs-5 bg-secondary">
        <h4 id="wd-assignments-title" className="p-3 ps-2">
        <BsGripVertical className="me-2 fs-3 " />
        <BiSolidDownArrow className=" me-2 fs-5" />
           ASSIGNMENTS 
          <IoEllipsisVertical className="fs-4 float-end" />
          <BiPlus className="fs-4 me-2 float-end" />
          <button className=" btn btn-default float-end border rounded-pill ts-sm  me-2" ><span className="fs-7">40% of Total</span></button>
        </h4> </div>
        </li>

        <ul className="list-group rounded-0 border-top-0 mt-0">

        <li className="wd-assignment-list-item d-inline list-group-item p-3">
        <a className="wd-assignment-link  link-underline link-underline-opacity-0 text-black"
            href="#/Kanbas/Courses/1234/Assignments/1">
           <BsGripVertical className="me-2 fs-3 float-start" />
           <FaClipboard className="text-success me-1 fs-5 float-start me-3" />
           <div className="float-start">
            <h5><b>A1 - ENV + HTML </b></h5>
            <span className="text-danger">Multiple Modules</span> |<b> Not available until</b> May 6 at 12:00 am |
            <br />
            <b>Due</b> May 13 at 11:59 am | 100pts
          </div>
          <span className="float-end"> <LessonControlButtons /> </span>
          </a>
        </li>



        <li className="wd-assignment-list-item d-inline list-group-item p-3">
        <a className="wd-assignment-link  link-underline link-underline-opacity-0 text-black"
            href="#/Kanbas/Courses/1234/Assignments/1">
           <BsGripVertical className="me-2 fs-3 float-start" />
           <FaClipboard className="text-success me-1 fs-5 float-start me-3" />
           <div className="float-start">
            <h5><b>A3 - JAVASCRIPT + REACT </b></h5>
            <span className="text-danger">Multiple Modules</span> |<b> Not available until</b> May 13 at 12:00 am |
            <br />
            <b>Due</b> May 20 at 11:59 am | 100pts
          </div>
          <span className="float-end"> <LessonControlButtons /> </span>
          </a>
        </li>

        <li className="wd-assignment-list-item d-inline list-group-item p-3">
        <a className="wd-assignment-link  link-underline link-underline-opacity-0 text-black"
            href="#/Kanbas/Courses/1234/Assignments/1">
           <BsGripVertical className="me-2 fs-3 float-start" />
           <FaClipboard className="text-success me-1 fs-5 float-start me-3" />
           <div className="float-start">
            <h5><b>A2 - CSS + BOOTSTRAP </b></h5>
            <span className="text-danger">Multiple Modules</span> |<b> Not available until</b> May 20 at 12:00 am |
            <br />
            <b>Due</b> May 27 at 11:59 am | 100pts
          </div>
          <span className="float-end"> <LessonControlButtons /> </span>
          </a>
        </li>



        </ul>
        </ul>
        

        
{/*         
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/2"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <p>
            Multiple Modules | <b>Not available until</b> May 13 at 12:00 am |
            <br />
            <b>Due</b> May 20 at 11:59 am | 100pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/3"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <p>
            Multiple Modules | <b>Not available until</b> May 20 at 12:00 am |
            <br />
            <b>Due</b> May 27 at 11:59 am | 100pts
          </p>
        </li>
      </ul> */}
    </div>
  );
}
