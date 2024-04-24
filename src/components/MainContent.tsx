import { useState } from "react";
import EmployeesList, { Employee } from "./EmployeesList";
import FormsContainer from "./FormsContainer";
import { VStack } from "@chakra-ui/react";

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
      <VStack >
      <FormsContainer setListToRender={setListToRender}/>
      <EmployeesList employees={listToRender} />
      </VStack>
    </main>
  );
};

export default MainContent;
