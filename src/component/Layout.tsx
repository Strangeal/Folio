import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import BottomNav from "./BottomNav";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Grid container component="section">
          <Grid
            item
            xs={12}
            sm={8}
            md={10}
            lg={10}
            sx={{ mx: { xs: "2rem", sm: "auto" } }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </main>
      <BottomNav />
    </>
  );
};

export default Layout;
