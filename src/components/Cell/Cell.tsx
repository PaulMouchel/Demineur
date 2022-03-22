import { FC, useState } from 'react'
import styles from './Cell.module.css'
import { OouiFlagRtl } from '../Flag/Flag'
import { MouseEvent  } from 'react'

interface ICell {
    value: string
}

const Cell : FC<ICell> = ({ value }) => {
    const [ show, setShow ] = useState<boolean>(false)
    const [ flag, setFlag ] = useState<boolean>(false)

    const leftClick = () => {
        if (!flag) {
            setShow(true)
        }
    }

    const rightClick = (e:MouseEvent<HTMLDivElement>):void => {
        e.preventDefault()
        if (show) return
        setFlag(value => !value)
        console.log("right")
    }

    return (
        <div className={`${styles.cell} ${show && styles.show}`} onClick={leftClick} onContextMenu={rightClick}>
            { show && value }
            { flag && <OouiFlagRtl color='red'/> }
        </div>
    )
}

export default Cell