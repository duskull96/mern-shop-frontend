import React from 'react';
import style from './AddToFavorite.module.scss'
import iconFav from './heart.png'

const AddToFavorite = (props) => {
    return (
        <div className={style['add-to-favorite']}>
            <img src={iconFav} alt='add-to-favorite' />
        </div>
    )
}

export default AddToFavorite;