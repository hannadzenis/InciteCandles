import React from "react";

import styles from "./NotFoundBlock.module.scss";

// console.log(styles)

export const NotFoundBlock = () => {
    return(
        <div className={styles.root}>
            <h1>
                <span>:(</span>
                <br/>
                Sorry...
            </h1>
            <p className={styles.description}>Nothing found</p>
        </div>
    )
}