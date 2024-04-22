
const EmployeesList = () => {

    interface Employee {
        name: string;
        id: string;
        position: string;
        salary: number;
    }
    
    const fakeEmployees: Employee[] = [
        {
            name: 'John Doe',
            id: '1',
            position: 'Software Engineer',
            salary: 60000,
        },
        {
            name: 'Jane Smith',
            id: '2',
            position: 'Product Manager',
            salary: 80000,
        },
        {
            name: 'Mike Johnson',
            id: '3',
            position: 'Data Analyst',
            salary: 55000,
        },
        {
            name: 'Emily Brown',
            id: '4',
            position: 'UI/UX Designer',
            salary: 65000,
        },
        {
            name: 'David Lee',
            id: '5',
            position: 'Marketing Specialist',
            salary: 70000,
        },
    ];
  return (
    <ul>
        {
            fakeEmployees.map(({id, name, position, salary}) => (
                <li key={id}>{`id: ${id}, name: ${name}, position: ${position}, salary: ${salary}`}</li>
            ))
        }
    </ul>
  )
}

export default EmployeesList