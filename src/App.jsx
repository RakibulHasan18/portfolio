import React from "react";
import { motion } from "framer-motion";

const starsCount = 100;

function StarField() {
  const stars = Array.from({ length: starsCount });

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "#000010",
      overflow: "hidden",
      zIndex: -1,
    }}>
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 0.5;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background: "white",
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              opacity: 0.8,
              filter: "drop-shadow(0 0 6px white)"
            }}
            animate={{ opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, delay: delay }}
          />
        );
      })}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 }
  }),
};

export default function Portfolio() {
  return (
    <>
      <StarField />

      <div style={{ maxWidth: 800, margin: "auto", padding: 20, color: "white", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          🚀 Rakibul Hasan — Space Explorer & Developer
        </motion.h1>

        <motion.section
          custom={0}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ marginBottom: 30 }}
        >
          <h2>About Me</h2>
          <p>
            I’m a Computer Science graduate passionate about software development, space exploration, and cognitive research.
          </p>
        </motion.section>

        <motion.section
          custom={1}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ marginBottom: 30 }}
        >
          <h2>Skills</h2>
          <ul>
            <li>C, C++, Python, JavaScript</li>
            <li>React, Tailwind CSS, Vite</li>
            <li>Git, GitHub, Agile Development</li>
            <li>Research & Publication</li>
          </ul>
        </motion.section>

        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ marginBottom: 30 }}
        >
          <h2>Projects</h2>
          <ul>
            <li>
              Portfolio Website - <a href="https://RakibulHasan18.github.io/portfolio" style={{color:'#4FC3F7'}} target="_blank" rel="noreferrer">Live Demo</a>
            </li>
            <li>
              Skin Lesion Detection Research Paper - Published in Journal (link to be added)
            </li>
          </ul>
        </motion.section>

        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ marginBottom: 30 }}
        >
          <h2>Contact</h2>
          <p>Email: <a href="mailto:emonbit6@gmail.com" style={{color:'#4FC3F7'}}>emonbit6@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/RakibulHasan18" target="_blank" rel="noreferrer" style={{color:'#4FC3F7'}}>RakibulHasan18</a></p>
        </motion.section>
      </div>
    </>
  );
}
