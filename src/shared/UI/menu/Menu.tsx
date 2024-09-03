import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import "./scss/menuStyle.scss";
import BurgerMenu from "./BurgerMenu";

const menu = [
  { id: "home", name: "Home", offset: 1000 },
  { id: "aboutMe", name: "About", offset: -10 },
  { id: "projects", name: "Projects", offset: 0 },
  { id: "", name: "", offset: 0 },
];

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1000);
  const [activeElementId, setActiveElementId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const currentElement = menu.find(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;
          const elementBottom = elementTop + element.clientHeight;
          return scrollTop >= elementTop && scrollTop < elementBottom;
        }
        return false;
      });

      if (currentElement) {
        setActiveElementId(currentElement.id);
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animationText = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3, ease: "easeOut", duration: 0.5 },
    }),
  };

  const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div></div>
        <div>
          {isMobileView ? (
            <BurgerMenu
              isMenuOpen={isMenuOpen}
              toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
              data={menu}
              scrollToElement={scrollToElement}
            />
          ) : (
            <motion.div
              custom={1}
              variants={animationText}
              initial="hidden"
              animate="visible"
              className="menu-items"
            >
              {menu.map(({ id, name, offset }) => (
                <Button
                  key={id}
                  onClick={() => scrollToElement(id, offset)}
                  className={id === activeElementId ? "active" : ""}
                >
                  {name}
                </Button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
