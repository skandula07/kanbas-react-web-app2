import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import * as client from "../../Account/client";
import { Link } from "react-router-dom";

export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>(null); // Start with null, until the data is fetched
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading
  const navigate = useNavigate();

  // Fetch user data
  const fetchUser = async () => {
    if (!uid) return;
    setLoading(true); // Start loading when fetching
    try {
      const fetchedUser = await client.findUserById(uid);
      setUser(fetchedUser);
      setFirstName(fetchedUser.firstName || ""); // Set default empty string if firstName is missing
      setLastName(fetchedUser.lastName || ""); // Set default empty string if lastName is missing
      setRole(fetchedUser.role || ""); // Set role if available
      setEmail(fetchedUser.email || ""); // Set email if available
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  const saveUser = async () => {
    const updatedUser = { ...user, firstName, lastName, role, email };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  // Early return while the user data is loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Early return if the user doesn't exist (uid is invalid or user not found)
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={() => navigate(-1)}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >

        {/* <Link to={`/Kanbas/Account/Users/`} className="text-decoration-none"> */}
        <IoCloseSharp className="fs-1" />
        {/* </Link> */}
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
          />
        )}
        {editing && (
          <FaCheck
            onClick={() => saveUser()}
            className="float-end fs-5 mt-2 me-2 wd-save"
          />
        )}
        {!editing && (
          <div
            className="wd-name"
            onClick={() => setEditing(true)}
          >
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <div>
            <input
              className="form-control w-50 wd-edit-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveUser();
                }
              }}
            />
            <input
              className="form-control w-50 wd-edit-name mt-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveUser();
                }
              }}
            />
          </div>
        )}
      </div>

      {/* Roles Section */}
      <b>Roles:</b>
      <div className="wd-roles">
        {!editing && <div onClick={() => setEditing(true)}>{user.role}</div>}
        {editing && (
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STUDENT">STUDENT</option>
            <option value="FACULTY">FACULTY</option>
            <option value="ADMIN">ADMIN</option>
            <option value="TA">TA</option>
          </select>
        )}
      </div>

      {/* Login ID */}
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
      <br />
      {/* Section */}
      <b>Section:</b> <span className="wd-section">{user.section}</span>
      <br />
      {/* Total Activity */}
      <b>Total Activity:</b>
      <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />

      {/* Email Section */}
      <b>Email:</b>
      <div className="wd-email">
        {!editing && <div onClick={() => setEditing(true)}>{user.email}</div>}
        {editing && (
          <input
            className="form-control w-50 wd-edit-name mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>

      <hr />
      <button
        onClick={() => deleteUser(user._id)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <br />
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary float-start float-end me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}
