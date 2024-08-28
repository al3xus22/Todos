import {ReactNode} from 'react'
import styles from './Container.module.scss'
import React from 'react';

interface IContainer {
    children?: ReactNode
}

const Container = ({ children }: IContainer) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Container