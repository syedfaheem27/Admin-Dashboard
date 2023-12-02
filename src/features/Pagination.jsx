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
import { useEffect } from "react";

const StyledPagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const StyledPagButton = styled.button`
  background-color: ${(props) =>
    props.$active ? "var(--color-blue-400)" : "var(--color-blue-500)"};
  color: ${(props) => (props.$active ? "black" : "#fff")};
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
    background-color: var(--color-blue-600);
    color: #fff;
  }
`;

const Pagination = () => {

  const { users, setUsers, pageNum, setPageNum, setIsChecked } = useContext(AppContext);

  const totalPages = Math.ceil(users.length / PAGE_LEN);

  const arr = Array.from({ length: totalPages }, (_, i) => i + 1);

  function previousPageHandler() {
    if (pageNum === 1) {
      setPageNum(pageNum);
    } else {
      setPageNum((num) => num - 1);
    }
  }

  function nextPageHandler() {
    if (pageNum === totalPages) {
      setPageNum(pageNum);
    } else {
      setPageNum(num => num + 1)
    }
  }


  //Ensuring that once we change pages, the users that are marked for deletion
  //are unmarked and also the global checkbox is unchecked
  useEffect(() => {
    setIsChecked(false)
    setUsers(prevUsers => prevUsers.map(user => {
      return {
        ...user,
        checked: false
      }
    }))
  }, [pageNum, setIsChecked, setUsers])
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
          $active={pageNum === a}
          onClick={() => setPageNum(a)}
        >
          <span>{a}</span>
        </StyledPagButton>
      ))}

      <StyledPagButton disabled={pageNum === totalPages}
        onClick={nextPageHandler}
      >
        <HiChevronRight />
      </StyledPagButton>

      <StyledPagButton
        onClick={() => setPageNum(totalPages)}
        disabled={pageNum === totalPages}
      >
        <HiChevronDoubleRight />
      </StyledPagButton>
    </StyledPagContainer>
  );
};

export default Pagination;
