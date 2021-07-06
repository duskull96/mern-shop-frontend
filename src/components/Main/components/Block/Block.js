import React, { useEffect, useRef, useState } from 'react'
import style from './Block.module.scss'
import cn from 'classnames'

const Block = (props) => {
    const RestApiURL = 'http://localhost:3001/'
    const imgRef = useRef()
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.onload = () => { setIsLoad(false) }
        }
    }, [])

    return (
        // <div className={style[`${props.block.alt}`]} >
        <div className={cn(style[`${props.block.alt}`], {
            [style.loading]: isLoad
            // [style.loadingEnd]: !
        })} >
            <img ref={imgRef} src={RestApiURL + props.block.picture} alt={props.block.alt} />
            {props.block.content ?
                <div className={style.content}>
                    <h2>{props.block.content}</h2>
                </div>
                :
                null
            }
        </div>
    )
}

export default Block;