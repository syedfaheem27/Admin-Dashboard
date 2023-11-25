import styled from "styled-components";
import Button from "../ui/Button";
import Pagination from "./Pagination";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  const { users, setUsers } = useContext(AppContext);

  function handleUserDelete() {
    const updatedUsers = users.filter((user) => !user.checked);

    setUsers(updatedUsers);
  }

  return (
    <StyledFooter>
      <Button onClick={handleUserDelete}>Delete selected</Button>
      <Pagination />
    </StyledFooter>
  );
}
