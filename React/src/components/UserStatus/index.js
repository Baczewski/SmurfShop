import React, { Fragment, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import userService from '../../services/user-service'
import styles from './index.module.css'
import { toast } from 'react-toastify'

const UserStatus = (props) => {
    const handleBanClick = useCallback(async () => {
        await userService.ban('Banned', props._id)
        props.setUsers(await userService.all())
        toast.error('Successfully banned a user')
    }, [props])

    const handleActiveClick = useCallback(async () => {
        await userService.ban('Active', props._id)
        props.setUsers(await userService.all())
        toast.success('Successfully unbanned a user')
    }, [props])

    return (
        <Fragment>
            <tr key={props._id} className={styles.tr}>
                <td>{props.date}</td>
                {props.user === 'admin' ? <td className={styles.red}>Hidden for security seasons</td> : <td>{props.email}</td>}
                <td>{props.username}</td>
                <td className={props.status === 'Banned' ? (styles.red) : (styles.green)}>{props.status}</td>
                {props.user === 'admin' ? (null) : (
                    <td>
                        <span className={styles.red}>
                            <FontAwesomeIcon onClick={handleBanClick} className="fa-times-icon" icon={faTimes} size="lg" />
                        </span>
                        <span className={styles.green} >
                            <FontAwesomeIcon onClick={handleActiveClick} className="fa-times-icon" icon={faCheck} size="lg" />
                        </span>
                    </td>
                )}

            </tr>
        </Fragment >
    )
}

export default UserStatus