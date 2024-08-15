"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { FaBorderAll, FaTrash } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: React.ReactNode;
}

interface ConfigContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  openSideBarObject: {
    openSidebar: boolean;
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const ContextProvider = createContext<ConfigContextType>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
  openSideBarObject: {
    openSidebar: false,
    setOpenSidebar: () => {},
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

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        openSideBarObject: { openSidebar, setOpenSidebar },
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
