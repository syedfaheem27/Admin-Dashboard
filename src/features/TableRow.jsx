import Actions from "./Actions";

const TableRow = ({ user }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <Actions />
      </td>
    </tr>
  );
};

export default TableRow;
