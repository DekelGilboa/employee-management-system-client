import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Employee } from "../EmployeesList";
import sendRequest from "../../utils/sendRequest";

interface Props {
  setListToRender: (list: Employee[]) => void;
}

const GetSingleForm = ({ setListToRender }: Props) => {
  const employeeIdInput = useRef<HTMLInputElement>(null);

  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Get single employee
      </Heading>
      <FormLabel htmlFor="employee ID">{"Employee ID"}</FormLabel>
      <Input type="text" id="employee ID" ref={employeeIdInput} />
      <Button
        type="submit"
        onClick={() => {
          sendRequest(
            "Get Single",
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

export default GetSingleForm;
