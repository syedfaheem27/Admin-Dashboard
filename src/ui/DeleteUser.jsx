import styled from "styled-components";
import Button from "./Button";

const StyledDiv = styled.div`
padding: 2em;
text-align: center;
`

const StyledHeading = styled.h3`
margin-bottom: 1.5em;
    
`
const StyledUser = styled.span`
    color: var(--color-gray-100);
`
function DeleteUser({ user, onDelete }) {
    return <StyledDiv>
        <StyledHeading>
            You are about to delete  <StyledUser>{user.name} </StyledUser>
            who is a <StyledUser>{user.role}</StyledUser>
        </StyledHeading>
        <Button background="#dc2626" hoverbackground="#ef4444" onClick={onDelete}>
            Confirm
        </Button>
    </StyledDiv>
}


export default DeleteUser;