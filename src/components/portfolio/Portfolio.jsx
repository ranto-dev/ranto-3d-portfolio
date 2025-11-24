import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/portfolio1.png",
    title: "Full Stack Blog Application",
    desc: "I developed the corporate blog platform for SK Yitro Consulting, a digital services company aiming to establish thought leadership and improve its search engine optimization (SEO). The project encompassed the creation of a complete web application, covering the user interface, content management, and backend infrastructure",
    link: "/",
  },
  {
    id: 2,
    img: "/portfolio2.png",
    title: "Corporate Showcase Website",
    desc: "I designed and developed the corporate showcase website for SK Yitro Consulting, a digital services company aiming to strengthen its thought leadership and enhance its online presence. This project involved building a complete web application, from crafting an intuitive user interface to managing content and implementing a robust backend infrastructure.",
    link: "/",
  },
  {
    id: 3,
    img: "/portfolio3.png",
    title: "Quiz Application",
    desc: "Madako'IS is an interactive web application designed to promote Malagasy culture in a fun and engaging way. By combining playful elements with educational content, it stimulates curiosity and learning while offering a responsive, professional, and visually appealing interface. The platform also highlights the creative potential of Malagasy developers, showcasing their ability to craft innovative digital experiences.",
    link: "https://github.com/ranto-dev/MadaKo-IS",
  },
  {
    id: 4,
    img: "/portfolio4.png",
    title: "Fun Talker bot",
    desc: "Fun Talker is an engaging web application featuring an AI-powered humor chatbot capable of generating original jokes and playful responses in real time. Designed to entertain and lighten conversations, the app blends natural language processing with a smooth, modern interface to deliver a fun, interactive experience. This project showcases my ability to build creative, user-friendly applications that combine AI intelligence with dynamic web development.",
    link: "/",
  },
  {
    id: 5,
    img: "/portfolio5.png",
    title: "rexapp: cli tool",
    desc: "RexApp is a fast and developer-friendly command-line tool built in Rust to streamline the creation of Express.js projects. It automates boilerplate setup, generates clean project structures, and accelerates development by handling repetitive tasks with precision and speed. Designed for efficiency and productivity, RexApp highlights my expertise in Rust, CLI tooling, and backend project scaffolding.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
