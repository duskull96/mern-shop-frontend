import React from "react";
import style from './Footer.module.scss';

const Footer = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.footer}>
                <p>All right reserved. Flora ©</p>
            </div>
        </div>
    )
}

export default Footer;