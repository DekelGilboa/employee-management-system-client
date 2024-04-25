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

const UpdateForm = ({ setRequestObject }: Props) => {
  const updateEmployee = () => {
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
    const idToUpdate: string = employeeIdInput.current?.value || "invalidID";
    setRequestObject({
      action: "Update",
      id: idToUpdate,
      body: JSON.stringify(detailsToUpdate),
    });
  };

  // Refs for the input fields
  const employeeIdInput = useRef<HTMLInputElement>(null);
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
        Update employee
      </Heading>
      <FormLabel htmlFor="employee ID">Employee ID</FormLabel>
      <Input
        type="text"
        minLength={5}
        required
        id="employee ID"
        ref={employeeIdInput}
      />
      <FormLabel htmlFor="name">name</FormLabel>
      <Input type="text" minLength={2} id="name" ref={nameInput} />
      <FormLabel htmlFor="position">position</FormLabel>
      <Input type="text" id="position" minLength={2} ref={positionInput} />
      <FormLabel htmlFor="salary">salary</FormLabel>
      <Input type="number" min={1} id="salary" ref={salaryInput} mb={2} />
      <Button type="submit" onClick={updateEmployee}>
        Submit
      </Button>
    </FormControl>
  );
};

export default UpdateForm;
