//using the compound component pattern to create the modal

import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";

import { ModalContext } from "../context/ModalContext";
import { AppContext } from "../context/AppContext";


const StyledOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(95, 95, 95, 0.4);
    z-index: 1;
`

const StyledModal = styled.div`
    position: fixed;
    padding: 3em 2em;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    z-index: 3;
    border: 3px solid red;
`




const Modal = ({ children }) => {
    const [opens, setOpens] = useState(null);

    return <ModalContext.Provider value={{ opens, setOpens }}>
        {
            children
        }
    </ModalContext.Provider>
}


const Action = ({ children, opens }) => {
    const { setOpens } = useContext(ModalContext);

    return <button onClick={() => setOpens(opens)}>
        {children}
    </button>
}


const Body = ({ user }) => {
    const { opens, setOpens } = useContext(ModalContext);
    const { setUsers } = useContext(AppContext);

    if (!opens) return null;

    return <StyledOverlay onClick={() => setOpens(null)}>
        <StyledModal onClick={e => e.stopPropagation()}>
            {
                opens === "edit" && <form onSubmit={e => {
                    e.preventDefault()
                    const form = e.target;
                    const formData = new FormData(form);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const role = formData.get('role');

                    const updatedUser = {
                        name, email, role
                    }

                    setUsers(users => users.map(prevUser => prevUser.id === user.id ? { ...user, ...updatedUser } : prevUser));
                    setOpens(null)

                }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={user.name} />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" defaultValue={user.email} />
                    <br />
                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" name="role" defaultValue={user.role} />
                    <br />
                    <button>Submit</button>
                </form>
            }
            {
                opens === 'delete' && <h1>Delete{user.name}</h1>
            }
        </StyledModal>
    </StyledOverlay >
}


Modal.Action = Action;
Modal.Body = Body;


export default Modal;