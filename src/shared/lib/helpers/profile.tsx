export const animationText = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, else: "easyOut", duration: 0.5 },
  }),
};

export const animationIcons = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, else: "easyOut", duration: 0.4 },
  }),
};

export const animationImage = {
  hidden: {
    y: -70,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      y: {
        delay: custom * 0.2,
        ease: "easeOut",
        duration: 0.2,
      },
      opacity: {
        delay: custom * 0.3,
        ease: "easeOut",
        duration: 1,
      },
    },
  }),
};
