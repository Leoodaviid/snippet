"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { FaBorderAll, FaTrash } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";

interface ConfigContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
}

interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: React.ReactNode;
}

const ContextProvider = createContext<ConfigContextType>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
});

export default function ConfigProvider({ children }: { children: ReactNode }) {
  const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
    {
      id: 1,
      name: "All Snippets",
      isSelected: true,
      icons: <FaBorderAll size={15} />,
    },
    {
      id: 2,
      name: "Favorites",
      isSelected: false,
      icons: <MdOutlineFavorite size={15} />,
    },
    {
      id: 3,
      name: "Trash",
      isSelected: false,
      icons: <FaTrash size={15} />,
    },
  ]);

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useConfig = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};
