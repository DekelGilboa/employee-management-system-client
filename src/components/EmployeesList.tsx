import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  styled,
  Show,
} from "@chakra-ui/react";

export interface Employee {
  name: string;
  _id: string;
  position: string;
  salary: number;
}

interface Props {
  employees: Employee[];
}

const CustomTD = styled(Td, {
  baseStyle: {
    fontSize: { base: "0.5rem !important", sm: "0.6 !important", md: "1em !important" },
    p: { base: "2px !important", md: "1em !important" },
    w: { base: "60px !important", md: "1em !important" },
  },
});
const CustomTH = styled(Th, {
  baseStyle: {
    fontSize: { base: "0.6rem !important", md: "1em !important" },
    p: { base: "2px !important", md: "1em !important" },
    w: { base: "60px !important", md: "1em !important" },
  },
});

const EmployeesList = ({ employees }: Props) => {
  const list = employees;
  if (!list.length) {
    return <p>No employees to show</p>;
  }
  return (
    <TableContainer>
      <Table variant="simple" size={{ base: "sm", md: "md" }}>
        <TableCaption color={"gray"}>
          List of employees that return as response from the server
        </TableCaption>
        <Thead>
          <Tr>
            <CustomTH>Employee ID</CustomTH>
            <CustomTH>Name</CustomTH>
            <CustomTH>Position</CustomTH>
            <CustomTH isNumeric>Salary</CustomTH>
          </Tr>
        </Thead>
        <Tbody>
          {list.map(({ _id, name, position, salary }) => (
            <Tr key={_id}>
              <Show above="md">
                <CustomTD>{_id}</CustomTD>
                <CustomTD>{name}</CustomTD>
                <CustomTD>{position}</CustomTD>
              </Show>
              <Show below="767px">
                <CustomTD >{_id}</CustomTD>
                <CustomTD >
                  {name.substring(0, 17) + (name.length > 17 ? "..." : "")}
                </CustomTD>
                <CustomTD>
                  {position.substring(0, 17) +
                    (position.length > 17 ? "..." : "")}
                </CustomTD>
              </Show>
              <CustomTD isNumeric>{salary}</CustomTD>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesList;
