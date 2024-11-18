import React from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./../reducer";
import { FaX } from "react-icons/fa6";
import { BiCalendarEvent } from "react-icons/bi";


function AssignmentEditor() {
	
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cid = useParams();
 	const url = useLocation().pathname;
  	const aid = url.substring(url.lastIndexOf("/") + 1);


  const assignments = useSelector((state : any) => state.assignmentsReducer.assignments);
  const assignment = getAssignment();



  function getAssignment() {
	if (aid === "New") {
		const newAssignmentTemplate = {
			title: "New Assignment",
			course: cid.cid,
			description: "Add Description",
			due: "May 20, 2024",
			available_from: "May 7, 2024",
			available_until: "May 27, 2024",
			points: "100",
			display_grade_as : "Percentage",
			submission_type : "Online",
			assign_to : "Everyone",
		  };
		return newAssignmentTemplate;
	}
	return assignments.find((assignment : any) => assignment._id === aid);
  }


  const handleSave = () => {
    if (aid === "New") {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      dispatch(addAssignment(newAssignment));

    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid.cid}/Assignments`);
  };

  return (



    <div id="wd-assignments-editor">

<div className="container">
        <div className="mb-4">
          <label htmlFor="wd-name" className="mb-2">
            Assignment Name
          </label>{" "}
          <br />


          
          
          <input
            id="wd-name"
            className="form-control w-50 w-sm-100"
            defaultValue={`${assignment?.title}`}
			onChange={(e) => dispatch(updateAssignment({ ...assignment, title: e.target.value }))}
          />

        </div>

        <textarea
          id="wd-description"
          cols={60}
          rows={10}
          className="form-control mb-3 w-50 w-sm-100"
		  onChange={(e) => dispatch(updateAssignment({ ...assignment, description: e.target.value }))}
        >
          { assignment?.description }
        </textarea>

        <div className="container">
          <div className="row mb-3">
            <div className="col-2">
              <label htmlFor="wd-points" className="float-end">
                Points
              </label>
            </div>
            <div className="col-9 col-lg-4">
              <input id="wd-points" className="form-control" value={`${assignment?.points}`} 
			  onChange={(e) => dispatch(updateAssignment({ ...assignment, points: e.target.value })) }/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <label htmlFor="wd-group" className="float-end text-end">
                Assignment Group
              </label>
            </div>
            <div className="col-9 col-lg-4">
              <select id="wd-group" value={100} className="form-select">
                <option selected value="assignments">
                  ASSIGNMENTS
                </option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <label
                htmlFor="wd-display-grade-as"
                className="float-end text-end"
              >
                Display Grade As
              </label>
            </div>
            <div className="col-9 col-lg-4">
              <select
                id="wd-display-grade-as"
                value={100}
                className="form-select"
              >
                <option selected value="percentage">
                  Percentage
                </option>
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <label
                htmlFor="wd-submission-type"
                className="float-end text-end"
              >
                Submission Type
              </label>
            </div>
            <div className="col-9 col-lg-4">
              <div className="border p-3">
                <select
                  id="wd-submission-type"
                  value={100}
                  className="mb-3 form-select"
                >
                  <option selected value="online">
                    Online
                  </option>
                </select>
                <h6 className="mb-2">
                  <b>Online Entry Options</b>
                </h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="submission-type"
                    id="wd-text-entry"
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="submission-type"
                    id="wd-website-url"
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="submission-type"
                    id="wd-media-recordings"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="submission-type"
                    id="wd-student-annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="submission-type"
                    id="wd-file-upload"
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Upload
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-2">
              <label htmlFor="wd-assign-to" className="float-end text-end">
                Assign &nbsp;
              </label>
            </div>
            <div className="col-9 col-lg-4">
              <div className="border p-3">
                <h6 className="mb-2">
                  <b>Assign To</b>
                </h6>
                <div className="border p-2  mb-3">
                  <button className="btn btn-secondary btn-sm">
                    Everyone &nbsp;
                    <FaX className="float-right" />
                  </button>
                </div>

                <h6 className="mb-2">
                  <b>Due</b>
                </h6>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    id="wd-due-date"
                    value="2024-03-13"
                    className="form-control"
					onChange={(e) => dispatch(updateAssignment({ ...assignment, due: e.target.value })) }
                  />
                  <span className="input-group-text">
                    <BiCalendarEvent />
                  </span>
                </div>

                <div className="d-flex">

                  <div className="p-2 pl-0">
                  <h6 className="mb-2">
                  <b>Available From:</b>
                </h6>
                <div className="input-group">
                <input type="text" id="wd-available-from" value="2024-05-16" className="form-control"
				onChange={(e) => dispatch(updateAssignment({ ...assignment, available_from: e.target.value }))} />
                  <span className="input-group-text">
                    <BiCalendarEvent />
                  </span>
                </div>
                  </div>

                  <div className="p-2 pr-0">
                  <h6 className="mb-2">
                  <b>Available Until:</b>
                </h6>
                <div className="input-group">
                <input type="until" id="wd-available-until" value="2024-05-20" className="form-control" 
				onChange={(e) => dispatch( updateAssignment({ ...assignment, avialable_until: e.target.value }) ) }/>
                  <span className="input-group-text">
                    <BiCalendarEvent />
                  </span>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
		  <button onClick={handleSave} className="btn btn-danger float-end m-1">
          <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`}  className="list-group-item border border-0"> Save </Link>
            </button>
          <button id="wd-cancel-assignment" type="button" className="btn btn-secondary float-end m-1">
          <Link to={`/Kanbas/Courses/${assignment?.course}/Assignments`} className="list-group-item border border-0" > Cancel </Link>
            </button>
            
        </div>
        
      </div>


      
    </div>
  );
}

export default AssignmentEditor;