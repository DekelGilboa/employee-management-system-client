import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { RequestObject } from "../../services/sendRequest";
import { Dispatch, SetStateAction, useRef } from "react";

interface Props {
  setRequestObject: Dispatch<SetStateAction<RequestObject>>;
}

const UpdateForm = ({ setRequestObject }: Props) => {
  const filterOptions = [
    { value: "", label: "Choose filter" },
    { value: ">", label: "Greater than" },
    { value: ">=", label: "Greater than or equal" },
    { value: "<", label: "Less than" },
    { value: "<=", label: "Less than or equal" },
    { value: "!=", label: "Different than" },
  ];

  // const sortInput = useRef<HTMLInputElement>(null);
  const filtersOption = useRef<HTMLSelectElement>(null);
  const filtersAmount = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const positionInput = useRef<HTMLInputElement>(null);
  const salaryInput = useRef<HTMLInputElement>(null);

  const buildParams = (
    name: string,
    position: string,
    salary: number,
    filters: string
  ) => {
    return (
      "?" +
      (name ? `name=${name}&` : "") +
      (position ? `position=${position}&` : "") +
      (salary ? `salary=${salary}&` : "") +
      (filters ? `filters=${filters}` : "")
    );
  };
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
      <FormLabel htmlFor="filters">Numeric Filter</FormLabel>
      <Stack
        direction={{ base: "column", sm: "row" }}
        align={"center"}
        spacing={3}
      >
        <Heading as={"h4"} size={"md"}>
          Salary
        </Heading>
        <Select ref={filtersOption}>
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Input type="number" id="filters" ref={filtersAmount} />
      </Stack>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="text" ref={nameInput} autoComplete="true"/>
      <FormLabel htmlFor="position">Position</FormLabel>
      <Input id="position" type="text" ref={positionInput} />
      <FormLabel htmlFor="salary">Salary</FormLabel>
      <Input id="salary" type="number" mb={2} ref={salaryInput} />
      <Button
        type="submit"
        onClick={() => {
          const name = nameInput.current?.value || "";
          const position = positionInput.current?.value || "";
          const salary = +(salaryInput.current?.value || 0);
          let filters = "";
          if (
            filtersOption.current?.value &&
            filtersAmount.current?.value &&
            !salary
          ) {
            filters =
              "salary" +
              filtersOption.current?.value +
              filtersAmount.current?.value;
          }
          const params = buildParams(name, position, salary, filters);
          setRequestObject({ action: "Get many", params });
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default UpdateForm;
