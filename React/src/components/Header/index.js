import React from 'react'
import styles from './index.module.css'

const Header = (props) => {
    return (
        <div className={styles["heading-div"]}>
          <div className={styles["heading-col"]}>
            <h1><span className="underline">{props.header}</span></h1>
          </div>
        </div>
      );
}

export default Header