'use client';

import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import ContactBar from '@/components/ContactBar';
import styles from './page.module.css';
import { Cpu, Globe, Database, Award, Layers, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const projects = [
    {
      title: "Smart Waste Management Systems",
      description: "IoT-based monitoring with ultrasonic and gas sensors for automated waste management.",
      tags: ["Arduino", "ESP8266", "Blynk", "IoT"],
      image: "/project1.png",
      details: [
        "Developed an IoT-based smart waste monitoring system using Arduino Uno and ESP8266.",
        "Integrated ultrasonic sensor for waste level detection and IR sensor for automatic lid control.",
        "Implemented MQ-3 gas sensor for hazardous gas monitoring.",
        "Transmitted real-time data to the Blynk IoT application.",
        "Enabled automated alerts for recycling facilities."
      ]
    },
    {
      title: "IoT-Based Robotic Waste Collector & Segregator",
      description: "Autonomous robot with wet/dry segregation and cloud data logging.",
      tags: ["Arduino", "ThingSpeak", "L293D", "Robotics"],
      image: "/project2.png",
      details: [
        "Designed an autonomous waste collection robot using Arduino Uno.",
        "Controlled motors and conveyor system using L293D motor driver.",
        "Implemented wet and dry waste segregation using IR and rain drop sensors.",
        "Integrated ESP8266 for cloud data upload to ThingSpeak using UART communication protocol.",
        "Enabled automated waste collection alerts for recycling facilities."
      ]
    },
    {
      title: "Smart Health Monitoring Watch",
      description: "Wearable device for real-time heart rate and SpO2 tracking.",
      tags: ["MAX3010x", "MPU6050", "OLED", "Wearable"],
      image: "/project3.png",
      details: [
        "Developed a wearable health monitoring device for real-time vital tracking using Arduino Uno.",
        "Used MAX3010x sensor for heart rate (BPM) and SpO₂ measurement.",
        "Integrated MPU6050 for motion and step count tracking.",
        "Displayed sensor data on an I2C OLED display using I2C communication protocol.",
        "Designed for continuous health monitoring of elderly and critically ill patients."
      ]
    },
    {
      title: "Smart Room Temperature Monitoring",
      description: "Home automation system with real-time Blynk alerts and AC control.",
      tags: ["ESP32", "DHT11", "Blynk", "Automation"],
      image: "/project1.png",
      details: [
        "Designed a home automation system using Arduino Uno, ESP32, and DHT11.",
        "Implemented UART communication between Arduino and ESP32.",
        "Sent temperature data to the Blynk app with real-time alerts.",
        "Automated buzzer alerts and air-conditioner control based on temperature threshold."
      ]
    }
  ];

  const skillGroups = [
    { name: "Embedded", skills: ["ATmega328P", "STM32", "ARM LPC", "8051", "PIC16F"], icon: <Cpu /> },
    { name: "IoT & Wireless", skills: ["ESP8266/32", "Raspberry Pi", "UART", "I2C", "SPI"], icon: <Globe /> },
    { name: "Programming", skills: ["Embedded C", "Python", "Core Java"], icon: <Layers /> },
    { name: "Tools & Simulation", skills: ["Arduino IDE", "Keil v4/v5", "STM32CUBE", "Proteus", "LT Spice"], icon: <Database /> }
  ];

  const locations = ["Chennai", "Madurai", "Thirunelveli", "Coimbatore", "Bangalore", "Thiruvananthapuram", "Mysore"];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero} id="about">
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Hi, I'm</motion.h2>
          <motion.h1 
            className={styles.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Abinaya V
          </motion.h1>
          <motion.h3 
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            EMBEDDED AND IOT ENGINEER
          </motion.h3>
          <motion.p 
            className={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Passionate about building intelligent hardware systems. Graduate from <strong>Amrita College of Engineering and Technology</strong>.
            Actively seeking opportunities to innovate in Embedded product development.
          </motion.p>
          
          <motion.div 
            className={styles.locationSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className={styles.locationTitle}>
              <MapPin size={18} className={styles.locationIcon} />
              <span>Preferred Locations:</span>
            </div>
            <div className={styles.locationBadges}>
              {locations.map(loc => (
                <span key={loc} className={styles.locationBadge}>{loc}</span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.heroBtns}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className={styles.section} id="skills">
        <motion.h2 className={styles.sectionHeading} {...fadeInUp}>Technical <span className="gradient-text">Mastery</span></motion.h2>
        <motion.div 
          className={styles.skillsGrid}
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, i) => (
            <motion.div key={i} className={`${styles.skillCard} glass-card`} variants={fadeInUp}>
              <div className={styles.skillIcon}>{group.icon}</div>
              <h3>{group.name}</h3>
              <div className={styles.skillTags}>
                {group.skills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <motion.h2 className={styles.sectionHeading} {...fadeInUp}>Featured <span className="gradient-text">Projects</span></motion.h2>
        <motion.p className={styles.sectionSub} {...fadeInUp}>Click on any project to see detailed overview and images.</motion.p>
        <div className={styles.projectsGrid}>
          {projects.map((proj, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
              <ProjectCard {...proj} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience / Internships */}
      <section className={styles.section}>
        <motion.h2 className={styles.sectionHeading} {...fadeInUp}>Professional <span className="gradient-text">Journey</span></motion.h2>
        <div className={styles.timeline}>
          {[
            { title: "Internet of Things Intern", loc: "Acutro Technologies Pvt Ltd, Trivandrum | Jul 2022" },
            { title: "Machine Learning Intern", loc: "MATT Engineering Equipments, Nagercoil | Jan 2023" },
            { title: "Robotics Intern", loc: "MATT Engineering Equipments, Nagercoil | Jul 2023" }
          ].map((item, i) => (
            <motion.div key={i} className={styles.timelineItem} {...fadeInUp} transition={{ delay: i * 0.1 }}>
              <h3>{item.title}</h3>
              <p>{item.loc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <motion.h2 className={styles.sectionHeading} {...fadeInUp}>Education & <span className="gradient-text">Certifications</span></motion.h2>
        <div className={styles.eduGrid}>
          {/* Main Degree */}
          <motion.div className={`${styles.eduCard} glass-card`} {...fadeInUp}>
            <Award className={styles.eduIcon} />
            <div>
              <h3>Bachelor of Engineering (ECE)</h3>
              <p>
                <a href="https://www.amrita.edu/campus/nagercoil/" target="_blank" rel="noopener noreferrer" className={styles.collegeLink}>
                  Amrita College of Engineering and Technology, Nagercoil
                </a>
              </p>
              <p className={styles.eduMeta}>2020 - 2024 | CGPA: 8.63</p>
            </div>
          </motion.div>

          {/* New Certification */}
          <motion.div className={`${styles.eduCard} glass-card ${styles.certCard}`} {...fadeInUp} transition={{ delay: 0.2 }}>
            <CheckCircle className={styles.eduIcon} style={{ color: 'var(--accent)' }} />
            <div>
              <h3>Embedded and IoT Engineering</h3>
              <p className={styles.collegeLink}>IPCS Global, Tambaram, Chennai</p>
              <p className={styles.eduMeta}>6-Month Intensive Certified Course | Completed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.section} ${styles.contactSection}`} id="contact">
        <motion.h2 className={styles.sectionHeading} {...fadeInUp}>Let's <span className="gradient-text">Connect</span></motion.h2>
        <div className={styles.contactContainer}>
          <motion.div className={styles.contactInfo} {...fadeInUp}>
            <p>Interested in working together? Reach out through any of these channels.</p>
            <ContactBar />
          </motion.div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Abinaya V. Designed with passion for Embedded Systems.</p>
      </footer>
    </main>
  );
}
