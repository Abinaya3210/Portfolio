'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectProps {
    title: string;
    description: string;
    details: string[];
    image: string;
    tags: string[];
}

export default function ProjectCard({ title, description, details, image, tags }: ProjectProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            className={`${styles.card} glass-card ${isExpanded ? styles.expanded : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: 'var(--primary)' }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                layout="position"
                className={styles.header}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={title} width={400} height={250} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <motion.h3 layout="position" className={styles.title}>{title}</motion.h3>
                    <motion.p layout="position" className={styles.shortDesc}>{description}</motion.p>
                    <motion.div layout="position" className={styles.tags}>
                        {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </motion.div>
                    <motion.button layout="position" className={styles.toggleBtn}>
                        {isExpanded ? 'Show Less' : 'View Details'}
                    </motion.button>
                </div>
            </motion.div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.details}
                    >
                        <h4>Detailed Overview</h4>
                        <ul>
                            {details.map((detail, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {detail}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
