import styled from "styled-components";
import TableRow from "./TableRow";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { PAGE_LEN } from "../utils/constants";

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

export default function AdminTable() {
  const { users, pageNum, setUsers, isChecked, setIsChecked } = useContext(AppContext);

  let filteredUsers = users.filter((user, i) => {
    const userStart = (pageNum - 1) * PAGE_LEN + 1;
    const userEnd = pageNum * PAGE_LEN;
    const filter = i + 1
    return filter >= userStart && filter <= userEnd;
  });

  function toggleCheckedUsers() {
    setIsChecked(check => !check)
    const updatedUsers = users.map((user, i) => {
      const userStart = (pageNum - 1) * PAGE_LEN + 1;
      const userEnd = pageNum * PAGE_LEN;
      const filter = i + 1;
      if (filter >= userStart && filter <= userEnd) {
        return { ...user, checked: !user.checked }
      } else return user
    })
    setUsers(updatedUsers);

  }


  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <input type="checkbox"
                onChange={toggleCheckedUsers}
                checked={isChecked}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => {
            return <TableRow key={user.id} user={user} />;
          })}
        </tbody>
      </StyledTable>
    </>
  );
}
