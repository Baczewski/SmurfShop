import React, { Fragment } from 'react'
import styles from './index.module.css'
import LinkComponent from '../Link'

const AccountCardShop = (props) => {
    return (
        <Fragment>
            <div className={styles['main-div']}>
                <div className={styles['div-image']}>
                    <LinkComponent location={props.location} text={
                        <img className={styles.image} src={props.image} />
                    } />
                </div>
                <div className={styles['div-text']}>
                    {props.text}
                </div>
                <ul className={styles.ul}>
                    <li>{props.value1}</li>
                    <li>{props.value2}</li>
                    <li>{props.value3}</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default AccountCardShop