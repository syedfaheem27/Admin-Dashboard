import styled from "styled-components";

const StyledSearch = styled.input`
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--color-gray-400);

  &::placeholder {
    color: var(--color-gray-500);
  }
`;

function SearchBar({ searchUsers }) {
  return (
    <StyledSearch
      type="text"
      placeholder="Search by name,email or role"
      onChange={(e) => searchUsers(e.target.value)}
    />
  );
}

export default SearchBar;
