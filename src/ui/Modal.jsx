//using the compound component pattern to create the modal

import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";

import { ModalContext } from "../context/ModalContext";
import { createPortal } from "react-dom";


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


const Action = ({ children, opens, customclass = "" }) => {
    const { setOpens } = useContext(ModalContext);

    return <button className={customclass} onClick={() => setOpens(opens)}>
        {children}
    </button>
}


const Window = ({ children, name }) => {
    //opens prop makes this modal body reusable
    const { opens, setOpens } = useContext(ModalContext);

    if (opens !== name) return null;

    return createPortal(<StyledOverlay onClick={() => setOpens(null)}>
        <StyledModal onClick={e => e.stopPropagation()}>
            {children}
        </StyledModal>
    </StyledOverlay >, document.body)
}


Modal.Action = Action;
Modal.Window = Window;


export default Modal;