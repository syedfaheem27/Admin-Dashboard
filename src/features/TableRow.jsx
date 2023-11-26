import { useContext } from "react";
import Actions from "./Actions";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";

//use this when u check
const StyledTRow = styled.tr`
  background-color: ${(props) => (props.checked ? "#52525223" : "")};
`;

const TableRow = ({ user }) => {
  const { setUsers } = useContext(AppContext)

  function handleToggleCheck() {
    const updatedUser = { ...user, checked: !user.checked };
    setUsers(users => users.map(user => user.id === updatedUser.id ? updatedUser : user))
  }

  return (
    <StyledTRow checked={user.checked}>
      <td>
        <input
          type="checkbox"
          checked={user.checked}
          onChange={handleToggleCheck}

        />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <Actions />
      </td>
    </StyledTRow>
  );
};

export default TableRow;
