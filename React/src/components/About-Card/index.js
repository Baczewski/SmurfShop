import React from 'react'
import styles from './index.module.css'

const AboutCard = (props) => {
    return (
        <div className={styles["div-mid"]}>
            <div >
                <img alt={props.alt} className={styles.img} src={props.src} />
                <div className={styles.span}>{props.title}</div>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default AboutCard