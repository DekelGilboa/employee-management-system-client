import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Employee } from "../EmployeesList";
import sendRequest from "../../services/sendRequest";

interface Props {
  setListToRender: (list: Employee[]) => void;
}

const DeleteForm = ({ setListToRender }: Props) => {
  const employeeIdInput = useRef<HTMLInputElement>(null);
  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Delete single employee
      </Heading>
      <FormLabel htmlFor="employee ID">{"Employee ID"}</FormLabel>
      <Input id="employee ID" type="text" ref={employeeIdInput} />
      <Button
        type="submit"
        onClick={() => {
          // deleteData(employeeIdInput.current?.value);
          sendRequest(
            "Delete",
            setListToRender,
            undefined,
            undefined,
            employeeIdInput.current?.value
          );
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default DeleteForm;
