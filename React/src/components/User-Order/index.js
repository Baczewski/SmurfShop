import React from 'react'
import styles from './index.module.css'

const status = {
    'Pending': 'pending-order',
    'Accepted': 'accepted-order',
    'Declined': 'declined-order'
}

const UserOrder = (props) => {

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.price}</td>
            {(props.status === 'Accepted') ? (<td>{props.username}</td>) : (<td>Your order must be accepted!</td>)}
            {(props.status === 'Accepted') ? (<td>{props.password}</td>) : (<td>Your order must be accepted!</td>)}
            <td>
                <p className={styles[status[props.status]]}>{props.status}</p>
            </td>
        </tr>
    )
}

export default UserOrder