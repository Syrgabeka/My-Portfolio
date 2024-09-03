import "./scss/myImg.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { animationImage } from "../../lib/helpers/profile";
import myImg from "../../../assets/img/myPhoto1.jpg";

const MyImg = () => {
  const [isTiltActive, setIsTiltActive] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsTiltActive(false);
    }
  }, []);

  return (
    <div className="my__img-container">
      <Tilt
        tiltEnable={isTiltActive}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1}
      >
        <motion.img
          src={myImg}
          className="shape"
          custom={1}
          variants={animationImage}
          initial="hidden"
          animate="visible"
        ></motion.img>
      </Tilt>
    </div>
  );
};

export default MyImg;
