import styled from "styled-components";
import {
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PAGE_LEN } from "../utils/constants";

const StyledPagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledPagButton = styled.button`
  /* background: var(--color-gray-300); */
  background-color: ${(props) =>
    props.active === "true" ? "#737373" : "#d4d4d4"};
  color: ${(props) => (props.active == "true" ? "white" : "black")};
  width: 1.5rem;
  padding: 0.3rem;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

const Pagination = () => {
  const { users, pageNum, setPageNum } = useContext(AppContext);

  const totalCount = Math.ceil(users.length / PAGE_LEN);
  const arr = Array.from({ length: totalCount }, (_, i) => i + 1);

  function previousPageHandler() {
    if (pageNum === 1) {
      setPageNum(pageNum);
    } else {
      setPageNum((num) => num - 1);
    }
  }
  return (
    <StyledPagContainer>
      <StyledPagButton onClick={() => setPageNum(1)} disabled={pageNum === 1}>
        <HiChevronDoubleLeft />
      </StyledPagButton>

      <StyledPagButton onClick={previousPageHandler} disabled={pageNum === 1}>
        <HiChevronLeft />
      </StyledPagButton>

      {arr.map((a) => (
        <StyledPagButton
          key={a}
          active={pageNum === a ? "true" : "false"}
          onClick={() => setPageNum(a)}
        >
          <span>{a}</span>
        </StyledPagButton>
      ))}

      <StyledPagButton disabled={pageNum === totalCount}>
        <HiChevronRight />
      </StyledPagButton>

      <StyledPagButton
        onClick={() => setPageNum(totalCount)}
        disabled={pageNum === totalCount}
      >
        <HiChevronDoubleRight />
      </StyledPagButton>
    </StyledPagContainer>
  );
};

export default Pagination;
