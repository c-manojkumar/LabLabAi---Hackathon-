import detectSpam from "../spamDetector";
import { useState } from "react";

import '../styles/Home.module.css'
// import '../styles/globals.css'
import styles from '../styles/Home.module.css'
const Home = () => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    const result = await detectSpam(message);
    setAnswer(result);
  };

  return (
    <div className={styles.main}>
      <h1>Spam-Tracker</h1>
      <form onSubmit={handleSubmit} className={styles.pass} >
        <label htmlFor="message">Message: </label>
        <input type="text" id="message" name="message" className={styles.padding}/>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <br/><br/>
      <div>
        
        Result: {answer}
      </div>
    </div>
  );
};

export default Home;