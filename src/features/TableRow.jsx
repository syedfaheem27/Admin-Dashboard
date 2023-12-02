import { useContext } from "react";
import Actions from "./Actions";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";

//use this when u check
const StyledTRow = styled.tr`
  background-color: ${(props) => (props.checked ? "#52525223" : "")};
`;

const StyledInp = styled.input`
  width: max(90px,70%);
  font-size: 0.95rem;
  padding: 0.1em 0.3em; 
`


const TableRow = ({ user }) => {
  const { setUsers, setCachedUsers } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);


  function editUser() {
    const updatedUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      role: roleRef.current.value,
    }

    setUsers(currUsers => currUsers.map(usr => usr.id === user.id ? { ...usr, ...updatedUser } : usr))
    setCachedUsers(currUsers => currUsers.map(usr => usr.id === user.id ? { ...usr, ...updatedUser } : usr))


  }

  function handleToggleCheck() {
    const updatedUser = { ...user, checked: !user.checked };
    setUsers(users => users.map(user => user.id === updatedUser.id ? updatedUser : user))
  }

  return (
    <>
      <StyledTRow checked={user.checked}>
        <td>
          <input
            type="checkbox"
            checked={user.checked}
            onChange={handleToggleCheck}

          />
        </td>
        <td>{isEdit ? <StyledInp ref={nameRef} type="text" defaultValue={user.name} /> : user.name}</td>
        <td>{isEdit ? <StyledInp ref={emailRef} type="email" defaultValue={user.email} /> : user.email}</td>
        <td>
          {isEdit ? <StyledInp ref={roleRef} type="text" defaultValue={user.role} /> : user.role}
        </td>
        <td>
          <Actions user={user} isEdit={isEdit} setIsEdit={setIsEdit} editUser={editUser} />
        </td>
      </StyledTRow>
    </>
  );
};

export default TableRow;
