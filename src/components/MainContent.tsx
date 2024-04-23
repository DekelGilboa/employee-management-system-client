import { useState } from "react";
import EmployeesList, { Employee } from "./EmployeesList";
import FormsContainer from "./FormsContainer";

const MainContent = () => {
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
      <FormsContainer setListToRender={setListToRender}/>
      <EmployeesList employees={listToRender} />
    </main>
  );
};

export default MainContent;
