import React from 'react';
import s from './not-found.module.css'
import {Error404} from "../../img/Error404";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {NavLink} from "react-router-dom";
import {ScrollToTop} from "../../helpers/ScrollToTop";

export const NotFound = () => {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <div className={s.not_found}>
                <Error404/>
                <p className={s.not_found_text}>Страница не найдена</p>
                <NavLink to={'/'} className={s.not_found__button}>На главную</NavLink>
            </div>
            <Footer/>
        </div>
    );
};


