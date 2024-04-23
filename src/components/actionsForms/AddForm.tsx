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

const AddForm = ({ setListToRender }: Props) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const positionInput = useRef<HTMLInputElement>(null);
  const salaryInput = useRef<HTMLInputElement>(null);

  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Add employee
      </Heading>
      <FormLabel htmlFor="name">name</FormLabel>
      <Input id="name" type="text" name="name" ref={nameInput} minLength={2} />
      <FormLabel htmlFor="position">position</FormLabel>
      <Input id="position" type="text" ref={positionInput} minLength={2} />
      <FormLabel htmlFor="salary">salary</FormLabel>
      <Input id="salary" type="number" min={1} ref={salaryInput} />
      <Button
        type="submit"
        onClick={() => {
          const newEmployee = {
            name: nameInput.current?.value || "",
            position: positionInput.current?.value || "",
            salary: +(salaryInput.current?.value || 0),
          };
          sendRequest(
            "Add",
            setListToRender,
            { "Content-Type": "application/json" },
            JSON.stringify(newEmployee)
          );
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default AddForm;
