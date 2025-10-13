import {
  FaCode,
  FaLaptop,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRust,
  FaSass,
} from "react-icons/fa6";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import MugModelContainer from "./mug/MugModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFastapi } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    icon: <FaLaptop />,
    title: "Web Development",
    counter: 20,
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "Application Development",
    counter: 5,
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "Scripting",
    counter: 10,
  },
];

const skills = [
  {
    id: 1,
    icon: <FaSass />,
  },
  {
    id: 2,
    icon: <RiTailwindCssFill />,
  },
  {
    id: 3,
    icon: <BiLogoTypescript />,
  },
  {
    id: 4,
    icon: <FaReact />,
  },
  {
    id: 5,
    icon: <SiExpress />,
  },
  {
    id: 6,
    icon: <FaNodeJs />,
  },
  {
    id: 7,
    icon: <SiFastapi />,
  },
  {
    id: 8,
    icon: <FaPython />,
  },
  {
    id: 9,
    icon: <FaRust />,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref} id="services">
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">{service.icon}</div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="skills">
          {skills.map((skill) => {
            return (
              <div
                className="flex flex-col justify-center items-start gap-2"
                key={skill.id}
              >
                <div
                  className="bg-blue-500/10 text-xl rounded-full"
                  style={{ padding: "10px" }}
                >
                  {skill.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
