import { FC, useState } from 'react'
import styles from './Cell.module.css'

interface ICell {
    value: string
}

const Cell : FC<ICell> = ({ value }) => {
    const [ show, setShow ] = useState<boolean>(false)

    return (
        <div className={`${styles.cell} ${show && styles.show}`} onClick={() => setShow(true)}>
            { show && value }
        </div>
    )
}

export default Cell