import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
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

const EmployeesList = ({ employees }: Props) => {
  const list = employees || [];
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption color={"gray"}>
          List of employees that return as response from the server
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Employee ID</Th>
            <Th>Name</Th>
            <Th>Position</Th>
            <Th isNumeric>Salary</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map(({ _id, name, position, salary }) => (
            <Tr key={_id}>
              <Td>{_id}</Td>
              <Td>{name}</Td>
              <Td>{position}</Td>
              <Td isNumeric>{salary}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesList;
