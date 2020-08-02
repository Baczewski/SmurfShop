import React, { Fragment, useContext, useCallback } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styles from './index.module.css'
import LinkComponent from '../Link'
import { UserContext } from '../Context-Wrapper'
import userService from '../../services/user-service'
import { toast } from 'react-toastify'

const Navigation = () => {
    const { user, setUser, isLogged, isAdmin } = useContext(UserContext)

    const handleLogout = useCallback(async () => {
        await userService.logout()
        setUser(null)
        toast.success('Logged out successfully!')
    }, [setUser])

    return (
        <Fragment>
            <Navbar className={styles.navbar} variant="dark">
                <span className={styles["logo-navy"]} to="/about" >Traffik Hub</span>
                <Nav className={styles.container}>
                    {/* User */}
                    <LinkComponent location='/about' text='About us' />
                    <LinkComponent location='/' text='Home' />
                    <LinkComponent location='/shop' text='Shop' />
                    {isLogged && !isAdmin ? (<LinkComponent location="/user/cart" text='Cart' />) : null}
                    {isLogged && !isAdmin ? (<LinkComponent location="/user/orders" text='My Orders' />) : null}
                </Nav>
                <Nav className={styles["div-user"]}>

                    {!isLogged && !isAdmin ? (<LinkComponent location='/login' text='Login' />) : null}
                    {!isLogged && !isAdmin ? (<LinkComponent location='/register' text='Register' />) : null}

                    {isLogged ? (<LinkComponent location='' func={handleLogout} text='Logout' />) : null}
                    {isLogged && isAdmin ? (<LinkComponent location='/create' text='Add an account' />) : null}
                    {isLogged && isAdmin ? (<LinkComponent location="/admin/pending-orders" text='Pending Orders'/>) : null}

                    {isLogged && user ? (<LinkComponent location='' text={`Hello, ${user.username}`} />) : null}
                </Nav>
            </Navbar>
        </Fragment>
    )
}

export default Navigation