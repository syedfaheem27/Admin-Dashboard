import { useContext } from "react";
import Actions from "./Actions";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const StyledTRow = styled.tr`
  background-color: ${(props) => (props.checked ? "#52525223" : "")};
`;

const TableRow = ({ user }) => {
  const { setUsers } = useContext(AppContext);

  function toggleCheckedFlag() {
    const updatedUser = {
      ...user,
      checked: !user.checked,
    };

    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  }
  return (
    <StyledTRow checked={user.checked}>
      <td>
        <input
          type="checkbox"
          checked={user?.checked ?? false}
          onChange={toggleCheckedFlag}
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
