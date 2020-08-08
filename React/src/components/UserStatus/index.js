import React, { Fragment, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import userService from '../../services/user-service'
import styles from './index.module.css'

const UserStatus = (props) => {
    const handleBanClick = useCallback(async () => {
        await userService.ban('Banned', props._id)
        props.setUsers(await userService.all())
    }, [props._id, props.setUsers])

    const handleActiveClick = useCallback(async () => {
        await userService.ban('Active', props._id)
        props.setUsers(await userService.all())
    }, [props._id, props.setUsers])

    return (
        <Fragment>
            <tr key={props._id} className={styles.tr}>
                <td>{props.username}</td>
                <td>{props.password}</td>
                {props.user === 'admin' ? (null) : (
                    <td>
                        <FontAwesomeIcon onClick={handleBanClick} className="fa-times-icon" icon={faTimes} size="lg" />
                        <FontAwesomeIcon onClick={handleActiveClick} className="fa-times-icon" icon={faCheck} size="lg" />
                    </td>
                )}

            </tr>
        </Fragment >
    )
}

export default UserStatus