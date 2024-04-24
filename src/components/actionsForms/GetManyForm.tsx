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
import styled from "@emotion/styled";

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
  const sortOptions = [
    // { value: "", label: "Choose sort", type: "default" },
    { value: "name", label: "Name asc", type: "1" },
    { value: "-name", label: "Name desc", type: "1" },
    { value: "position", label: "Position asc", type: "2" },
    { value: "-position", label: "Position desc", type: "2" },
    { value: "salary", label: "Salary asc", type: "3" },
    { value: "-salary", label: "Salary desc", type: "3" },
  ];

  const sortSelect = useRef<HTMLSelectElement>(null);
  const filtersOption = useRef<HTMLSelectElement>(null);
  const filtersAmount = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const positionInput = useRef<HTMLInputElement>(null);
  const salaryInput = useRef<HTMLInputElement>(null);

  const Option = styled.option`
    background: none !important;
    margin-bottom: 4px;
  `;

  const buildParams = (
    name: string,
    position: string,
    salary: number,
    filters: string,
    sort: string
  ) => {
    return (
      "?" +
      (name ? `name=${name}&` : "") +
      (position ? `position=${position}&` : "") +
      (salary ? `salary=${salary}&` : "") +
      (filters ? `filters=${filters}&` : "") +
      (sort ? `sort=${sort}` : "")
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
      <Select
        multiple
        ref={sortSelect}
        variant={"filled"}
        minH={"170px"}
        maxW={"80%"}
        onChange={(e) => {
          const selected = e.target?.selectedOptions;
          // if (selected.length < 2) return;
          // const lastSelected = selected[selected.length - 2];
          for (let i = 0; i < selected.length; i++) {
            selected[i].getAttribute("data-type");
            for (let j = i + 1; j < selected.length; j++) {
              if (
                selected[i].getAttribute("data-type") ===
                selected[j].getAttribute("data-type")
              ) {
                selected[i].selected = false;
              }
            }
          }
        }}
      >
        {sortOptions.map((option) => (
          <Option
            key={option.value}
            value={option.value}
            data-type={option.type}
          >
            {option.label}
          </Option>
        ))}
      </Select>

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
        <Input type="number" min={1} id="filters" ref={filtersAmount} />
      </Stack>
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" type="text" minLength={2} ref={nameInput} autoComplete="true" />
      <FormLabel htmlFor="position">Position</FormLabel>
      <Input id="position" type="text" minLength={2} ref={positionInput} />
      <FormLabel htmlFor="salary">Salary</FormLabel>
      <Input id="salary" type="number" min={1} mb={2} ref={salaryInput} />
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
          const sort = Array.from(sortSelect.current?.selectedOptions || [])
            .reduce((acc, option) => {
              return acc + option.value + ",";
            }, "")
            .slice(0, -1);
          const params = buildParams(name, position, salary, filters, sort);
          setRequestObject({ action: "Get many", params });
        }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default UpdateForm;
