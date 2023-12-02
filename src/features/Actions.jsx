import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
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

const Actions = ({ user }) => {
  // const { setUsers } = useContext(AppContext)
  // function handleDelete() {
  //   setUsers(users => users.filter(us => us.id !== user.id))
  // }


  return (
    <Modal>
      <StyledActionContainer>
        <Modal.Action opens="edit">
          <BiEdit />
        </Modal.Action>
        <Modal.Action opens="delete" >
          <BiTrash />
        </Modal.Action>
        <Modal.Body user={user} />
      </StyledActionContainer>
    </Modal>
  );
};

export default Actions;
