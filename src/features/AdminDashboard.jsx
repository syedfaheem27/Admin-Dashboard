import styled from "styled-components";
import AdminTable from "./AdminTable";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Spinner from "../ui/Spinner";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { API } from "../utils/constants";

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
  const { setUsers } = useContext(AppContext);

  //a way to cache the original data
  const [initialUsers, setInitialUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  function searchUsers(searchQuery) {
    const filteredUsers = initialUsers.filter(
      (user) =>
        user.name.startsWith(searchQuery.toLowerCase()) ||
        user.name.startsWith(searchQuery.toUpperCase()) ||
        user.email.startsWith(searchQuery.toLowerCase()) ||
        user.email.startsWith(searchQuery.toUpperCase()) ||
        user.role.startsWith(searchQuery.toLowerCase()) ||
        user.role.startsWith(searchQuery.toUpperCase())
    );

    setUsers(filteredUsers);
  }

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(API);

      const data = await response.json();
      const users = addCheckedFlag(data);
      setUsers(users);
      setInitialUsers(users);
    }

    function addCheckedFlag(data) {
      return data.map((el) => {
        return { checked: false, ...el };
      });
    }

    try {
      setIsLoading(true);
      getUsers();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [setUsers]);

  return (
    <StyledDashboard>
      <SearchBar searchUsers={searchUsers} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <StyledTableContainer>
            <AdminTable />
          </StyledTableContainer>
          <Footer />
        </>
      )}
    </StyledDashboard>
  );
}
