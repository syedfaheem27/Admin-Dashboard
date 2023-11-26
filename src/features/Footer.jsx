import styled from "styled-components";
import Button from "../ui/Button";
import Pagination from "./Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { PAGE_LEN } from "../utils/constants";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  const { users, setUsers, pageNum, setPageNum, setIsChecked } = useContext(AppContext)

  function handleDeleteUsers() {
    setUsers(prevUsers => prevUsers.filter(user => !user.checked))
    setIsChecked(false)

  }

  useEffect(() => {
    if (Math.ceil(users.length / PAGE_LEN) === pageNum || users.length === 0) return;

    if (Math.ceil(users.length / PAGE_LEN) < pageNum) setPageNum(Math.ceil(users.length / PAGE_LEN))


  }, [users, pageNum, setPageNum])


  return (
    <StyledFooter>
      <Button onClick={handleDeleteUsers}>Delete selected</Button>
      <Pagination />
    </StyledFooter>
  );
}
