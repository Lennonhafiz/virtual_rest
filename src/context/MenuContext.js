import { createContext, useState } from "react";
// import { AuthContext } from "./AuthContext";

const MenuContext = createContext();

const MenuProvider = MenuContext.Provider;

const MenuContextProvider = ({children}) => {
  const [menus, setMenus] = useState([]);
  const [isPending, setisPending] = useState(false);
  const [error, setError] = useState(null);

  // const { user } = useContext(AuthContext);

  async function getALLMenus() {
    setisPending(true);
    await fetch("/api/menus", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenus(data);
      })
      .catch((err) => {
        setError(err);
      });
    setisPending(false);
  }

  return (
    <MenuProvider value={{ isPending, menus, error, getALLMenus }}>
      {children}
    </MenuProvider>
  );
};

export { MenuContext, MenuContextProvider };
