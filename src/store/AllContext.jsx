import { createContext, useContext, useState } from "react";

const AllContext = createContext();

export function TrailProvider({ children }) {
  const [data, setData] = useState("");
  return (
    <AllContext.Provider value={{ data, setData }}>
      {children}
    </AllContext.Provider>
  );
}

export function useAllContext() {
  return useContext(AllContext);
}