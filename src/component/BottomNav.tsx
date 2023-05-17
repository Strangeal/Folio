import { Link } from "react-router-dom";
import styles from "../styles/BottomNav.module.css";
import { Box } from "@mui/material";

const BottomNav = () => {
  return (
    <Box component="footer" sx={{ py: 4, px: { xs: 3, sm: 10 } }}>
      <div className={styles.nav}>
        <Link to="/about" className={styles.nav_link}>
          About
        </Link>
        <Link to="/projects" className={styles.nav_link}>
          Projects
        </Link>
      </div>
      <div className={styles.right}>
        <p>© 2023 Justice Bajeri. All rights reserved.</p>
      </div>
    </Box>
  );
};

export default BottomNav;
