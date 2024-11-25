import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./../reducer";
import { FaX } from "react-icons/fa6";
import { BiCalendarEvent } from "react-icons/bi";

import * as assignmentsClient from "../client";

function AssignmentEditor() {
  const { cid } = useParams();
  const url = useLocation().pathname;
  const aid = url.substring(url.lastIndexOf("/") + 1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const { assignments, newAssignment } = useSelector(
    (state: any) => state.assignmentsReducer
  );
  const assignment = getAssignment();

  const [title, setTitle] = useState(newAssignment.title);
  const [description, setDescription] = useState(newAssignment.description);
  const [points, setPoints] = useState(newAssignment.points);
  const [due_date, setDueDate] = useState("");
  const [available_from, setAvailableFrom] = useState("");
  const [available_until, setAvailableUntil] = useState("");

  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title);
      setDescription(assignment.description);
      setPoints(assignment.points);
      setDueDate(assignment.due_date);
      setAvailableFrom(assignment.available_from);
      setAvailableUntil(assignment.available_until);
    }
  }, [assignment]);

  const handleAddAssignment = async (assignment: any) => {
    if (!cid) return;
    const newAssignment = await assignmentsClient.createAssignment(
      cid,
      assignment
    );
    dispatch(addAssignment(newAssignment));
  };

  const handleSave = () => {
    const updatedAssignment = {
      _id: aid,
      course: cid,
      title: title,
      description: description,
      points: points,
      available_from: available_from,
      available_until: available_until,
      due_date: due_date,
    };

    if (aid === "New") {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      handleAddAssignment(newAssignment);
    } else {
      handleUpdateAssignment(updatedAssignment)
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleUpdateAssignment = async (updatedAssignment: any) => {
    await assignmentsClient.updateAssignment(updatedAssignment);
    dispatch(updateAssignment(updatedAssignment));
  };


  function getAssignment() {
    if (aid === "New") {
      const newAssignmentTemplate = {
        title: "New Assignment",
        course: cid,
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
  


  





  return (
    <div id="wd-assignments-editor">
      {!isFaculty && (
        <div>
          <h1>{title}</h1>
          <hr />
          <br />
          <br />
          <br />

          <div className="row mb-4">
            <div className="col-md-2">
              <strong>Due</strong> &nbsp;&nbsp;{due_date}
            </div>
            <div className="col-md-2">
              <strong>Points</strong> &nbsp;&nbsp; {points}
            </div>
            <div className="col-md-3">
              <strong>Available From</strong> &nbsp;&nbsp; {available_from}
            </div>
            <div className="col-md-3">
              <strong>Available Until</strong> &nbsp;&nbsp; {available_until}
            </div>
            <br />
            <br />
            <hr />
          </div>
          <br />
          <p>{description}</p>
          <br />
        </div>
      )}

      {isFaculty && (
        <div className="container">
          <div className="mb-4">
            <label htmlFor="wd-name" className="mb-2">
              Assignment Name
            </label>{" "}
            <br />
            <input
              id="wd-name"
              className="form-control"
              defaultValue={`${assignment?.title}`}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>


          <textarea
            id="wd-description"
            cols={60}
            rows={10}
            className="form-control mb-3 "
            onChange={(e) => setDescription(e.target.value)}
          >
            {assignment?.description}
          </textarea>

          <div className="container">
            <div className="row mb-3">
              <div className="col-2">
                <label htmlFor="wd-points" className="float-end">
                  Points
                </label>
              </div>
              <div className="col-9 col-lg-4">
                <input
                  id="wd-points"
                  className="form-control"
                  value={`${assignment?.points}`}
                  onChange={(e) => setPoints(e.target.value)}
                />
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
                    <label
                      className="form-check-label"
                      htmlFor="wd-website-url"
                    >
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
                    <label
                      className="form-check-label"
                      htmlFor="wd-file-upload"
                    >
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
                      onChange={(e) => setDueDate(e.target.value)}
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
                        <input
                          type="text"
                          id="wd-available-from"
                          value="2024-05-16"
                          className="form-control"
                          onChange={(e) => setAvailableFrom(e.target.value)}
                        />
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
                        <input
                          type="until"
                          id="wd-available-until"
                          value="2024-05-20"
                          className="form-control"
                          onChange={(e) => setAvailableUntil(e.target.value)}
                        />
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
            <button
              onClick={handleSave}
              className="btn btn-danger float-end m-1"
            >
              <Link
                to={`/Kanbas/Courses/${assignment?.course}/Assignments`}
                className="list-group-item border border-0"
              >
                {" "}
                Save{" "}
              </Link>
            </button>
            <button
              id="wd-cancel-assignment"
              type="button"
              className="btn btn-secondary float-end m-1"
            >
              <Link
                to={`/Kanbas/Courses/${assignment?.course}/Assignments`}
                className="list-group-item border border-0"
              >
                {" "}
                Cancel{" "}
              </Link>
            </button>
          </div>
        </div>
      )}

      {!isFaculty && (
        <button className="btn btn-danger float-end m-1">
          <Link
            to={`/Kanbas/Courses/${assignment?.course}/Assignments`}
            className="list-group-item border border-0"
          >
            {" "}
            Back{" "}
          </Link>
        </button>
      )}
    </div>
  );
}

export default AssignmentEditor;
