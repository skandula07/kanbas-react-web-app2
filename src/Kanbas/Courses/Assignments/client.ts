import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });

// Fetch all assignments for a course
export const findAssignmentsForCourse = async (courseId: string) => {
  try {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments:", error);
    throw error;  // Re-throw or handle gracefully
  }
};

// Fetch a single assignment by ID
export const findAssignmentById = async (assignmentId: string) => {
  console.log("find Assignment by id/// request:", assignmentId);
  try {
    const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/assignments/${assignmentId}`);
    console.log("find Assignment by id/// response:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching assignment by ID:", error);
    throw error;  // Re-throw or handle gracefully
  }
};

// Create a new assignment
export const createAssignment = async (courseId: string, assignment: any) => {
  try {
    const response = await axiosWithCredentials.post(
      `${REMOTE_SERVER}/api/courses/${courseId}/assignments`,
      assignment
    );
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};

// Delete an assignment by ID
export const deleteAssignment = async (assignmentId: string) => {
  try {
    const response = await axiosWithCredentials.delete(
      `${REMOTE_SERVER}/api/courses/assignments/${assignmentId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
    throw error;
  }
};

// Update an existing assignment
export const updateAssignment = async (assignment: any) => {
  try {
    console.log("Updating... ",assignment.number)
    const response = await axiosWithCredentials.put(
      `${REMOTE_SERVER}/api/courses/assignments/${assignment.number}`,
      assignment
    );
    console.log("Response for update assignment...", response)

    return response.data;

  } catch (error) {
    console.error("Error updating assignment:", error);
    throw error;
  }
};
