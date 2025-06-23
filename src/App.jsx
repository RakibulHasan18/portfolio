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

      <div style={{ maxWidth: 900, margin: "auto", padding: 20, color: "white", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          🚀 Rakibul Hasan — Computer Science Graduate & Researcher
        </motion.h1>

        <motion.section custom={0} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:rakibul.hasan@g.bracu.ac.bd" style={{color:'#4FC3F7'}}>rakibul.hasan@g.bracu.ac.bd</a>, <a href="mailto:rakibul.hasan1810@gmail.com" style={{color:'#4FC3F7'}}>rakibul.hasan1810@gmail.com</a></p>
          <p>Phone: +8801645864560</p>
          <p>LinkedIn, GitHub: <a href="https://github.com/RakibulHasan18" target="_blank" rel="noreferrer" style={{color:'#4FC3F7'}}>github.com/RakibulHasan18</a></p>
          <p>Current Address: House #213, Arichpur, Tongi, Gazipur, Bangladesh</p>
        </motion.section>

        <motion.section custom={1} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Education</h2>
          <ul>
            <li><strong>MSc in Computer Science and Engineering</strong>, BRAC University, Dhaka (Jan 2024 – Present)  
              <br />Running 
              <br />Key Courses: Pattern Recognition, Distributed Systems, Symbolic Machine Learning, Advanced AI</li>
            <li><strong>BSc in Computer Science and Engineering</strong>, BRAC University, Dhaka (Jan 2018 – May 2022)  
              <br />CGPA: 3.93 (4.00 in all CSE courses)  
              <br />Key Courses: Cryptography & Cryptanalysis, Artificial Intelligence, Numerical Methods</li>
            <li><strong>HSC</strong>, Govt. Science College, Dhaka (2016) — GPA 5.00/5.00</li>
            <li><strong>SSC</strong>, Siraj Uddin Sarker Vidyaniketan & College (2014) — GPA 5.00/5.00</li>
          </ul>
        </motion.section>

        <motion.section custom={2} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Teaching & Work Experience</h2>
          <ul>
            <li><strong>Lecturer, Northern University Bangladesh</strong> (Fall 2023 – Present)  
              Teaching Data Structure, Intro to Computers, Mathematical Analysis; duties include exams, evaluation, committees</li>
            <li><strong>Lecturer (contractual), BRAC University</strong> (Fall 2022 – Spring 2023)  
              Teaching Python, Digital Logic, System Analysis, Cloud Computing</li>
            <li><strong>Student Tutor, BRAC University</strong> (Jan 2021 – May 2022)  
              Tutored Data Structures, checked lab scripts</li>
            <li><strong>SEO Strategist, Oniro IT Sector</strong> (Jan 2018 – Dec 2018)  
              Handled off-page SEO, website design, content management</li>
          </ul>
        </motion.section>

        <motion.section custom={3} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Academic Research</h2>
          <ol>
            <li><strong>Early Detection of Subjective Cognitive Decline...</strong>  
              Published in Journal of Biomedical Informatics  
              (Co-author with Simon Bin Akter et al.)</li>
            <li><strong>Improving Heart Disease Probability Prediction Sensitivity...</strong>  
              Published in Computer Methods and Programs in Biomedicine (Co-author)</li>
            <li><strong>BSc Research (BRAC University)</strong> — Data Security, Authentication, HER, AES, Cloud server  
              <a href="http://hdl.handle.net/10361/17536" target="_blank" rel="noreferrer" style={{color:'#4FC3F7'}}>View Thesis</a></li>
          </ol>
        </motion.section>

        <motion.section custom={4} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Projects</h2>
          <ul>
            <li><strong>Online Coach and Coaching Management Web App</strong> (Jan 2022 - May 2022)  
              Developed with Laravel framework</li>
            <li><strong>Football Team Management System</strong> (Spring 2020)  
              Built with PHP and MySQL</li>
            <li><strong>Bus Ticket Management System</strong> (Spring 2021)  
              Designed to manage tickets of various buses</li>
            <li><strong>Automatic Hand Sanitizer and Handwashing System</strong> (Fall 2021)  
              Arduino and sensors based project</li>
            <li><strong>Water Level Indicator</strong> (Fall 2019)  
              Basic digital logic gates project</li>
          </ul>
        </motion.section>

        <motion.section custom={5} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Research Knowledge:</strong> Data Security, Authentication, HER, AES, Cloud Server, Machine Learning, Neural Networks</li>
            <li><strong>Programming:</strong> Python, Java, C++, Matlab, SQL, Laravel</li>
            <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
            <li><strong>Languages:</strong> English, Bengali</li>
          </ul>
        </motion.section>

        <motion.section custom={6} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Certifications</h2>
          <ul>
            <li>Advanced Learning Algorithms (Coursera)</li>
            <li>Supervised Machine Learning: Regression and Classification (Coursera)</li>
            <li>Programming for Everybody (Python) (Coursera)</li>
            <li>Python Data Structures (Coursera)</li>
            <li>Introduction to HTML5 (Coursera)</li>
            <li>Introduction to Public Speaking (Coursera)</li>
            <li>Recitation and Articulation Activity (BRAC University)</li>
          </ul>
        </motion.section>

        <motion.section custom={7} initial="hidden" animate="visible" variants={containerVariants} style={{ marginBottom: 40 }}>
          <h2>Honors & Awards</h2>
          <ul>
            <li>BRAC Scholarship (100% scholarship during undergraduate)</li>
            <li>VC’s List: Summer 2019 - Spring 2022</li>
            <li>Dean’s List: Summer 2018</li>
            <li>Scholarship in Secondary School Certificate Exams (2-year stipend)</li>
            <li>Scholarship in Junior School Certificate Exams (2-year stipend)</li>
          </ul>
        </motion.section>
      </div>
    </>
  );
}
