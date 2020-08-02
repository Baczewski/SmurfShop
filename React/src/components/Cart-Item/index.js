import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import cartService from '../../services/cart-service'
import { toast } from 'react-toastify';

const CartItem = (props) => {
    const type = props.type.split('-')[0]

    const handleRemoveClick = useCallback(async () => {
        await cartService.deleteFromCart(props._id)
        props.setCartItems(await cartService.loadAll())
        toast.error(`${type} account removed from the cart.`)
    })

    return (
        <tr>
            <td>{props.date}</td>
            <td>{type} account</td>
            <td>$ {props.price}</td>
            <td>
                <FontAwesomeIcon onClick={handleRemoveClick}
                    className="fa-times-icon rm-cart-item-btn" icon={faTimes} size="2x" />
            </td>
        </tr>
    )
}

export default CartItem