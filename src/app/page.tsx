import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import ContactBar from '@/components/ContactBar';
import styles from './page.module.css';
import { Cpu, Globe, Database, Award, BookOpen, Layers } from 'lucide-react';

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
      image: "/project1.png", // Reusing project1 image as fallback
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

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero} id="about">
        <div className={styles.heroContent}>
          <h2 className="animate-fade-in">Hi, I'm</h2>
          <h1 className={`${styles.name} animate-fade-in`}>Abinaya V</h1>
          <h3 className={styles.title}>EMBEDDED AND IOT ENGINEER</h3>
          <p className={styles.intro}>
            Seeking a graduate-level opportunity to contribute to embedded product development
            within an innovative engineering environment. Graduate from <strong>Amrita College of Engineering and Technology</strong>.
          </p>
          <div className={styles.heroBtns}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section} id="skills">
        <h2 className={styles.sectionHeading}>Technical <span className="gradient-text">Mastery</span></h2>
        <div className={styles.skillsGrid}>
          {skillGroups.map((group, i) => (
            <div key={i} className={`${styles.skillCard} glass-card`}>
              <div className={styles.skillIcon}>{group.icon}</div>
              <h3>{group.name}</h3>
              <div className={styles.skillTags}>
                {group.skills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="projects">
        <h2 className={styles.sectionHeading}>Featured <span className="gradient-text">Projects</span></h2>
        <p className={styles.sectionSub}>Click on any project to see detailed overview and images.</p>
        <div className={styles.projectsGrid}>
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </section>

      {/* Experience / Internships */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Professional <span className="gradient-text">Journey</span></h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <h3>Internet of Things Intern</h3>
            <p>Acutro Technologies Pvt Ltd, Trivandrum | Jul 2022</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>Machine Learning Intern</h3>
            <p>MATT Engineering Equipments, Nagercoil | Jan 2023</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>Robotics Intern</h3>
            <p>MATT Engineering Equipments, Nagercoil | Jul 2023</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Education</h2>
        <div className={`${styles.eduCard} glass-card`}>
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
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.section} ${styles.contactSection}`} id="contact">
        <h2 className={styles.sectionHeading}>Let's <span className="gradient-text">Connect</span></h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <p>Interested in working together? Reach out through any of these channels.</p>
            <ContactBar />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Abinaya V. Designed with passion for Embedded Systems.</p>
      </footer>
    </main>
  );
}
