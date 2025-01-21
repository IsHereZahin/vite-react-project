const DataTable = (props) => {
    const { data } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((person, index) => (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
