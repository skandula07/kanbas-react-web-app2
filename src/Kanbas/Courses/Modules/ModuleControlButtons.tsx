import { BsPlusLg } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlusLg />
      <IoEllipsisVertical  className="fs-4" />
    </div>
);}
