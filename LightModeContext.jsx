import React, { createContext, useState } from "react";

const LightModeContext = createContext();

export function LightModeProvider({ children }) {
  const [lightMode, setLightmode] = useState(false);
  return (
    <LightModeContext.Provider value={{ lightMode, setLightmode }}>
      {children}
    </LightModeContext.Provider>
  );
}

export default LightModeContext;

