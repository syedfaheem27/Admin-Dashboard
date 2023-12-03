import styled from "styled-components"

const StyledHeader = styled.header`
    padding: 3em 4em;
    display: flex;
    justify-content:center;
    
    & h1{
        font-size: clamp(1.4rem, 3vw, 2.6rem); 
    }
`



export default function UsersNotFound() {
    return (
        <StyledHeader>
            <h1>No users found 😢</h1>
        </StyledHeader>
    )
}
