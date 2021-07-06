import React, { useEffect } from 'react';
import style from './List.module.scss'
import Card from './components/Card/Card.js';

const List = (props) => {

    console.log(props, 'List - props');
    console.log('render');
    useEffect(() => {
        props.getCatalog()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={style.list}>
            {props.catalog.map( (product) => {
                return <Card product={product}/>
            })}
        </div>
    )
}

export default List;