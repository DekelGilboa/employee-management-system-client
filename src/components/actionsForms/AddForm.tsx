import { Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

const AddForm = () => {
  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Add employee
      </Heading>
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

export default AddForm;
