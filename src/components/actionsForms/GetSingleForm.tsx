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
  // const getData = async (id: string | undefined) => {
  //   if (!id) return;
  //   fetch("http://localhost:3000/api/v1/employees/" + id)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const list = data.data instanceof Array ? data.data : [];
  //       setListToRender(list);
  //     });
  // };

  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Get single employee
      </Heading>
      <FormLabel>{"Employee ID"}</FormLabel>
      <Input type="text" ref={employeeIdInput} />
      <Button
        type="submit"
        onClick={() => {
          // getData(employeeIdInput.current?.value);
          sendRequest("Get Single", setListToRender, undefined, undefined, employeeIdInput.current?.value)
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default GetSingleForm;
