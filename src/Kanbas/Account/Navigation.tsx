import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  function rename(link: string) {
    if(link === "Signin") {
      return ("Sign In");
    } else if (link === "Signup") {
      return ("Sign Up");
    } else {
      return ("Profile");
    }
  };

  
  return (
    <div id="wd-account-navigation">

{links.map((link) =>
      (
        <Link to={`/Kanbas/Account/${link}`} id="wd-course-home-link"
        className= {`list-group-item border-0 p-2 fs-6 ${pathname.includes(link) ? "active" : "text-danger"}`}> {rename(link)} </Link>
      )
      )}

      <br />
    </div>
  );
}