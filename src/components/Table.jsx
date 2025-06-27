const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Pname</th>
        <th>Pprice</th>
        <th>Pdescription</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableRow = ({ row }) => {
  return (
    <tbody>
      <tr>
        <td>{row.Pname}</td>
        <td>{row.Pprice}</td>
        <td>{row.Pdescription}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default function Table({ data }) {
  return (
    <table>
      <TableHeader />
      {data.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
    </table>
  );
}
