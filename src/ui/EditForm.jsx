import styled from "styled-components"
import Button from "./Button"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:1em;
    padding:2em 3em;
    background-color: var()(--color-gay-500);
    font-size: 1.15rem;
`
const StyledDiv = styled.div`
    display: flex;
    gap: 1em;
    justify-content: space-between;
    width: 100%;
`

const StyledLabel = styled.label`
    font-weight: 'bold';
`


const StyledInput = styled.input`
     padding: 0.5em 1.25em;
     background-color: var(--color-gray-200);
     border: none;
     border-radius: 4px;
     &:focus{
        border: none;
        outline: 1px solid #000000;
     }
`

function EditForm({ user, closeModal }) {
    const { setUsers, setCachedUsers } = useContext(AppContext)
    function handleEditUser(e) {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const role = formData.get('role');

        //validate input and use regex patterns to validate email

        const updatedUser = {
            name, email, role
        }

        //update cached users as after editing and then searching, they come back
        setUsers(users => users.map(prevUser => prevUser.id === user.id ? { ...user, ...updatedUser } : prevUser));
        setCachedUsers(users => users.map(prevUser => prevUser.id === user.id ? { ...user, ...updatedUser } : prevUser));
        closeModal()
    }
    return <StyledForm onSubmit={handleEditUser}>
        <StyledDiv>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput type="text" id='name' name="name" defaultValue={user.name} />
        </StyledDiv>

        <StyledDiv>
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput type="email" id='email' name="email" defaultValue={user.email} />
        </StyledDiv>

        <StyledDiv>
            <StyledLabel htmlFor="role">Role:</StyledLabel>
            <StyledInput type="text" id='role' name="role" defaultValue={user.role} />
        </StyledDiv>

        <Button background="var(--color-gray-700)" hoverbackground='var(--color-gray-600)'>Submit</Button>

    </StyledForm >
}


export default EditForm;