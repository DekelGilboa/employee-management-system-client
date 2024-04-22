import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const UpdateForm = () => {
  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Get many employees
      </Heading>
      <FormLabel>sort</FormLabel>
      <Input type="text" />
      <FormLabel>filters</FormLabel>
      <Input type="text" />
      <FormLabel>name</FormLabel>
      <Input type="text" />
      <FormLabel>position</FormLabel>
      <Input type="text" />
      <FormLabel>salary</FormLabel>
      <Input type="number" />
      <Button type="submit">Submit</Button>
    </FormControl>
  );
};

export default UpdateForm;
