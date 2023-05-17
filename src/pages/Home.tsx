import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { Box, Divider, Grid } from "@mui/material";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRubyonrails,
  SiReact,
  SiRedux,
  SiMui,
  SiPostgresql,
  SiAdobephotoshop,
} from "react-icons/si";
import React from "react";
import { projects } from "../data";

const Home = () => {
  const stacks = [
    {
      name: "HTML",
      icon: AiFillHtml5,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "JS",
      icon: SiJavascript,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "react",
      icon: SiReact,
    },
    {
      name: "redux",
      icon: SiRedux,
    },
    {
      name: "Mui",
      icon: SiMui,
    },
    {
      name: "RubyOnRails",
      icon: SiRubyonrails,
    },
    {
      name: "postgresql",
      icon: SiPostgresql,
    },
    {
      name: "github",
      icon: AiFillGithub,
    },
    {
      name: "Git",
      icon: BsGit,
    },
    {
      name: "Photoshop",
      icon: SiAdobephotoshop,
    },
  ];

  return (
    <section className={styles.main_body}>
      <div className={styles.greet}>
        <h1>Full stack web developer.</h1>
        <p>
          I'm a software developer specialized in building exceptinal web
          applications for businesses. I like to work collaboratively with like
          minded developers, and always looking for better ways to improve my
          skills. Currently learning python, so far, am enjoying the flow. 😊
        </p>
      </div>

      <Grid container className={styles.more} sx={{ my: 3 }} spacing={5}>
        <Grid item xs={12} md={6}>
          <div className={styles.work_container}>
            <div className={styles.work_header}>
              <h5>Public Github Repositories.</h5>
              <p>
                I have included this section to show what I have been trying to
                build in public. Here you can find some of my public
                repositories.
              </p>
            </div>
            {projects.slice(0, 2).map((project, index) => (
              <div key={index} className={styles.work_status}>
                <p className={styles.repo_date}>{project.project_date}</p>
                <h5 className={styles.repo_title}>{project.project_name}</h5>
                <p className={styles.repo_desc}>
                  {project.project_description}
                </p>
                <Link to={project.project_link} className={styles.repo_visits}>
                  View Repository
                </Link>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <Divider sx={{ mb: 3, fontSize: 18 }}>Skills</Divider>
          </div>
          <div className={styles.front}>
            {stacks.map(({ name, icon }) => (
              <Box sx={{ fontSize: { xs: "4rem" } }} key={name}>
                {React.createElement(icon, { className: "stack_icon" })}
              </Box>
            ))}
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
