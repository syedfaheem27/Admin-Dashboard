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
  const { users, setUsers, pageNum, setPageNum, setIsChecked, setCachedUsers } = useContext(AppContext)

  function handleDeleteUsers() {
    // const deleteId = users[0].id;
    //handle multiple user deletions - in that case update the cached users
    const toBeDeleted = users.map(user => user.id);
    setUsers(prevUsers => prevUsers.filter(user => !user.checked));
    setCachedUsers(users => users.filter(user => !toBeDeleted.includes(user.id)))
    setIsChecked(false)
    console.log(toBeDeleted)


  }

  //Ensures that the page number changes if the total pages are less than 
  //the current page number which can happen if we delete all users on a certain page
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
