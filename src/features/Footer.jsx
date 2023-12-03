import styled from "styled-components";
import Pagination from "./Pagination";
import Modal from "../ui/Modal";
import DeleteUsers from "./DeleteUsers";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  display: inline-block;
  padding: 0.4em 1.2em;


`

export default function Footer() {
  return (
    <Modal>
      <StyledFooter>
        <Modal.Action opens="deleteAll" customclass="delete-selected" >
          <StyledSpan>
            Delete Selected
          </StyledSpan>
        </Modal.Action>
        <Modal.Window name="deleteAll">
          <DeleteUsers />
        </Modal.Window>
        <Pagination />
      </StyledFooter>
    </Modal>
  );
}
