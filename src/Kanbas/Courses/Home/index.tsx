import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <table id="wd-home">
      <button>Collapse All</button>
      &nbsp;
      <button>View Progress</button>
      &nbsp;

      <select id="wd-select-one-genre">
        <option selected value="COMEDY">Publish All</option>
        <option value="SCIFI">Course 1234</option>
      </select>
      &nbsp;
      <button>+ Module</button>

      <tr>
        <td valign="top">
          <Modules />
        </td>
        <td valign="top">
          <CourseStatus />
        </td>
      </tr>
    </table>
  );
}
