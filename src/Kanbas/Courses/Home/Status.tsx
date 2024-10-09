import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaBell, FaCheckCircle, FaHome } from "react-icons/fa";
import { BiImport, BiSolidBarChartAlt2 } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import {BsMegaphone } from "react-icons/bs";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }} className="padding-5">
      <h2>Course Status</h2>

      <div className="d-flex">
      <div className="w-50 pe-1">
          <button className="btn btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
      &nbsp;
      <div className="w-50">
          <button className="btn btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div>
      <br />

      <button className="btn btn-secondary w-100 text-start ">
      <BiImport className="me-2 mt-1 fs-5" />
        Import Existing Content
        </button>
        <br />

        <button className="btn btn-secondary w-100 mt-1 text-start ">
      <LiaFileImportSolid className="me-2 mt-1 fs-5" />
        Import from Commons
        </button>
        <br />

        <button className="btn btn-secondary w-100 mt-1 text-start">
      <FaHome className="me-2 fs-5" />
      Choose Home Page
        </button>
        <br />

        <button className="btn btn-secondary w-100 mt-1 text-start ">
      <BiSolidBarChartAlt2 className="me-2 fs-5" />
      View Course Stream
        </button>
        <br />

 <button className="btn btn-secondary w-100 mt-1 text-start ">
      <BsMegaphone className="me-2 fs-5" />
      New Announcement
        </button>
        <br />

        <button className="btn btn-secondary w-100 mt-1 text-start ">
      <BiSolidBarChartAlt2 className="me-2 fs-5" />
      New Analytics
        </button>
        <br />

        <button className="btn btn-secondary w-100 mt-1 text-start ">
      <FaBell className="me-2 fs-5" />
      View Course Notifications
        </button>
        <br />

        </div>
);}
