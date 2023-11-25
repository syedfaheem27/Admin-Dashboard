import styled from "styled-components";
import TableRow from "./TableRow";

// const mockData = Array.from({ length: 44 }, (_, i) => {
//   return {
//     name: `Faheem-${i}`,
//     email: `faheem${i}@test${i}.com${i}`,
//     role: "manager",
//     id: i,
//   };
// });
const StyledTable = styled.table`
  width: 100%;
  background-color: var(--color-gray-100);
  border-collapse: collapse;

  & th,
  & td {
    padding: 0.6rem 0.2rem;
    text-align: left;
  }
  & tr {
    border-bottom: 1px solid var(--color-gray-500);
  }
`;

export default function AdminTable({ users, setUsers }) {
  function toggleVisibleUsers() {
    const updatedUsers = users.map((user) => {
      return {
        ...user,
        checked: !user.checked,
      };
    });
    console.log(updatedUsers);
    setUsers(updatedUsers);
  }
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={toggleVisibleUsers} />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return <TableRow key={user.id} user={user} />;
          })}
        </tbody>
      </StyledTable>
    </>
  );
}
