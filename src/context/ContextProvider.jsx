import { useState } from "react";
import { AppContext } from "./AppContext";

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isChecked, setIsChecked] = useState(false)
  return (
    <AppContext.Provider
      value={{
        users,
        pageNum,
        setPageNum,
        setUsers,
        isChecked,
        setIsChecked
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
