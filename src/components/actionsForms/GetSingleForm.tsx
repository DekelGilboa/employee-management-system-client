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
  const getSingleEmployee = () => {
    setRequestObject({
      action: "Get single",
      id: employeeIdInput.current?.value || "invalidID",
    });
  };

  // ref for the input field
  const employeeIdInput = useRef<HTMLInputElement>(null);

  return (
    <FormControl
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      w={"95%"}
      maxW={"500px"}
      gap={1}
    >
      <Heading as="h2" size="lg" mb={2}>
        Get single employee
      </Heading>
      <FormLabel htmlFor="employee ID">{"Employee ID"}</FormLabel>
      <Input
        type="text"
        id="employee ID"
        ref={employeeIdInput}
        mb={2}
        minLength={5}
        required
      />
      <Button type="submit" onClick={getSingleEmployee}>
        Submit
      </Button>
    </FormControl>
  );
};
export default GetSingleForm;
