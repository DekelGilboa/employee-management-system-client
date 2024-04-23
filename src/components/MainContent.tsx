import { useContext, useState } from "react";
import appContext from "../context/appContext";
import EmployeesList, { Employee } from "./EmployeesList";
import GetSingleForm from "./actionsForms/GetSingleForm";
import DeleteForm from "./actionsForms/DeleteForm";
import AddForm from "./actionsForms/AddForm";
import UpdateForm from "./actionsForms/UpdateForm";
import GetManyForm from "./actionsForms/GetManyForm";

const MainContent = () => {
  const { selectedAction } = useContext(appContext);
  const [listToRender, setListToRender] = useState<Employee[]>([
    {
      name: "text",
      _id: "1",
      position: "Software Engineer",
      salary: 60000,
    },
  ]);
  return (
    <main>
      <div style={{ maxWidth: "80%" }}>
        {"Get Single" === selectedAction && <GetSingleForm setListToRender={setListToRender}/>}
        {"Delete" === selectedAction && <DeleteForm setListToRender={setListToRender}/>}
        {"Add" === selectedAction && <AddForm setListToRender={setListToRender}/>}
        {"Get many" === selectedAction && <GetManyForm />}
        {"Update" === selectedAction && <UpdateForm setListToRender={setListToRender} />}
      </div>
      <EmployeesList employees={listToRender} />
    </main>
  );
};

export default MainContent;
