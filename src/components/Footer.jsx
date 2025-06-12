import { NavBar } from "./Navbar";
import { ItemNavbar } from "./ItemNavbar";

export const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} My React Project. All rights reserved.
      </p>
      <NavBar>
        <ItemNavbar itemName="Privacy Policy" />
        <ItemNavbar itemName="Terms of Service" />
        <ItemNavbar itemName="Contact Us" />
      </NavBar>
    </footer>
  );
};
