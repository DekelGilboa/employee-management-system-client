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

const GetSingleForm = ({ setRequestObject }: Props) => {
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
          setRequestObject({
            action: "Get Single",
            id: employeeIdInput.current?.value,
          });
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default GetSingleForm;
