import { createContext, useContext, useState } from "react";
import { Monster } from "../types/monsters";

const MonsterContext = createContext<{
  currentMonster: Monster | null;
  selectMonster: (monster: Monster | null) => void;
} | null>(null);

type UserProviderProps = {
  children: React.ReactNode;
};

export const MonsterProvider = ({ children }: UserProviderProps) => {
  const [currentMonster, setCurrentMonster] = useState<Monster | null>(null);
  const selectMonster = (monster: Monster | null) => setCurrentMonster(monster);

  return (
    <MonsterContext.Provider value={{ currentMonster, selectMonster }}>
      {children}
    </MonsterContext.Provider>
  );
};

export const useMonster = () => useContext(MonsterContext);
