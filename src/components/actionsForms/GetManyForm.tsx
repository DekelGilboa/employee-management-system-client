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
      <FormLabel htmlFor="sort" >Sort</FormLabel>
      <Input id="sort" type="text" />
      <FormLabel htmlFor="filters">Filters</FormLabel>
      <Input id="filters" type="text" />
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="text" />
      <FormLabel htmlFor="position" >Position</FormLabel>
      <Input id="position" type="text" />
      <FormLabel htmlFor="salary" >Salary</FormLabel>
      <Input id="salary" type="number" />
      <Button type="submit">Submit</Button>
    </FormControl>
  );
};

export default UpdateForm;
