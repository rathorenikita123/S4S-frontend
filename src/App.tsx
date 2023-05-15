import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import SideNavbar from "./components/SideNavbar";
import UserGrid from "./components/UserGrid";

function App() {
  const [menu, setMenu] = React.useState<boolean>(false);

  return (
    <div className="flex items-center justify-evenly">
      <SideNavbar menu={menu} setMenu={setMenu} />
      {menu && <UserGrid />}

      <AddUser />
    </div>
  );
}

export default App;
