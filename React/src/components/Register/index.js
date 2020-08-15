import React, { Fragment, useState, useCallback } from 'react'
import Header from '../Header'
import styles from './index.module.css'
import Points from '../Points'
import * as yup from 'yup'

import handleErrors from '../../utils/handle-errors'

import userService from '../../services/user-service'
import redirectWithNotification from '../../utils/redirect-with-notification'

const schema = yup.object().shape({
    email: yup.string()
        .required('Email is required!')
        .email('Email is not valid!'),
    username: yup.string()
        .required('Username is required!')
        .min(4, 'Username must be at least 4 symbols!')
        .max(8, 'Username must be less than 8 symbols!'),
    password: yup.string()
        .required('Password is required!')
        .min(4, 'Password must be at least 4 symbols!')
        .max(12, 'Password must be less than 12 symbols!'),
    rePassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords do not match!')
        .required('Repeat password is required!')
})

const Register = (props) => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault()

        try {
            await schema.validate({ email, username, password, rePassword }, { abortEarly: false })
            await userService.register({ email, username, password, rePassword })
            redirectWithNotification(props.history, '/login', 'success', 'Registered successfully!')

        } catch (err) {
            handleErrors(err)
        }
    }, [email, password, rePassword, username, props.history])

    return (
        <Fragment>
            <div className={styles.back}>
                <Header header='Register' />
                <div className={styles["row-register"]}>
                    <div className="col-md-12">
                        <form className={styles["register-form"]} onSubmit={handleSubmit}>
                            <div className={styles["form-group"]}>
                                <label htmlFor="email">Email</label>
                                <input onChange={ev => setEmail(ev.target.value)} value={email}
                                    className="form-control" type="text" id="email" placeholder="Email" />
                                <small id="emailHelp" className="form-text text-muted">
                                    We'll never share your email adress with anyone else. </small>
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="username">Username</label>
                                <input onChange={ev => setUsername(ev.target.value)} value={username}
                                    className="form-control" type="text" id="username" placeholder="Username" />
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="password">Password</label>
                                <input onChange={ev => setPassword(ev.target.value)} value={password}
                                    className="form-control" type="password" id="password" placeholder="Password" />
                            </div>
                            <div className={styles["form-group"]}>
                                <label htmlFor="rePassword">Repeat Password</label>
                                <input onChange={ev => setRePassword(ev.target.value)} value={rePassword}
                                    className="form-control" type="password" id="rePassword" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary form-btn">Register</button>
                        </form>
                        <Points />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register