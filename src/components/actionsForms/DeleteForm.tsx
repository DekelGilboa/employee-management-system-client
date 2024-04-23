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

const DeleteForm = ({ setListToRender }: Props) => {
  const employeeIdInput = useRef<HTMLInputElement>(null);
  const deleteData = async (id: string | undefined) => {
    if (!id) return;
    fetch("http://localhost:3000/api/v1/employees/" + id, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        const list = data.data instanceof Array ? data.data : [];
        setListToRender(list);
      });
  };
  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Delete single employee
      </Heading>
      <FormLabel>{"Employee ID"}</FormLabel>
      <Input type="text" ref={employeeIdInput} />
      <Button
        type="submit"
        onClick={() => {
          deleteData(employeeIdInput.current?.value);
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default DeleteForm;
