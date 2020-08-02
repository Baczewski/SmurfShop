import React, { Fragment, useContext, useState, useCallback } from 'react'
import styles from './index.module.css'
import Header from '../Header'
import * as yup from 'yup'

import handleErrors from '../../utils/handle-errors'

import userService from '../../services/user-service'
import redirectWithNotification from '../../utils/redirect-with-notification'
import { UserContext } from '../Context-Wrapper'

const schema = yup.object().shape({
    email: yup.string()
        .required('Email is required!')
        .email('Email is not valid!'),
    password: yup.string()
        .required('Password is required!')
        .min(4, 'Password must be at least 4 symbols!')
        .max(12, 'Password must be less than 12 symbols!')
})


const Login = (props) => {

    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault()

        try {
            await schema.validate({ email, password }, { abortEarly: false })
            const user = await userService.login({ email, password })
            setUser(user)
            redirectWithNotification(props.history, '/', 'success', 'Logged in successfully!')

        } catch (err) {
            handleErrors(err)
        }
    }, [email, password, props.history, setUser])

    return (
        <Fragment>
            <Header header='Login' />
            <div className={styles["row-login"]}>
                <div className="col-md-12">
                    <form onSubmit={handleSubmit} className={styles["login-form"]}>
                        <div className={styles["form-group"]}>
                            <label htmlFor="email">Email</label>
                            <input onChange={ev => setEmail(ev.target.value)} value={email}
                                className="form-control" type="text" id="email" placeholder="Email" />
                        </div>
                        <div className={styles["form-group"]}>
                            <label htmlFor="password">Password</label>
                            <input onChange={ev => setPassword(ev.target.value)} value={password}
                                className="form-control" type="password" id="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary form-btn">Login</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login