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
    <FormControl
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
    w={"95%"}
    maxW={"500px"}
    gap={1}>
      <Heading as="h2" size="lg" mb={2}>
        Delete single employee
      </Heading>
      <FormLabel htmlFor="employee ID">{"Employee ID"}</FormLabel>
      <Input id="employee ID" type="text" ref={employeeIdInput} mb={2}/>
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
