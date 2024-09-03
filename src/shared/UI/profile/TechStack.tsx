import { useState } from "react";
import { motion } from "framer-motion";
import "./scss/techStack.scss";
import { tech_icons } from "../../../assets/tech-icons";
import { animationIcons, animationText } from "../../lib/helpers/profile";

const TechStack = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="tech-stack-container">
      <motion.p
        className="tech-stack"
        custom={1}
        variants={animationText}
        initial="hidden"
        animate="visible"
      >
        Tech Stack
      </motion.p>
      <div className="logos">
        {tech_icons.map((item, index) => (
          <motion.div
            className="icon-container"
            variants={animationIcons}
            key={index + 1}
            custom={index + 1}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => setActiveTooltip(item.name)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <img className="icon" src={item.icon} alt={item.name} />
            {activeTooltip === item.name && (
              <div className="name-icon">{item.name}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
