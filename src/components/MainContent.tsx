import { useContext } from "react";
import appContext from "../context/appContext";
import EmployeesList from "./EmployeesList";
import GetSingleForm from "./actionsForms/GetSingleForm";
import DeleteForm from "./actionsForms/DeleteForm";
import AddForm from "./actionsForms/AddForm";
import UpdateForm from "./actionsForms/UpdateForm";
import GetManyForm from "./actionsForms/GetManyForm";

const MainContent = () => {
  const { selectedAction } = useContext(appContext);
  return (
    <main>
        <div style={{maxWidth: "80%"}}>
        {"Get Single" === selectedAction && <GetSingleForm />}
        {"Delete" === selectedAction && <DeleteForm />}
        {"Add" === selectedAction && <AddForm />}
        {"Get many" === selectedAction && <GetManyForm />}
        {"Update" === selectedAction && <UpdateForm />}
        </div>
      <EmployeesList />
    </main>
  );
};

export default MainContent;
