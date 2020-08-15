import React, { useState, useEffect, Fragment } from 'react'
import userService from '../../services/user-service'
import UserStatus from '../UserStatus'
import styles from './index.module.css'

const UserPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const allUsers = await userService.all()
            setUsers(allUsers)
        })()
    }, [])

    return (
        <Fragment>
            <h2 className={styles.h2}>All registered users</h2>
            <div className="col-md-12">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Registration date</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Username</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ username, status, _id, role, email, date }) => {
                            return <UserStatus key={_id} email={email} username={username} status={status} _id={_id} setUsers={setUsers} user={role} date={date} />
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default UserPage