import React from "react";
import styles from "./about-us.module.css";
import logo from "./../../img/icons/DID-03.png";
import Document from "./../../img/icons/Document.svg";
import People from "./../../img/icons/People.svg";
import Money from "./../../img/icons/Money.svg";
import Checkmark from "./../../img/icons/Checkmark.svg";
import Rocket from "./../../img/icons/Rocket.svg";
import Puzzle from "./../../img/icons/Puzzle.svg";
import Gears from "../../img/icons/Checklist.svg";
import {Principles} from "../../components/AboutCompany/Principles";
import {GuaranteeRequirements} from "../../components/AboutCompany/GuaranteeRequirements";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {ScrollToTop} from "../../helpers/ScrollToTop";


export const AboutUs = () => {
    return (
        <div id={'about'}>
            <ScrollToTop/>
            <Header/>
            <section className={styles.advantages}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img src={logo} alt="Company Logo" className={styles.logo}/>
                        <h2 className={styles.title}>Преимущества компании:</h2>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.column}>
                            <div className={styles.item}>
                                <img src={Document} alt="icon" className={styles.icon}/>
                                <p>Наличие всех необходимых сертификатов и допусков в сфере проектирования опасных
                                    производственных объектов</p>
                            </div>
                            <div className={styles.item}>
                                <img src={People} alt="icon" className={styles.icon}/>
                                <p>Наличие штата высококвалифицированных специалистов</p>
                            </div>
                            <div className={styles.item}>
                                <img src={Money} alt="icon" className={styles.icon}/>
                                <p>Гибкие финансовые возможности</p>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.item}>
                                <img src={Checkmark} alt="icon" className={styles.icon}/>
                                <p>Контроль качества выполнения всего спектра работ по комплексной разработке рабочей
                                    документации, конструкторской документации в топливно-энергетической
                                    промышленности</p>
                            </div>
                            <div className={styles.item}>
                                <img src={Rocket} alt="icon" className={styles.icon}/>
                                <p>Обеспечение высокого технического уровня разрабатываемой рабочей и конструкторской
                                    документации в соответствии с действующими нормативными документами</p>
                            </div>
                            <div className={styles.item}>
                                <img src={Puzzle} alt="icon" className={styles.icon}/>
                                <p>Наличие новейших программ автоматизированной системы разработки и оформления
                                    конструкторской документации и расчетных программ</p>
                            </div>
                            <div className={styles.item}>
                                <img src={Gears} alt="icon" className={styles.icon}/>
                                <p>Отлаженная инфраструктура выполнения всех поставленных задач в кратчайшие сроки и
                                    выполнение их с технической точностью и информативностью.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Principles/>
            <GuaranteeRequirements />
            <Footer/>
        </div>
    );
};
