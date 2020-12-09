import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

export function MapContext({ children }: Props) {
  const [selectedCountry, setSelectedCountry] = useState<any>("Toshkent");

  return (
    <AppContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </AppContext.Provider>
  );
}

export const useMap = () => useContext(AppContext);
