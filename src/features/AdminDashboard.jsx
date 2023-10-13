import styled from "styled-components";
import AdminTable from "./AdminTable";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const StyledDashboard = styled.div`
  max-width: 95%;
  margin: 0.2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem;
`;

const StyledTableContainer = styled.div`
  width: 100%;
`;

export default function AdminDashboard() {
  return (
    <StyledDashboard>
      <SearchBar />
      <StyledTableContainer>
        <AdminTable />
      </StyledTableContainer>
      <Footer />
    </StyledDashboard>
  );
}
