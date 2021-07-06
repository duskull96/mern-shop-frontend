import React from 'react';
import style from './Catalog.module.scss'
import Filter from './components/Filter/Filter';
import ListContainer from './components/List/ListContainer';

const Catalog = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.catalog}>
                <Filter  />
                <ListContainer />
            </div>
        </div>
    )
}

export default Catalog;