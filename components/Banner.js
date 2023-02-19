import React from "react";
import styles from "../styles/Banner.module.css";

export default function Banner({ buttonText, handleClick }) {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>
            <div className={styles.titleContainer}>
              <span className={styles.title1}>Coffee</span> 
              <span className={styles.title2}>Hound</span>  
            </div>
            
        </h1>
        <p className={styles.subTitle}>Sniff out your local coffee roasteries!</p>
        <button 
            className={styles.button}
            onClick={handleClick}
        >{buttonText}</button>
        </div>
    )
}