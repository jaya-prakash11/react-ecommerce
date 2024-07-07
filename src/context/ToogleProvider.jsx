import { createContext, useState } from "react";

export const toogleContext = createContext();

function ToogleProvider({ children }) {
  const [toogle, setToogle] = useState(false);
  const [isSearchOpen, setISearchOpen] = useState(false);
  return (
    <toogleContext.Provider
      value={{ toogle, setToogle, isSearchOpen, setISearchOpen }}
    >
      {children}
    </toogleContext.Provider>
  );
}

export default ToogleProvider;
