//using the compound component pattern to create the modal

import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";

import { ModalContext } from "../context/ModalContext";
import EditForm from "./EditForm";
import DeleteUser from "./DeleteUser";


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
    transform: translateY(-50%) translateX(-50%);
    z-index: 3;
    background-color: rgba(115, 115, 115,0.8);
    border-radius: 8px;
    

    @media (max-width: 380px){
        &{
            padding: 1em 0;
        }
    }
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

    if (!opens) return null;

    return <StyledOverlay onClick={() => setOpens(null)}>
        <StyledModal onClick={e => e.stopPropagation()}>
            {
                opens === "edit" && <EditForm user={user}
                    closeModal={() => setOpens(null)} />
            }

            {
                opens === 'delete' && <DeleteUser user={user} />
            }
        </StyledModal>
    </StyledOverlay >
}


Modal.Action = Action;
Modal.Body = Body;


export default Modal;