'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

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
        <div className={`${styles.card} glass-card ${isExpanded ? styles.expanded : ''}`}>
            <div className={styles.header} onClick={() => setIsExpanded(!isExpanded)}>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={title} width={400} height={250} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.shortDesc}>{description}</p>
                    <div className={styles.tags}>
                        {tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                    <button className={styles.toggleBtn}>
                        {isExpanded ? 'Show Less' : 'View Details'}
                    </button>
                </div>
            </div>

            {isExpanded && (
                <div className={styles.details}>
                    <h4>Detailed Overview</h4>
                    <ul>
                        {details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
