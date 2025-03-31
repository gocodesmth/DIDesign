import React from 'react';
import logo from  "../../img/icons/DID-03.png"
import s from './footer.module.css'
import {NavLink} from "react-router-dom";


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <nav className={s.nav}>
                    <NavLink to="/about">О нас</NavLink>
                    <NavLink to="/services">Услуги</NavLink>
                    <NavLink to="/careers">Вакансии</NavLink>
                </nav>

                <div className={s.separator}></div>

                <div className={s.logo}>
                    <img src={logo} alt="Логотип"/>
                </div>

                <div className={s.networks}>
                    <p>Республика Узбекистан, г. Ташкент, Мирзо-Улугбекский район, ул. Чуст, д. 10-А</p>
                    <p className={s.phone}><a href="tel:+998948788558">+998 94 878 85 58</a></p>
                    <p>Интеллектуальные решения для надежного будущего</p>
                </div>
            </div>
        </div>
    );
};
