import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

const LinkComponent = (props) => {
    return (
        <Link data-test-id={`link-${props.text}`} onClick={props.func} className={styles.link} to={props.location}>{props.text}</Link>
    )
}

export default LinkComponent