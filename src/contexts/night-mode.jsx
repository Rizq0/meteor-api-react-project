import { createContext, useState } from "react";

export const NightModeContext = createContext();

export const NightModeProvider = ({ children }) => {
  const [isLightMode, setLightMode] = useState(false);

  return (
    <NightModeContext.Provider value={{ isLightMode, setLightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
