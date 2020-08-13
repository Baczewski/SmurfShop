import React, { Fragment } from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

class ScrollButton extends React.Component {
    constructor(props) {
        super(props)

        this.topFunction = this.topFunction.bind(this)
        this.scrollFunction = this.scrollFunction.bind(this)
        window.onscroll = () => { this.scrollFunction() }
    }

    topFunction() {
        document.documentElement.scrollTop = 0
    }

    scrollFunction() {
        if (document.documentElement.scrollTop > 250) {
            document.querySelector('#scroll_button').style.display = "block";
        } else {
            document.querySelector('#scroll_button').style.display = "none";
        }
    }

    render() {
        return (
            <Fragment>
                <div id='scroll_button' className={styles.button}>
                    <FontAwesomeIcon onClick={this.topFunction} className="fa-times-icon fa-3x" icon={faArrowCircleUp} />
                </div>
            </Fragment>
        )
    }
}

export default ScrollButton