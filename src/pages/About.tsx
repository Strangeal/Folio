import { Box, Grid } from "@mui/material";
import styles from "../styles/About.module.css";
import Socials from "../component/Socials";

const About = () => {
  return (
    <Grid container component="section">
      <Grid item xs={11} md={6}>
        <h2 className={styles.header}>
          Greetings from the Gold Coast! I'm Justice.
        </h2>
        <p>
          My name is Justice and I am passionate about crafting robust and
          scalable web applications that solve complex problems. With a year of
          experience working with a diverse range of technologies, I have honed
          my skills in both front-end and back-end development, enabling me to
          build end-to-end solutions.
        </p>
        <p className={styles.desc}>
          I have been fortunate to work as a part-time code reviewer for the
          past six months. In this role, I am responsible for reviewing and
          providing guidance to students on utilizing coding best practices.
        </p>
        <p>
          My ability to communicate effectively, work collaboratively and think
          critically, has enabled me to consistently deliver high-quality code
          in projects. With a keen eye for details and a commitment to staying
          up-to-date with emerging trends and technologies, I am always looking
          for new opportunities to challenge myself and make a positive impact.
        </p>
        <p className={styles.desc}>
          This days I'm focused on learning and developing my programming skills
          on python programming. In my free time, I enjoy watching movies,
          listening to music, and writing tutorials.
        </p>
      </Grid>
      <Grid item xs={11} md={6}>
        <Box className={styles.img_container} sx={{ mt: { xs: 5 } }}>
          <img
            className={styles.img}
            src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1679052423/photo_2023-03-17_04.24.56_kjjtgy.jpg"
            width="100%"
            alt="profile"
          />
        </Box>
        <Socials />
      </Grid>
    </Grid>
  );
};

export default About;
