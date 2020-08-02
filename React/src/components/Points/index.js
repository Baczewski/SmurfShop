import React, { Fragment } from 'react'
import styles from './index.module.css'

class Points extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clicks: 0,
            hidden: false
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            clicks: this.state.clicks + 1,
            hidden: this.state.clicks >= 5 ? true : false
        })
    }

    render() {
        const divClass = this.state.hidden === false ? 'container' : 'hidden'
        const message = this.state.hidden === false ? 'hidden' : 'message'
        const emojiDiv = this.state.hidden === false ? 'hidden' : 'container'
        return (
            <Fragment>
                <div className={styles[divClass]}>
                    <button className={styles.button} onClick={this.clickHandler}>Click me for free RP</button>
                    <div>Riot Points: {this.state.clicks} RP</div>
                </div>
                <div className={styles[message]}>Nothing is free in this life, expect our instant delivery</div>
                <div className={styles[emojiDiv]}>
                    <img className={styles.emoji} src="https://cdn.shopify.com/s/files/1/0430/2359/7719/files/Fleet_Footwork_rune.png?v=1594382024" />
                </div>
            </Fragment>
        )
    }
}

export default Points