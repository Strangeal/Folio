import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />

      <main>
        <Grid container component="section">
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={8}>
            <Outlet />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Layout;
