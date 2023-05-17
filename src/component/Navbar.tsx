import { Avatar, IconButton } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import { RiMoonClearFill, RiMoonClearLine } from "react-icons/ri";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { mode, toggleColorMode } = useThemeContext();
  return (
    <header className={styles.nav}>
      <Link to="/">
        <Avatar
          alt="developer profile"
          src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1679052423/photo_2023-03-17_04.24.56_kjjtgy.jpg"
          sx={{ width: 34, height: 34, borderRadius: 18 }}
        />
      </Link>
      <div className={styles.nav_items}>
        <Link className={styles.nav_link} to="/about">
          About
        </Link>
        <Link className={styles.nav_link} to="/projects">
          Projects
        </Link>
        <Link className={styles.nav_link} to="/dictionary">
          Dictionary
        </Link>
      </div>
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? (
          <RiMoonClearLine className={styles.theme_icon} />
        ) : (
          <RiMoonClearFill />
        )}
      </IconButton>
    </header>
  );
};

export default Navbar;
