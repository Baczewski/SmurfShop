import React, { useState, useEffect, Fragment, useContext } from 'react'
import cartService from '../../services/cart-service'
import CartItem from '../Cart-Item'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import { UserContext } from '../Context-Wrapper'
import CheckoutButton from '../Checkout-Button'

const Cart = (props) => {
    const { user } = useContext(UserContext)

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        (async () => {
            const userItems = await cartService.loadAll()
            setCartItems(userItems)
        })()
    }, [])
    console.log(cartItems)


    return (
        <Fragment>
            <h2 className={styles.header}>Welcome to your cart, {user.username}. =)</h2>
            {!cartItems.length ? (
                <div className={styles.container}>
                    <h2 className={styles.header}>There are currently no items in you cart...</h2>
                    <Link to="/shop" className={styles.link}>Go Shopping </Link>
                </div>
            ) : (
                    <Fragment>
                        <div className="row row-silver row-cart">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Item name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(({ _id, name, price, date, username, password }) =>
                                            <CartItem key={_id} _id={_id} type={name} price={price} date={date} 
                                                setCartItems={setCartItems} />)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <CheckoutButton cartItems={cartItems} history={props.history} />
                    </Fragment>
                )}
        </Fragment>
    )
}

export default Cart