import React from "react";
import styles from "../styles/Home.module.css";
import Sidebar from "../component/Sidebar";
import { Link, Route, Routes } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className={styles.main_body}>
      <h1>Welcome to the home page</h1>
      <Link to="/">Home</Link>
      <Link to="experience">Expe</Link>
      <Link to="/">Home</Link>
    </section>
  );
};

export default Home;
