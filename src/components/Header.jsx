import { ItemNavbar } from "./ItemNavbar";
import { NavBar } from "./Navbar";

export const Header = () => {
  return (
    <header>
      <h1>My Proyect React</h1>
      <NavBar>
        <ItemNavbar itemName="Home" />
        <ItemNavbar itemName="AboutMe" />
        <ItemNavbar itemName="Profile" />
        <ItemNavbar itemName="Experience" />
      </NavBar>
    </header>
  );
};
