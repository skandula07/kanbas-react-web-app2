import { FaPlus } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { useSelector } from "react-redux";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";



export default function ModulesControls({ moduleName, setModuleName, addModule }:
  { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
     <button className={`btn btn-danger me-1 float-end ${currentUser.role === "FACULTY"? "visible" : "invisible float-start" }`} id="wd-add-module-btn"
        data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >
        <FaPlus className="position-relative me-2"
                style={{ bottom: "1px" }} />
         Module </button>




      <div className="dropdown d-inline me-1 float-end">
        <button className="btn btn-secondary
                           dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark /> Publish All </button>

          <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/">
            <GreenCheckmark /> 
            Publish all modules and items</a> </li>
        <li>
          <a className="dropdown-item" href="/">
            <GreenCheckmark /> 
            Publish modules only</a> </li>
     


            <li>
          <a className="dropdown-item" href="/">
          <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish modules only</a> </li>
            <li>
          <a className="dropdown-item" href="/">
          <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish all modules and items</a> </li>
      </ul>
      </div>


      <button className="btn me-1 btn-secondary float-end">
        <FaPlus className="position-relative me-2"
                style={{ bottom: "1px" }} />
         Collapse All </button>

         <button className="btn me-1 btn-secondary float-end">
        <FaPlus className="position-relative me-2"
                style={{ bottom: "1px" }} />
         View Progress </button>




         <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                    setModuleName={setModuleName} addModule={addModule} />
                    
  </div>
);}