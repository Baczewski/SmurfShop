import React, { Fragment } from 'react'
import styles from './index.module.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Fragment>
            <footer className={styles.footer}>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                     <Link className={styles.link} to='/'> TraffikHub.com</Link>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer