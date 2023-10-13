import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

const StyledActionContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & button {
    font-size: 1rem;
    cursor: pointer;
  }
`;

const Actions = () => {
  return (
    <>
      <StyledActionContainer>
        <button>
          <BiEdit />
        </button>
        <button>
          <BiTrash />
        </button>
      </StyledActionContainer>
    </>
  );
};

export default Actions;
