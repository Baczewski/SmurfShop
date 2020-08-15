import React, { Fragment } from 'react'
import styles from './index.module.css'
import { helper } from '../../utils/about-utils'
import AboutCard from '../About-Card'

const About = () => {
    return (
        <Fragment>
            <div className={styles["parent"]}>
                <h2 className={styles["h2"]}>WE PROVIDE:</h2>
                <div id='about-div' className={styles["div-main"]}>
                    <AboutCard src={helper.grasp.link} title={helper.grasp.title} description={helper.grasp.description} />
                    <AboutCard src={helper.arcane.link} title={helper.arcane.title} description={helper.arcane.description} />
                    <AboutCard src={helper.fleet.link} title={helper.fleet.title} description={helper.fleet.description} />
                </div>
            </div>
        </Fragment>
    )
}

export default About