import { useState } from "react";
import EmployeesList, { Employee } from "./EmployeesList";
import FormsContainer from "./FormsContainer";
import { Divider, VStack } from "@chakra-ui/react";

const MainContent = () => {
  const [listToRender, setListToRender] = useState<Employee[]>([]);
  return (
    <main>
      <VStack>
        <FormsContainer setListToRender={setListToRender} />
          <Divider maxW={"80%"} mt={2}/>
        <EmployeesList employees={listToRender} />
      </VStack>
    </main>
  );
};

export default MainContent;
