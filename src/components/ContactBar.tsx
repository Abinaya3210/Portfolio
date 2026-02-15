'use client';

import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import styles from './ContactBar.module.css';

export default function ContactBar() {
    const phone = "+916374886240";
    const email = "abinayagirijakumari@gmail.com";
    const whatsappUrl = `https://wa.me/${phone.replace('+', '')}`;

    return (
        <div className={styles.container}>
            <a href={`tel:${phone}`} className={styles.item} title="Call Me">
                <div className={styles.iconWrapper}><Phone size={20} /></div>
                <span className={styles.text}>{phone}</span>
            </a>

            <a href={`mailto:${email}`} className={styles.item} title="Email Me">
                <div className={styles.iconWrapper}><Mail size={20} /></div>
                <span className={styles.text}>{email}</span>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.item} title="WhatsApp Me">
                <div className={styles.iconWrapper}><MessageCircle size={20} /></div>
                <span className={styles.text}>WhatsApp</span>
            </a>

            <div className={styles.item}>
                <div className={styles.iconWrapper}><MapPin size={20} /></div>
                <span className={styles.text}>Chennai, Tamil Nadu</span>
            </div>
        </div>
    );
}
