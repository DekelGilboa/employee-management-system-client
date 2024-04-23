import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useRef } from "react";
import { RequestObject } from "../../services/sendRequest";

interface Props {
  setRequestObject: Dispatch<SetStateAction<RequestObject>>;
}

const DeleteForm = ({ setRequestObject }: Props) => {
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
          setRequestObject({
            action: "Delete",
            id: employeeIdInput.current?.value,
          });
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default DeleteForm;
