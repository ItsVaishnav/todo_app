import { createContext, useContext, useState } from "react";

const AllContext = createContext();

export function AllContextProvider({ children }) {
  const [error, setError] = useState({error: "" , errorDesc: ""});
  return (
    <AllContext.Provider value={{error, setError}}>
      {children}
    </AllContext.Provider>
  );
}

export function useAllContext() {
  return useContext(AllContext);
}