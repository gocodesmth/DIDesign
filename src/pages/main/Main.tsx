import React from 'react';
import {motion} from 'framer-motion'
import s from './Main.module.css'

import ava1 from '../../img/icons/DID-03.png'
import ava2 from '../../img/icons/d8001hkfl4bnw6xkxgllu9bkckglvvfr.jpg'
import {AboutCompany} from "../../components/AboutCompany/AboutCompany";
import {Contacts} from "../../components/contacts/Contacts";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {ScrollToTop} from "../../helpers/ScrollToTop";


export const Main = () => {


    const textAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        }),
    }

    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <div className={s.back_container}>
                <div className={s.container}>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        className={s.main}>
                        <motion.div custom={1} variants={textAnimation} className={s.description}>
                            <div><img src={ava1} className={s.logo} alt="logo2"/></div>
                            <h1>Different Intellect Design</h1>
                        </motion.div>
                        <motion.div custom={1.5} variants={textAnimation} className={s.avatar}>
                            <img src={ava2} alt="ava"/>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <AboutCompany/>
            <Contacts/>
            <Footer/>
        </div>
    );
}