import React, { Fragment } from 'react'
import styles from './index.module.css'
import { helper } from '../../utils/about-utils'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Fragment>
            <div className={styles["parent"]}>
                <h2 className={styles["h2"]}>WE PROVIDE:</h2>
                <div className={styles["div-main"]}>
                    <div className={styles["div-mid"]}>
                        <div >
                            <img className={styles.img} src={helper.grasp.link} />
                            <div className={styles.span}>{helper.grasp.title}</div>
                            <div className={styles.description}>
                                {helper.grasp.description}
                            </div>
                        </div>
                    </div>
                    <div className={styles["div-mid"]}>
                        <div>
                            <img className={styles.img} src={helper.arcane.link} />
                            <div className={styles.span}>{helper.arcane.title}</div>
                            <div className={styles.description}>
                                {helper.arcane.description}
                            </div>
                        </div>
                    </div>
                    <div className={styles["div-mid"]}>
                        <div>
                            <img className={styles.img} src={helper.fleet.link} />
                            <div className={styles.span}>{helper.fleet.title}</div>
                            <div className={styles.description}>
                                {helper.fleet.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About