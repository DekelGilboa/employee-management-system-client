import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { RequestObject } from "../../services/sendRequest";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setRequestObject: Dispatch<SetStateAction<RequestObject>>;
}

const UpdateForm = ({ setRequestObject }: Props) => {
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
        Get many employees
      </Heading>
      <FormLabel htmlFor="sort">Sort</FormLabel>
      <Input id="sort" type="text" />
      <FormLabel htmlFor="filters">Filters</FormLabel>
      <Input id="filters" type="text" />
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="text" />
      <FormLabel htmlFor="position">Position</FormLabel>
      <Input id="position" type="text" />
      <FormLabel htmlFor="salary">Salary</FormLabel>
      <Input id="salary" type="number" mb={2} />
      <Button
        type="submit"
        onClick={() => {
          setRequestObject({ action: "Get many" });
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default UpdateForm;
