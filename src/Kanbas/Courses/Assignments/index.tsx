
import { BiPlus, BiSearch, BiSolidDownArrow } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import { FaClipboard, FaDeleteLeft } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";



import LessonControlButtons from "../Modules/LessonControlButtons";

import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, selectAssignment } from "./reducer";
import React from "react";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();

  


  const assignments = useSelector((state : any) => state.assignmentsReducer.assignments);
  const courseAssignments = assignments.filter((assignment : any) => assignment.course === cid);
  const dispatch = useDispatch();

  	const [selectedAssignment, setSelectedAssignment] = React.useState(
  		assignments[0]
  	);


  return (
    <div id="wd-assignments">

      <div className="d-inline ">

		{JSON.stringify(courseAssignments)}
    
					<Link to={`/Kanbas/Courses/${cid}/Assignments/New`}>
 						<button
 							type="button"
 							className="btn btn-danger mx-1 float-end text-white bg-danger"
 							// onClick={() => {
 							// 	dispatch(
 							// 		selectAssignment(newAssignmentTemplate)
 							// 	);
 							// }}
 						>
 							+ Assignment
						

 						</button>
					</Link>



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


        {courseAssignments
        .map((a : any) => (
          <li className="wd-assignment-list-item d-inline list-group-item p-3">
          <a className="wd-assignment-link  link-underline link-underline-opacity-0 text-black"
              href={`#/Kanbas/Courses/${a.course}/Assignments/${a._id}`}>

          <Link to={`/Kanbas/Courses/${a.course}/Assignments/${a._id}`}
           className="wd-assignment-link  link-underline link-underline-opacity-0 text-black"
          onClick={(e : any) => { dispatch( selectAssignment(a));}} />
             <BsGripVertical className="me-2 fs-3 float-start" />
             <FaClipboard className="text-success me-1 fs-5 float-start me-3" />
             <div className="float-start">
              <h5><b>{ a.title }</b></h5>
              <span className="text-danger">Multiple Modules</span> |<b> Not available until</b> {a.availabe_from} |
              <br />
              <b>Due</b> {a.due} | {a.points}
            </div>
            <span className="float-end"> <LessonControlButtons /> </span>
            </a>
            <FaDeleteLeft
											className="float-end mx-1 my-1"
											color="red"
                     
											data-bs-toggle="modal"
											data-bs-target="#deleteModal"
											onClick={(e) => {
												setSelectedAssignment({
													...a,
												});
											}}
										/>
                     {/* DELETE MODALLLLLL */}
                     <div
											className="modal fade"
											id="deleteModal"
											aria-labelledby="deleteModalLabel"
											aria-hidden="true"
										>
											<div className="modal-dialog">
												<div className="modal-content">
													<div className="modal-header">
														<h1
															className="modal-title fs-5"
															id="deleteModalLabel"
														>
															Delete{" "}
															{
																selectedAssignment.title
															}
															?
														</h1>
														<button
															type="button"
															className="btn-close"
															data-bs-dismiss="modal"
															aria-label="Close"
														></button>
													</div>
													<div className="modal-body">
														Are you sure you want to
														delete this assignment?
													</div>
													<div className="modal-footer">
														<button
															type="button"
															className="btn btn-secondary"
															data-bs-dismiss="modal"
														>
															No
														</button>
														<button
															type="button"
															className="btn btn-primary"
															data-bs-dismiss="modal"
															onClick={() =>
																dispatch(
																	deleteAssignment(
																		selectedAssignment._id
																	)
																)
															}
														>
															Yes
														</button>
													</div>
												</div>
											</div>
										</div>
          </li>
        ))}
        <ul className="list-group rounded-0 border-top-0 mt-0">
        </ul>
        </ul>

        



        
    </div>
  );
}