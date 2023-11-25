import styled from "styled-components";
import AdminTable from "./AdminTable";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { useEffect } from "react";

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
  const [users, setUsers] = useState([]);

  //a way to cache the initial data
  const [originalUsers, setOriginalUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );

      const data = await response.json();
      const users = addCheckedFlag(data);
      setUsers(users);
      setOriginalUsers(users);
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
  }, []);

  function searchUsers(searchQuery) {
    const filteredUsers = originalUsers.filter(
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

  return (
    <StyledDashboard>
      <SearchBar searchUsers={searchUsers} />
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledTableContainer>
          <AdminTable users={users} setUsers={setUsers} />
        </StyledTableContainer>
      )}

      <Footer />
    </StyledDashboard>
  );
}
