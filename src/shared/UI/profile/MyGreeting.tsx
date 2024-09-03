import { motion } from "framer-motion";
import "./scss/myGreeting.scss";
import { animationIcons, animationText } from "../../lib/helpers/profile";
import { Typewriter } from "react-simple-typewriter";
import { LinkedinIcon, TelegramIcon, WhatsApp } from "../../../assets/svgs";

const MyGreeting = () => {
  return (
    <div className="my__greeting-container">
      <motion.h1
        className="my__name"
        custom={1}
        variants={animationText}
        initial="hidden"
        animate="visible"
      >
        Hi, I'm Syrgabek
      </motion.h1>
      <motion.h1
        className="my__experience"
        custom={2}
        variants={animationText}
        initial="hidden"
        animate="visible"
      >
        I'm a&nbsp;
        <Typewriter words={["Front-End Developer"]} typeSpeed={130} />
      </motion.h1>
      <motion.p
        className="my__self"
        custom={3}
        variants={animationText}
        initial="hidden"
        animate="visible"
      >
        <Typewriter
          words={[
            " As an experienced Front-end developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles showcasing my Front-end skills.",
          ]}
          typeSpeed={16}
        />
      </motion.p>
      <div className="my__github">
        <motion.a
          className="icon"
          custom={5}
          href="https://t.me/Sur123pog"
          target="_blank"
          aria-label="Telegram"
          variants={animationIcons}
          initial="hidden"
          animate="visible"
        >
          <img style={{ width: "40px" }} src={TelegramIcon} />
        </motion.a>
        <motion.a
          className="icon"
          custom={6}
          href="https://wa.me/996501071101"
          target="_blank"
          aria-label="WhatsApp"
          variants={animationIcons}
          initial="hidden"
          animate="visible"
        >
          <img style={{ width: "40px" }} src={WhatsApp} />
        </motion.a>
        <motion.a
          className="icon"
          custom={7}
          href="https://www.linkedin.com/feed/"
          target="_blank"
          aria-label="Linkedin"
          variants={animationIcons}
          initial="hidden"
          animate="visible"
        >
          <img style={{ width: "40px" }} src={LinkedinIcon} />
        </motion.a>
        <motion.a
          className="icon"
          custom={8}
          href="https://github.com/Syrgabeka"
          target="_blank"
          aria-label="GitHub"
          variants={animationIcons}
          initial="hidden"
          animate="visible"
        >
          <img style={{ width: "40px" }} src="src/assets/svgs/github.svg" />
        </motion.a>
      </div>
    </div>
  );
};

export default MyGreeting;
