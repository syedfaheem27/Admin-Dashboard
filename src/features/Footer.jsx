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
    //Guard - condition
    if (users.filter(user => user.checked).length === 0) return;

    //An array of id's that need to be deleted from cached users.
    //can't do so in an effect as in case of a user that will be 
    //deleted after performing a search. There can be any number of users
    //based on the search query and setting the cached users to the users in view
    //will not work
    const toBeDeleted = users.filter(user => user.checked).map(user => user.id);

    //Ensures that the view gets updated
    setUsers(prevUsers => prevUsers.filter(user => !user.checked));

    //Ensures that the cached users are updated after deletion
    setCachedUsers(users => users.filter(user => !toBeDeleted.includes(user.id)))

    //Unchecking the global checkbox after deletion
    setIsChecked(false)

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
