import { useState } from "react";
import { AppContext } from "./AppContext";

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  return (
    <AppContext.Provider
      value={{
        users,
        pageNum,
        setPageNum,
        setUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
