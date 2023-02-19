import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cls from 'classnames';
import styles from '../styles/Card.module.css';

export default function Card({ info }) {
    const { address, locality, region, postcode } = info.location;
    return (
            <div className={cls(styles.cardComponent, "glass")}>
                <Link 
                href={`/coffee-shop/${info.fsq_id}`} 
                legacyBehavior
                >
                <a>
                    <p className={styles.cardTitle}>{info.name}</p>
                    <Image
                        alt="coffee shop image" 
                        className={styles.cardImage}
                        src={"/static/coffeeWorks.jpg"}
                        width={260}
                        height={160}
                    />  
                    <p className={styles.cardInfoText}>{`${address}, ${locality}, ${region}, ${postcode}`}</p>
                    <p className={styles.cardInfoText}>{info.phone}</p>
                </a>
                </Link>
            </div>
                
            
            
             
        
    )
}