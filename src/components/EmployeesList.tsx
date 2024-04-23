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
    <ul>
      {list.map(({ _id, name, position, salary }) => (
        <li
          key={_id}
        >{`id: ${_id}, name: ${name}, position: ${position}, salary: ${salary}`}</li>
      ))}
    </ul>
  );
};

export default EmployeesList;
