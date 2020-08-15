import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PendingOrder from '../Pending-Order'
import orderService from '../../services/order-service'

import styles from './index.module.css'

const PendingOrders = () => {

    const [pendingOrders, setPendingOrders] = useState([])

    useEffect(() => {
        (async () => {
            const pendingOrdersData = await orderService.loadAll()
            setPendingOrders(pendingOrdersData)
        })()
    }, [])

    if (!pendingOrders.length) {
        return (
            <Fragment>
                <div className={styles.header}>
                    <h2 className="empty-cart-heading">There are currently no pending orders...</h2>
                    <Link to="/" className={styles.link}>Home</Link>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="row row-silver row-orders">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">User</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Total Cost</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingOrders.map(({ _id, name, price, date, creatorId }) =>
                                <PendingOrder key={_id} _id={_id} name={name}
                                    date={date} price={price} user={creatorId.username}
                                    setPendingOrders={setPendingOrders} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default PendingOrders