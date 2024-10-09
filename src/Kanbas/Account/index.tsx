import { Navigate, Route, Routes } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
  return (
    <div>


      <div className="d-flex">
      <AccountNavigation />
      <div className="m-3">
      <Routes>
              <Route
                path="/"
                element={<Navigate to="/Kanbas/Account/Signin" />}
              />
              <Route path="/Signin" element={<Signin />}  />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
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