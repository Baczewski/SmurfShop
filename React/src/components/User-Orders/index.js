import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import UserOrder from '../User-Order'
import orderService from '../../services/order-service'

import styles from './index.module.css'

const UserOrders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        (async () => {
            const ordersData = await orderService.loadAll()
            setOrders(ordersData)
        })()
    }, [])

    return (
        <Fragment>
            <h2 className={styles.header}>My Orders</h2>
            {!orders.length ? (
                <div className="col-md-12 col-empty-cart">
                    <h2 className="empty-cart-heading">There are currently no orders from your account...</h2>
                    <Link to="/" className="btn empty-cart-btn">Go Shopping</Link>
                </div>
            ) : (
                    <div className="row row-silver row-orders">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Total Cost</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(({ _id, name, date, price, status, username, password }) =>
                                        <UserOrder key={_id} name={name} date={date} price={price} status={status} username={username} password={password} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
        </Fragment>
    )
}

export default UserOrders