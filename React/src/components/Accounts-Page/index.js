import React, { Fragment, useState, useEffect } from 'react'
import smurfService from '../../services/smurf-service'
import Product from './Product'
import { helper } from '../../utils/shop-accounts-utils'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const AccountsPage = (props) => {
    const type = props.match.params.accountType

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        (async () => {
            setAccounts(await smurfService.loadAll(type))
            // const accs = await smurfService.loadAll(type)
        })()
    }, [])

    return (
        <Fragment>
            {accounts.length ? (<Fragment>
                {accounts.map((acc) => {
                    return <Product image={helper.image}
                        location={`/accounts/${acc.type}/${acc._id}`}
                        text={`Account price: ${acc.price}`}
                        value1={`Account rank: ${acc.rank}`}
                        value2={`Number of champions: ${acc.champions}`}
                        value3={`Number of skins: ${acc.skins}`} />
                })}
            </Fragment>) :
                (<Fragment>
                    <div className={styles.noaccounts} role="status">Out of stock</div>
                    <img src='https://pngimage.net/wp-content/uploads/2019/05/angel-emoji-black-and-white-png-.png' className={styles.image} />
                    <Link to='/shop' className={styles.button}>Go back</Link>
                </Fragment>)}

        </Fragment>
    )
}

export default AccountsPage