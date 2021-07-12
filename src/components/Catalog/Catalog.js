import React from 'react';
import style from './Catalog.module.scss'
import Filter from './components/Filter/Filter';
import ListContainer from './components/List/ListContainer';
import Sorter from './components/Sorter/Sorter';

const Catalog = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.catalog}>
                <Filter  />
                <Sorter />
                <ListContainer />
            </div>
        </div>
    )
}

export default Catalog;