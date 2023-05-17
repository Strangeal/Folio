import { Avatar, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../styles/Projects.module.css";
import { ImNewTab } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className={styles.expe_container}>
      <div className={styles.intro}>
        <h2 className={styles.header}>
          Things I've made trying to put my dent in the universe.
        </h2>
        <p className={styles.text}>
          I've worked on tons of little projects over the years but these are
          the ones that I'm most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      {projects.map((each) => (
        <Grid
          className={styles.grid}
          container
          spacing={3}
          key={each.project_name}
          sx={{ mb: 5, borderRadius: 2 }}
        >
          <Grid item xs={12} md={5} className={`${styles.expe_img} g_item`}>
            <Avatar
              sx={{ borderRadius: 0, width: "100%", height: "100%" }}
              src={each.project_image}
              alt={each.project_name}
            />
          </Grid>
          <Grid
            item
            sx={{ m: "auto" }}
            xs={12}
            md={7}
            className={`${styles.expe_content_card} g_item`}
          >
            <div className={styles.expe_content}>
              <p className={styles.date}>{each.project_date}</p>
              <h4 className={styles.title}>{each.project_name}</h4>
              <p className={styles.desc}>{each.project_description}</p>
              <p className={styles.tech}>{each.project_tech}</p>
              <Link to={each.project_live_link} className={styles.expe_link}>
                <ImNewTab />
              </Link>
              <Link to={each.project_link} className={styles.expe_link}>
                <FiGithub />
              </Link>
            </div>
          </Grid>
        </Grid>
      ))}
    </section>
  );
};

export default Projects;
