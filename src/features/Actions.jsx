import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import Modal from "../ui/Modal";

const StyledActionContainer = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  & button {
    font-size: 1rem;
    cursor: pointer;
  }
  @media(min-width:380px){
    &{
      flex-direction: row;
    }
  }
`;

const Actions = ({ isEdit, setIsEdit, user, editUser }) => {
  function handleEdit() {
    editUser()
    setIsEdit(false)

  }
  return (
    <Modal>
      <StyledActionContainer>
        <button>
          {isEdit ? <FcCheckmark onClick={handleEdit} /> : <BiEdit onClick={() => setIsEdit(true)} />}
        </button>
        <Modal.Action opens="delete">
          <BiTrash />
        </Modal.Action>
        <Modal.Body user={user} />
      </StyledActionContainer>
    </Modal>
  );
};

export default Actions;
