import React from "react";
import { BsGithub, BsTwitter, BsPersonCheck } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FiVoicemail } from "react-icons/fi";
import { Divider } from "@mui/material";
import styles from "../styles/Socials.module.css";
import { Link } from "react-router-dom";

type Props = {};

const Socials = (props: Props) => {
  const socialItems = [
    {
      icon: BsGithub,
      name: "Github",
      link: "hello",
    },
    {
      icon: TfiLinkedin,
      name: "LinkedIn",
      link: "hello",
    },
    {
      icon: BsTwitter,
      name: "Twitter",
      link: "helllo",
    },
  ];
  return (
    <section>
      <div className={styles.container}>
        {socialItems.map(({ icon, name, link }) => (
          <Link to={link} key={name} className={styles.social}>
            {React.createElement(icon, { className: styles.social_icons })}
            Follow on {name}
          </Link>
        ))}
        <Divider sx={{ mb: 2 }} />
        <div className={styles.social}>
          <FiVoicemail className={styles.social_icons} />
          bajerijustice@gmail.com
        </div>
      </div>
    </section>
  );
};

export default Socials;
