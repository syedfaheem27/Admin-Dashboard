import styled from "styled-components";
import Button from "../ui/Button";
import Pagination from "./Pagination";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Button>Delete selected</Button>
      <Pagination />
    </StyledFooter>
  );
}
