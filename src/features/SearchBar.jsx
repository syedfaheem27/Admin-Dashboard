import { useState } from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--color-gray-400);

  &::placeholder {
    color: var(--color-gray-500);
  }
`;

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <StyledSearch
      type="text"
      placeholder="Search by name,role or email"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
}

export default SearchBar;
