import React, { Fragment, useContext } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context-Wrapper'

const Homepage = () => {
    const { isLogged, isAdmin } = useContext(UserContext)
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
                {isLogged ? (
                    <Fragment>
                        <div className={styles.links}>
                            {isAdmin ? (<Link to='/users' className={styles.link}>Users</Link>) : null}
                            {isAdmin ? (<Link to='/create' className={styles.link}>Create</Link>) : null}
                            {isAdmin ? (<Link to='/admin/pending-orders' className={styles.link}>Orders</Link>) : null}
                        </div>
                    </Fragment>
                ) : (
                        <Fragment>
                            <div className={styles.heading}>New here?</div>
                            <div className={styles.links}>
                                <Link to='/shop' className={styles.link}>Shop</Link>
                                <Link to='/register' className={styles.link}>Register</Link>
                                <Link to='/login' className={styles.link}>Login</Link>
                            </div>
                        </Fragment>
                    )}
            </div>
            {/* <video preload="true" autoPlay muted loop className={styles.video}
                src="https://cdn.shopify.com/s/files/1/0430/2359/7719/files/Leagueofaccounts-1.mp4?v=1594381046">
            </video> */}
        </Fragment>
    )
}

export default Homepage