import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

export function UserContext({ children }: Props) {
  const [data, setData] = useState<any>(null);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}

export const useUserData = () => useContext(AppContext);
