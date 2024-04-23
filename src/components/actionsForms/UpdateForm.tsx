import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Employee } from "../EmployeesList";
import { useRef } from "react";
import sendRequest from "../../utils/sendRequest";

interface Props {
  setListToRender: (list: Employee[]) => void;
}

const UpdateForm = ({ setListToRender }: Props) => {
  const employeeIdInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const positionInput = useRef<HTMLInputElement>(null);
  const salaryInput = useRef<HTMLInputElement>(null);

  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Update employee
      </Heading>
      <FormLabel>Employee ID</FormLabel>
      <Input type="text" ref={employeeIdInput} />
      <FormLabel>name</FormLabel>
      <Input type="text" ref={nameInput} />
      <FormLabel>position</FormLabel>
      <Input type="text" ref={positionInput} />
      <FormLabel>salary</FormLabel>
      <Input type="number" ref={salaryInput} />
      <Button
        type="submit"
        onClick={() => {
          const detailsToUpdate: {
            name?: string;
            position?: string;
            salary?: number;
          } = {};
          if (nameInput.current?.value)
            detailsToUpdate.name = nameInput.current?.value;
          if (positionInput.current?.value)
            detailsToUpdate.position = positionInput.current?.value;
          if (salaryInput.current?.value)
            detailsToUpdate.salary = +salaryInput.current?.value;
          const idToUpdate: string = employeeIdInput.current?.value || "";
          sendRequest(
            "Update",
            setListToRender,
            { "Content-Type": "application/json" },
            JSON.stringify(detailsToUpdate),
            idToUpdate
          );
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default UpdateForm;
