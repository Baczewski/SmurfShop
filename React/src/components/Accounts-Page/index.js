import React, { Fragment, useState, useEffect } from 'react'
import smurfService from '../../services/smurf-service'
import Product from './Product'
import { helper } from '../../utils/shop-accounts-utils'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const AccountsPage = (props) => {
    const type = props.match.params.accountType

    const [accounts, setAccounts] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        (async () => {
            setAccounts(await smurfService.loadAll(type))
        })()
    }, [type])

    return (
        <Fragment> 
            {accounts.filter(x => x.region.includes(filter)).length ? (<Fragment>
                <div className={styles.search}>
                    <label htmlFor='filter'>Search by region:</label>
                    <input id='filter' onChange={e => setFilter(e.target.value)} />
                </div>
            </Fragment>) : null}

            {accounts.filter(x => x.region.includes(filter)).length ? (<Fragment>
                {accounts.filter(x => x.region.includes(filter)).map((acc) => {
                    return <Product key={acc._id} image={helper.image}
                        location={`/accounts/${acc.type}/${acc._id}`}
                        text={`Price - Region: ${acc.price} - ${acc.region}`}
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