import styled from "styled-components"
import Button from "../ui/Button"
import { useEffect } from "react";
import { PAGE_LEN } from "../utils/constants";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ModalContext } from "../context/ModalContext";

const StyledContainer = styled.div`
    padding: 2em 3em;
    display: flex;
    flex-direction: column;
    gap:2em;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media(min-width: 908px){
        &{
            align-items: flex-start;
            text-align: left;
        }
    }

`
export default function DeleteUsers() {
    const { users, setUsers, pageNum, setPageNum, setIsChecked, setCachedUsers } = useContext(AppContext);
    const { setOpens } = useContext(ModalContext)

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

        //Closing the modal
        setOpens(null)

    }

    //Ensures that the page number changes if the total pages are less than 
    //the current page number which can happen if we delete all users on a certain page
    useEffect(() => {
        if (Math.ceil(users.length / PAGE_LEN) === pageNum || users.length === 0) return;

        if (Math.ceil(users.length / PAGE_LEN) < pageNum) setPageNum(Math.ceil(users.length / PAGE_LEN))


    }, [users, pageNum, setPageNum])
    return (
        <StyledContainer>
            <h1>
                Are you sure, you want to delete the selected users?
            </h1>
            <Button background="var(--color-danger-200)" hoverbackground="var(--color-danger-100)" onClick={handleDeleteUsers} >
                Confirm
            </Button>

        </StyledContainer>
    )
}
