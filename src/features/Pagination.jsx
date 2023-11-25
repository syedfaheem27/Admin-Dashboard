import styled from "styled-components";
import {
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

const StyledPagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledPagButton = styled.button`
  background: var(--color-gray-300);
  width: 1.5rem;
  padding: 0.3rem;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

const Pagination = () => {
  const totalCount = 4;
  const arr = Array.from({ length: totalCount }, (_, i) => i + 1);
  return (
    <StyledPagContainer>
      <StyledPagButton>
        <HiChevronDoubleLeft />
      </StyledPagButton>
      <StyledPagButton>
        <HiChevronLeft />
      </StyledPagButton>
      {arr.map((a) => (
        <StyledPagButton key={a}>
          <span>{a}</span>
        </StyledPagButton>
      ))}
      <StyledPagButton>
        <HiChevronRight />
      </StyledPagButton>
      <StyledPagButton>
        <HiChevronDoubleRight />
      </StyledPagButton>
    </StyledPagContainer>
  );
};

export default Pagination;
