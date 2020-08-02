import React, { Fragment } from 'react'
import styles from './index.module.css'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <Fragment>

            <div className={styles['main-div']}>
                <h2 className={styles.header}>
                    <div>
                        Buy Unranked
                    <br />
                        LOL Accounts
                    </div>
                </h2>
                <div className={styles["small-header"]}>
                    INSTANT DELIVERY & FULL EMAIL ACCESS ON ALL OUR LOL SMURFS
                </div>
                <div className={styles.heading}>New here?</div>
                <div className={styles.links}>
                    <Link to='/shop' className={styles.link}>Shop</Link>
                    <Link to='/register' className={styles.link}>Sign Up</Link>
                    <Link to='/login' className={styles.link}>Sign In</Link>
                </div>
            </div>
            {/* <video preload="true" autoPlay muted loop className={styles.video}
                src="https://cdn.shopify.com/s/files/1/0430/2359/7719/files/Leagueofaccounts-1.mp4?v=1594381046">
            </video> */}
        </Fragment>
    )
}

export default Homepage