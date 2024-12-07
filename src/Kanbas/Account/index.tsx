import { Navigate, Route, Routes } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import Users from "./Users";
import { useSelector } from "react-redux";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div>

      <div className="d-flex">
      <AccountNavigation />
      <div className="m-3">
      <Routes>
              <Route path="/" element={ <Navigate to={currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" } /> } />

              <Route path="/Signin" element={<Signin />}  />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Users" element={<Users />} />
              <Route path={`/Users/:uid`} element={<Users />} />


            </Routes>

      </div>

      </div>
     




      <table>
        <tr>
        
          <td valign="top">
           
          </td>
        </tr>
      </table>
    </div>
  );
}