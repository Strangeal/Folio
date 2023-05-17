import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/Dictionary.module.css";
import { Avatar, Box } from "@mui/material";

const Dictionary = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en";

  const wordFetch = async (word: string) => {
    try {
      const res = await axios.get(`${endpoint}/${word}`);
      const result = res.data;
      if (result.length > 0) {
        const { meanings } = result[0];

        if (meanings) {
          const newData = meanings.map((mean: any) => {
            const { definitions } = mean;
            return definitions;
          });
          setData(newData);
          setError("");
        } else {
          setData([]);
          setError("Word not Found");
        }
      }
    } catch (e) {
      console.log(e);
      setError("Word not Found");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    wordFetch(search);
  };

  return (
    <Box
      component="section"
      sx={{ width: { md: "60%" } }}
      className={styles.dic_section}
    >
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          aria-label="word search"
          placeholder="enter your word"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div>
        {data && data.length > 0
          ? data.map((definitions: any[], index: number) => (
              <ul key={index}>
                {definitions
                  .slice(0, 1)
                  .map((definition: any, index: number) => (
                    <li key={index} className={styles.list}>
                      {definition.definition}
                    </li>
                  ))}
              </ul>
            ))
          : error && <h5>{error}</h5>}
      </div>

      <div className={styles.reason}>
        <div className={styles.content}>
          <p>
            Hey there! 🙋‍♀️ Welcome to my portfolio! You might be curious about
            the search bar you see here. It's an interactive feature that allows
            you to look up any word you want right on this page. I believe it
            adds a dynamic and engaging element to the portfolio experience.
          </p>

          <p className={styles.text2}>
            By using the search bar, you can explore the meanings, definitions,
            and other related information of different words. 📚🔍 It's a handy
            tool for language enthusiasts, learners, or anyone curious about
            expanding their vocabulary.
          </p>
          <p>
            While you're here, feel free to say hi or drop me a message. 💬👋
            I'd love to connect and hear from you. So go ahead, enter a word,
            and let's embark on a journey of discovery together! Enjoy your time
            exploring my portfolio! ✨😄
          </p>
        </div>
        <div className={styles.author}>
          <Avatar
            alt="developer profile"
            src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1679052423/photo_2023-03-17_04.24.56_kjjtgy.jpg"
            sx={{ width: 89, height: 89, borderRadius: 18 }}
          />
          <div className={styles.author_text}>
            <h4>Justice Bajeri</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Dictionary;
