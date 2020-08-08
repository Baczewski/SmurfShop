import React, { Fragment, useState, useEffect, useContext, useCallback } from 'react'
import smurfService from '../../services/smurf-service'
import styles from './index.module.css'
import { UserContext } from '../Context-Wrapper';
import { Link } from 'react-router-dom';
import cartService from '../../services/cart-service'
import { toast } from 'react-toastify';
import redirectWithNotification from '../../utils/redirect-with-notification'
import { helper } from '../../utils/shop-accounts-utils'
import { reduce } from '../../utils/reduce-smurf-description'

const Details = (props) => {
    const id = props.match.params.id
    const accountType = props.match.params.accountType
    const { isAdmin, isLogged } = useContext(UserContext)
    const [smurf, setSmurf] = useState({})

    useEffect(() => {
        (async () => {
            setSmurf(await smurfService.loadOne(id))
        })()
    }, [id])

    const handleAddToCart = useCallback(async (event) => {
        event.preventDefault()
        await cartService.addToCart({ name: smurf.type, price: smurf.price, username: smurf.username, password: smurf.password })
        props.history.push('/shop')
        toast.success(`${smurf.type} account successfully added to your cart!`)
    }, [smurf.type, smurf.price, props.history, smurf.username, smurf.password])

    const handleDelete = useCallback(async (event) => {
        event.preventDefault()
        await smurfService.delete(id)
        redirectWithNotification(props.history, `/accounts/${accountType}`, 'error', `${smurf.type} account has been removed from the shop!`)
    }, [props.history, smurf.type])

    return (
        <Fragment>
            <div style={{ textAlign: "center" }}>
                <h2>Product <span className="underline">Info</span></h2>
            </div>

            <div className={styles.container}>
                <img src={helper.image} alt={smurf.name} className={styles.image} />
                <div>
                    <h3>Account details:</h3>
                    <p className={styles.bold}>
                        {reduce[smurf.type]}
                    </p>
                    <p><span className={styles.bold}>Category:</span> {(smurf.type ? smurf.type.split('-').join(' ') : smurf.type)}</p>
                    <p><span className={styles.bold}>Ordered: </span> {smurf.ordersCount} times</p>
                    <p><span className={styles.bold}>Price: </span>{smurf.price}</p>
                    {isLogged && !isAdmin ? (<Link to="" onClick={handleAddToCart} className={styles.button}>Add to Cart</Link>) : null}
                    {isLogged && isAdmin ? (
                        <Fragment>
                            <Link className={styles.button} to={`/smurf/edit/${accountType}/${smurf._id}`}>Edit</Link>
                            <Link className={styles.button} to="" onClick={handleDelete}>Delete</Link>
                        </Fragment>
                    ) : null}
                    {!isLogged ? (<p className={styles.red}>You have to be logged to buy this item!</p>) : null}
                </div>
            </div>
        </Fragment>
    )
}

export default Details