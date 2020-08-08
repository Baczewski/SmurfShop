import React, { useState, useEffect, Fragment } from 'react'
import userService from '../../services/user-service'
import UserStatus from '../UserStatus'

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
            <div className="col-md-12">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Username</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ username, status, _id, role }) => {
                            return <UserStatus key={_id} username={username} password={status} _id={_id} setUsers={setUsers} user={role}/>
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default UserPage