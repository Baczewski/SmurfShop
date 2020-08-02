import React, { Fragment } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import Header from '../Header'

const PageNotFound = () => {
    return (
        <Fragment>
            <Header header="404" />
            <div className={styles.message}>
                Sorry, we couldn't find this page.
                <div>
                But don't worry buddy, you can find plenty of other things on our
                </div> 
                <div>
                    <Link className={styles.link} to='/'> homepage</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default PageNotFound