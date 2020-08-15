import React, { Fragment, useState, useEffect } from 'react'
import smurfService from '../../services/smurf-service'
import Product from './Product'
import { helper } from '../../utils/shop-accounts-utils'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
// import ScrollButton from '../Scroll-Button'

const AccountsPage = (props) => {
    const type = props.match.params.accountType

    const [accounts, setAccounts] = useState([])
    const [filter, setFilter] = useState('')

    const checkFilter = accounts.filter(x => x.region.includes(filter))

    useEffect(() => {
        (async () => {
            setAccounts(await smurfService.loadAll(type))
        })()
    }, [type])

    return (
        <Fragment>
            <Fragment>
                <div className={styles.search}>
                    <label htmlFor='filter'>Search by region:</label>
                    <input id='filter' onChange={e => setFilter(e.target.value)} />
                </div>
            </Fragment>

            {checkFilter.length ? (<Fragment>
                {checkFilter.map((acc) => {
                    return <Product key={acc._id} image={helper.image}
                        location={`/accounts/${acc.type}/${acc._id}`}
                        text={`Price - Region: ${acc.price} - ${acc.region}`}
                        values={[`Account rank: ${acc.rank}`, `Number of champions: ${acc.champions}`, `Number of skins: ${acc.skins}`]}
                    />
                })}
                {/* {checkFilter.length > 3 ? (<ScrollButton />) : null} */}
            </Fragment>) :
                (<Fragment>
                    <div className={styles.loading}>
                        <div className={styles.noaccounts} role="status">Out of stock</div>
                        <img alt='smurf' className={styles.image} src='https://www.vippng.com/png/detail/244-2440853_png-file-svg-sad-face-icon-transparent-background.png'/>
                        <Link to='/shop' className={styles.button}>Go back</Link>
                    </div>
                </Fragment>)}

        </Fragment>
    )
}

export default AccountsPage