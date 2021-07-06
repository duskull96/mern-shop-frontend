import React from 'react';
import style from './AddToBag.module.scss'
import iconBag from './bag.png'

const AddToBag = (props) => {
    return (
        <div className={style['add-to-bag']}>
            <img src={iconBag} alt='add-to-bag' />
        </div>
    )
}

export default AddToBag;