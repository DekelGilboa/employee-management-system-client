import { useState } from "react";
import EmployeesList, { Employee } from "./EmployeesList";
import FormsContainer from "./FormsContainer";
import { VStack } from "@chakra-ui/react";

const MainContent = () => {
  const [listToRender, setListToRender] = useState<Employee[]>([]);
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
