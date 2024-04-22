import { Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

const DeleteForm = () => {
  return (
    <FormControl>
      <Heading as="h2" size="lg">
        Delete single employee
      </Heading>
      <FormLabel>{"Employee ID"}</FormLabel>
      <Input type="text" />
      <Button type="submit">Submit</Button>
    </FormControl>
  );
};

export default DeleteForm;
