import { useState } from "react";
import Actions from "./Actions";
import styled from "styled-components";
import { useEffect } from "react";

const StyledTRow = styled.tr`
  background-color: ${(props) => (props.checked ? "#52525223" : "")};
`;

const TableRow = ({ user }) => {
  const [userState, setUserState] = useState([]);
  useEffect(() => {
    setUserState(user);
  }, [user]);

  return (
    <StyledTRow checked={userState.checked}>
      <td>
        <input
          type="checkbox"
          checked={userState?.checked ?? false}
          onChange={() =>
            setUserState((prevUser) => {
              return { ...prevUser, checked: !prevUser.checked };
            })
          }
        />
      </td>
      <td>{userState.name}</td>
      <td>{userState.email}</td>
      <td>{userState.role}</td>
      <td>
        <Actions />
      </td>
    </StyledTRow>
  );
};

export default TableRow;
