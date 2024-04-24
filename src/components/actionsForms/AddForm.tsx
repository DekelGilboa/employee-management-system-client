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

const AddForm = ({ setRequestObject }: Props) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const positionInput = useRef<HTMLInputElement>(null);
  const salaryInput = useRef<HTMLInputElement>(null);

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
        Add employee
      </Heading>
      <FormLabel htmlFor="name">name</FormLabel>
      <Input id="name" type="text" name="name" ref={nameInput} minLength={2} />
      <FormLabel htmlFor="position">position</FormLabel>
      <Input id="position" type="text" ref={positionInput} minLength={2} />
      <FormLabel htmlFor="salary">salary</FormLabel>
      <Input id="salary" type="number" min={1} ref={salaryInput} mb={2} />
      <Button
        type="submit"
        onClick={() => {
          const newEmployee = {
            name: nameInput.current?.value || "",
            position: positionInput.current?.value || "",
            salary: +(salaryInput.current?.value || 0),
          };
          setRequestObject({
            action: "Add",
            body: JSON.stringify(newEmployee),
          });
        }}
      >
        Submit 
      </Button>
    </FormControl>
  );
};

export default AddForm;
