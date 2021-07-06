import React from 'react';
import style from './Card.module.scss';
import AddToBag from './components/AddToBag/AddToBag';
import AddToFavorite from './components/AddToFavorite/AddToFavorive';

const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.content}>
                <img src={'http://localhost:3001/' + props.product.picture} alt='card' className={style.img}/>
                <div className={style.buttons}>
                    <AddToBag />
                    <AddToFavorite />
                </div>
            </div>
            <div className={style.title}>
                {props.product.name}
            </div>
            <div className={style.price}>
                {props.product.price.$numberDecimal + `$`}
            </div>
        </div>
    )
}

export default Card;