import React, { useCallback } from 'react'
import cartService from '../../services/cart-service'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

const CheckoutButton = (props) => {
    const handleCheckout = useCallback(async (event) => {
        event.preventDefault()

        await cartService.checkout(props.cartItems)
        props.history.push('/about')
        toast.success('Checkout was successful!')
    }, [props.history, props.cartItems])

    return (
        <div className={styles.center}>
            <div className="row row-silver checkout-row">
                <div className="col-md-12 checkout-col">
                    <Link onClick={handleCheckout} className="btn checkout-btn" to="">Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default CheckoutButton