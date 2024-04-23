import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Employee } from "../EmployeesList";

interface Props {
  setListToRender: (list: Employee[]) => void;
}

const AddForm = ({ setListToRender }: Props) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const positionInput = useRef<HTMLInputElement>(null);
  const salaryInput = useRef<HTMLInputElement>(null);

  const addData = async (e: object) => {
    fetch("http://localhost:3000/api/v1/employees/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((response) => response.json())
      .then((data) => {
        const list = data.data instanceof Array ? data.data : [];
        setListToRender(list);
      });
  };

  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Add employee
      </Heading>
      <FormLabel>name</FormLabel>
      <Input type="text" ref={nameInput} />
      <FormLabel>position</FormLabel>
      <Input type="text" ref={positionInput} />
      <FormLabel>salary</FormLabel>
      <Input type="number" ref={salaryInput} />
      <Button
        type="submit"
        onClick={() => {
          const newEmployee = {
            name: nameInput.current?.value || "",
            position: positionInput.current?.value || "",
            salary: +(salaryInput.current?.value || 0),
          };
          addData(newEmployee);
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default AddForm;
