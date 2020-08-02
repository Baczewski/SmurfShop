import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'

import orderService from '../../services/order-service'

const PendingOrder = ({ _id, user, name, date, price, setPendingOrders }) => {

    const handleAcceptClick = useCallback(async () => {
        await orderService.changeStatus('Accepted', _id)
        setPendingOrders(await orderService.loadAll())
        toast.success(`${name} order accepted!`)
    }, [_id, name, setPendingOrders])

    const handleDeclineClick = useCallback(async () => {
        await orderService.changeStatus('Declined', _id)
        setPendingOrders(await orderService.loadAll())
        toast.error(`${name} order declined!`)
    }, [_id, name, setPendingOrders])

    return (
        <tr>
            <td>{user}</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>$ {price}</td>
            <td>
                <FontAwesomeIcon onClick={handleAcceptClick} className="fa-check-icon" icon={faCheck} size="lg" />
                <FontAwesomeIcon onClick={handleDeclineClick} className="fa-times-icon" icon={faTimes} size="lg" />
            </td>
        </tr>
    )
}

export default PendingOrder