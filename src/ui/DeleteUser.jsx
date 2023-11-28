import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const StyledDiv = styled.div`
padding: 2em;
text-align: center;
`

const StyledHeading = styled.h4`
font-size: 1.1rem;
margin-bottom: 1.5em;
letter-spacing: 0.04em;
    
`
const StyledUser = styled.span`
    color: #dc2626;
`
function DeleteUser({ user }) {
    const { setUsers, setCachedUsers } = useContext(AppContext);

    function handleDeleteUser() {
        setUsers(users => users.filter(usr => usr.id !== user.id));
        setCachedUsers(users => users.filter(usr => usr.id !== user.id));
    }

    return <StyledDiv>
        <StyledHeading>
            You are about to delete  <StyledUser>{user.name} </StyledUser>
            who is {user.role === 'admin' ? 'an' : 'a'}<StyledUser> {user.role}</StyledUser>
        </StyledHeading>
        <Button background="#dc2626" hoverbackground="#ef4444" onClick={handleDeleteUser}>
            Confirm
        </Button>
    </StyledDiv>
}


export default DeleteUser;