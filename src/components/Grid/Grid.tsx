import { FC } from 'react'
import styles from './Grid.module.css'

const Grid : FC = ({ children }) => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}

export default Grid