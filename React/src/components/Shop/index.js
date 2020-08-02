import React, { Fragment } from 'react'
import styles from './index.module.css'
import AccountCardShop from '../Account-Card-Shop'
import { helper } from '../../utils/accout-card-shop-utils'

class Shop extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <div className={styles['container']}>
                    <AccountCardShop
                        location={helper.unverified.location} image={helper.unverified.image} text={helper.unverified.text}
                        value1={helper.unverified.value1} value2={helper.unverified.value2} value3={helper.unverified.value3}
                    />
                    <AccountCardShop
                        location={helper.champion.location} image={helper.champion.image} text={helper.champion.text}
                        value1={helper.champion.value1} value2={helper.champion.value2} value3={helper.champion.value3}
                    />
                    <AccountCardShop
                        location={helper.premium.location} image={helper.premium.image} text={helper.premium.text}
                        value1={helper.premium.value1} value2={helper.premium.value2} value3={helper.premium.value3}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Shop