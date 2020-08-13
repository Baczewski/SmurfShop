import React, { Fragment } from 'react'
import styles from './index.module.css'
import LinkComponent from '../Link'

const AccountCardShop = (props) => {
    return (
        <Fragment>
            <div key={props.key} className={styles['main-div']}>
                <div className={styles['div-image']}>
                    <LinkComponent location={props.location} text={
                        <img className={styles.image} src={props.image} alt={props.text} />
                    } />
                </div>
                <div className={styles['div-text']}>
                    {props.text}
                </div>
                <ul className={styles.ul}>
                    {props.values.map((value) => {
                        return <li key={value}>{value}</li>
                    })}
                </ul>
            </div>
        </Fragment>
    )
}

export default AccountCardShop