import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "He brings ideas to life with clean, efficient code.",
            1000,
            "Every project he touches becomes smarter and more elegant.",
            1000,
            "He’s not just a developer — he’s a builder of the future.",
            1000,
            "Innovation is second nature to him.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/avatar.png" alt="my github avatar image" />
    </motion.div>
  );
};

export default Speech;
