import React, { Fragment } from 'react'
import styles from './index.module.css'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Fragment>
            <footer className={styles.footer}>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                     <Link className={styles.link} to='/'> OdinSmurfs.com</Link>
                    <span className={styles.icons}>
                        <i class="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>
                        <i class="fa fa-cc-visa fa-lg" style={{marginLeft: 10 }} aria-hidden="true"></i>
                        <i class="fa fa-btc fa-lg" style={{marginLeft: 10 }} aria-hidden="true"></i>
                    </span>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer