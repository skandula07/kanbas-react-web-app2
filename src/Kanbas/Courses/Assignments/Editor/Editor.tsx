import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./../reducer";
import { FaX } from "react-icons/fa6";
import { BiCalendarEvent } from "react-icons/bi";
import * as assignmentsClient from "../client";

function Editor() {
  const { cid } = useParams();
  const url = useLocation().pathname;
  const aid = useLocation().pathname.split('/').pop(); // Extract assignment ID from URL
    console.log("Course ID (cid):", cid); // Check if it's correct

console.log("Assignment ID:", aid);  // Make sure it's correct

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const { assignments, newAssignment } = useSelector(
    (state: any) => state.assignmentsReducer
  );

  const [assignment, setAssignment] = useState<any>(null); // Start with null, until the data is fetched
  const [title, setTitle] = useState(newAssignment?.title || ""); 
  const [description, setDescription] = useState(newAssignment?.description || "");
  const [points, setPoints] = useState(newAssignment?.points || "");
  const [due_date, setDueDate] = useState("");
  const [available_from, setAvailableFrom] = useState("");
  const [available_until, setAvailableUntil] = useState("");
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchAssignment = async () => {
    if (!aid || aid === "New") return;
    try {
      const fetchedAssignment = await assignmentsClient.findAssignmentById(aid);
      setAssignment(fetchedAssignment);
      setTitle(fetchedAssignment.title || "");
      setDescription(fetchedAssignment.description || "");
      setPoints(fetchedAssignment.points || "");
      setDueDate(fetchedAssignment.due_date || "");
      setAvailableFrom(fetchedAssignment.available_from || "");
      setAvailableUntil(fetchedAssignment.available_until || "");
    } catch (error) {
      console.error("Error fetching Assignment:", error);
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [aid]);

  // Early return while the user data is loading
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAddAssignment = async (assignment: any) => {
    if (!cid) return;
    await assignmentsClient.createAssignment(cid, assignment);
    // dispatch(addAssignment(newAssignment));
  };

  const handleUpdateAssignment = async (updatedAssignment: any) => {
    await assignmentsClient.updateAssignment(updatedAssignment);
    // dispatch(updateAssignment(updatedAssignment));
  };


  // const saveUser = async () => {
  //   const updatedUser = { ...user, firstName, lastName, role, email };
  //   await client.updateUser(updatedUser);
  //   setUser(updatedUser);
  //   setEditing(false);
  //   navigate(-1);
  // };

  const handleSave = async () => {
    const updatedAssignment = {
      number: aid === "New" ? new Date().getTime().toString() : aid,
      course: cid,
      title: title,
      description: description,
      points: points,
      available_from: available_from,
      available_until: available_until,
      due_date: due_date,
    };
    setAssignment(updatedAssignment);
    try {
      if (aid === "New") {
        await handleAddAssignment(assignment);
      } else {
        await handleUpdateAssignment(assignment);
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment", error);
    }
  };

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
          {JSON.stringify(aid)}
          <div className="mb-4">
            <label htmlFor="wd-name" className="mb-2">
              Assignment Name
            </label>{" "}
            <br />
            <input
              id="wd-name"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <textarea
            id="wd-description"
            cols={60}
            rows={10}
            className="form-control mb-3 "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

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
                  defaultValue={points}
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

            {/* Due and available dates */}
            <div className="d-flex">
              <div className="p-2 pl-0">
                <h6 className="mb-2">
                  <b>Available From:</b>
                </h6>
                <div className="input-group">
                  <input
                    type="date"
                    id="wd-available-from"
                    value={available_from}
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
                    type="date"
                    id="wd-available-until"
                    value={available_until}
                    className="form-control"
                    onChange={(e) => setAvailableUntil(e.target.value)}
                  />
                  <span className="input-group-text">
                    <BiCalendarEvent />
                  </span>
                </div>
              </div>
            </div>

            {/* Save and Cancel buttons */}
            <hr />
            <button
              onClick={handleSave}
              className="btn btn-danger float-end m-1"
            >
              Save
            </button>
            <button
              id="wd-cancel-assignment"
              type="button"
              className="btn btn-secondary float-end m-1"
            >
              <Link
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className="list-group-item border border-0"
              >
                Cancel
              </Link>
            </button>
          </div>
        </div>
      )}

      {!isFaculty && (
        <button className="btn btn-danger float-end m-1">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="list-group-item border border-0"
          >
            Back
          </Link>
        </button>
      )}
    </div>
  );
}

export default Editor;
