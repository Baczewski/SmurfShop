import React, { Fragment, useState, useEffect } from 'react'
import styles from './index.module.css'
import * as yup from 'yup'

import handleErrors from '../../../utils/handle-errors'

import smurfService from '../../../services/smurf-service'
import redirectWithNotification from '../../../utils/redirect-with-notification'

const schema = yup.object().shape({
    region: yup.string()
        .required('Region is required!')
        .min(2, 'Region should be at least 2 symbols!'),
    rank: yup.string()
        .required('Rank is required!')
        .min(6, 'Rank sould be at least 6 symbols!'),
    username: yup.string()
        .required('Username is required!')
        .min(3, 'Username should be at least 3 symbols!'),
    password: yup.string()
        .required('Password is required!')
        .min(4, 'Password should be at least 4 symbols!'),
    champions: yup.number()
        .required('Champions count is required!'),
    skins: yup.number()
        .required('Skins count is required!'),
    price: yup.string()
        .required('Price is required!')
        .min(1, 'Price should be at least 1 symbol!'),
    rare: yup.string()
        .default('No rare content'),
    type: yup.string()
        .notOneOf(['Choose type'], 'Please choose account type!')
})

const EditForm = ({ smurf, smurfId, history }) => {

    const [region, setRegion] = useState(smurf.region)
    const [rank, setRank] = useState(smurf.rank)
    const [username, setUsername] = useState(smurf.username)
    const [password, setPassword] = useState(smurf.password)
    const [champions, setChampions] = useState(smurf.champions)
    const [skins, setSkins] = useState(smurf.skins)
    const [price, setPrice] = useState(smurf.price)
    const [rare, setRare] = useState(smurf.rare)
    const [type, setType] = useState('unverified')

    const formSubmit = async (event) => {
        event.preventDefault()

        try {
            await schema.validate({ region, rank, username, password, champions, skins, price, rare, type }, { abortEarly: false })
            await smurfService.edit(smurfId, { region, rank, username, password, champions, skins, price, rare, type })
            redirectWithNotification(history, '/', 'success', 'Account edited successfully!')
        } catch (err) {
            handleErrors(err)
        }
    }

    return (
        <Fragment>
            <div className={styles['row-create']}>
                <h2 className={styles.header}>Edit LOL Account</h2>
                <div className='col-md-12'>
                    <form onSubmit={formSubmit} className={styles["create-form"]}>
                        <div className={styles['form-group']}>
                            <label htmlFor='region'>Region</label>
                            <input onChange={ev => setRegion(ev.target.value)}
                                type='text' id='region' className='form-control' value={region} />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='rank'>Rank</label>
                            <input onChange={ev => setRank(ev.target.value)} value={rank}
                                type='text' id='rank' className='form-control' />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='username'>Username</label>
                            <input onChange={ev => setUsername(ev.target.value)} value={username}
                                type='text' id='username' className='form-control' />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='password'>Password</label>
                            <input onChange={ev => setPassword(ev.target.value)} value={password}
                                type='password' id='password' className='form-control' />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='champions'>Number of champions owned</label>
                            <input onChange={ev => setChampions(ev.target.value)} value={champions}
                                type='number' id='champions' className='form-control' />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='skins'>Number of skins owned</label>
                            <input onChange={ev => setSkins(ev.target.value)} value={skins}
                                type='number' id='skins' className='form-control' />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='price'>Price</label>
                            <input onChange={ev => setPrice(ev.target.value)} value={price}
                                type='text' id='price' className='form-control' />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='rare'>Rare content</label>
                            <textarea onChange={ev => setRare(ev.target.value)} value={rare}
                                type='text' id='rare' className='form-control' />
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor='type'>Type of account: </label>
                            <select onChange={ev => setType(ev.target.value)} value={type} className='form-control size-select'>
                                <option value='unverified'>Unverified</option>
                                <option value='champion-account'>Champion account</option>
                                <option value='premium-champion'>Premium champion account</option>
                            </select>
                        </div>
                        <button type="submit" className={styles['edit-button']}>Edit</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default EditForm