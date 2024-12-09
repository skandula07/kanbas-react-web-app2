import { useParams } from "react-router";
import PeopleTable from "./PeopleTable";
import * as client from "../client"
import { useEffect, useState } from "react";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const users = await client.findUsersForCourse(cid as string);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);

    return (
      <div id="wd-course-people-link">
        <PeopleTable users={users} />
        
        </div>
    );
}