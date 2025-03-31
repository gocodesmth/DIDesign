import React from 'react';
import styles from "./services.module.css";
import logo from "../../img/icons/DID-03.png"; // Путь к вашему логотипу
import {Footer} from "../../components/footer/Footer";
import {Header} from "../../components/header/Header";
import {ScrollToTop} from "../../helpers/ScrollToTop";

export const Services = () => {
    return (
        <div id={'services'}>
            <ScrollToTop/>
            <Header/>
            <section className={styles.scopeSection}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img src={logo} alt="Логотип" className={styles.logo}/>
                        <h2 className={styles.title}>
                            <span className={styles.bold}>ПЕРЕЧЕНЬ ОБЪЕМА РАБОТ</span> ПО ПРОЕКТИРОВАНИЮ:
                        </h2>
                    </div>
                    <hr className={styles.divider}/>
                    <p className={styles.description}>
                        В услуги по проектированию входит разработка полного спектра документации по следующим частям:
                    </p>
                    <div className={styles.listsContainer}>
                        <ul className={styles.list}>
                            <li>Технология;</li>
                            <li>Монтаж;</li>
                            <li>Генплан и Транспорт;</li>
                            <li>Автоматизация технологии производства-КИП;</li>
                            <li>Строительные конструкции КЖ, КМ;</li>
                            <li>Архитектурная часть;</li>
                            <li>Теплотехническая часть;</li>
                        </ul>
                        <ul className={styles.list}>
                            <li>Электротехническая часть;</li>
                            <li>Водопровод и Канализация;</li>
                            <li>Системы Пожаро-Газо-Обнаружения;</li>
                            <li>Экология;</li>
                            <li>Сметные работы (разработка смет по каждой дисциплине);</li>
                            <li>Разработка Пояснительной записки и др.</li>
                        </ul>
                    </div>
                    <hr className={styles.divider}/>
                    <div className={styles.footer}>
                        <p>
                            Сочетание широкого диапазона оказываемых услуг по комплексному проектированию позволяет
                            компании
                            качественно и в кратчайшие сроки проводить разработку полного перечня документации
                            поставленных задач.
                        </p>
                    </div>
                </div>
                <div className={styles.containerSecond}>
                    <div className={styles.headerSecond}>
                        <h3 className={styles.title}>
                            <span className={styles.bold}>ОБЪЕКТЫ ПРОЕКТИРОВАНИЯ:</span>
                        </h3>
                    </div>
                    <hr className={styles.divider}/>
                    <div className={styles.timeline}>
                        <ul className={styles.timelineList}>
                            <li>установки по подготовке нефти и газа;</li>
                            <li>компрессорные станции, насосные станции;</li>
                            <li>хранилища газа и нефти, в том числе нефтебазы;</li>
                            <li>
                                объекты добычи, сбора и подготовки к транспорту нефти, газа и газового конденсата для
                                нефтяных, газовых, газоконденсатных и нефтегазоконденсатных месторождений;
                            </li>
                            <li>
                                объекты хранения нефти, нефтепродуктов, газового конденсата, жидких химреагентов
                                резервуарного хранения и компрессорные станции подземного хранения газа;
                            </li>
                            <li>объекты переработки нефти и газа;</li>
                            <li>вспомогательные установки для технологических процессов.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.containerSecond}>
                    <div className={styles.headerSecond}>
                        <h2 className={styles.title}>
                            <span className={styles.bold}>ПЕРЕЧЕНЬ ОБЪЕМА РАБОТ</span> ПО РАЗРАБОТКЕ КД:
                        </h2>
                    </div>
                    <hr className={styles.divider}/>
                    <div className={styles.workList}>
                        <ul className={styles.workItems}>
                            <li>проработка опросного листа (ОЛ) (входной контроль);</li>
                            <li>определение конструктива;</li>
                            <li>проведение теплотехнических расчетов;</li>
                            <li>выполнение прочностного расчета;</li>
                            <li>проведение процессного проектирования и разработка конструкторской документации;</li>
                        </ul>
                        <div className={styles.documentationBlock}>
                            <h3>Разработка конструкторской документации (КД):</h3>
                            <ul>
                                <li>выполнение сборочного чертежа;</li>
                                <li>выполнение схемы сварки;</li>
                                <li>выполнение деталировочного чертежа;</li>
                                <li>выполнение спецификации;</li>
                                <li>выполнение узловых чертежей.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.containerSecond}>
                    <div className={styles.headerSecond}>
                        <h2 className={styles.title}>
                            <span className={styles.bold}>КОНСУЛЬТАЦИОННЫЕ</span> УСЛУГИ:
                        </h2>
                    </div>
                    <hr className={styles.divider}/>
                    <p className={styles.description}>
                        Наша компания предоставляет экспертные решения в области технического консультирования и
                        поддержки для предприятий нефтегазовой отрасли:
                    </p>
                    <ul className={styles.serviceList}>
                        <li>Техническое консультирование и поддержка – анализ и оптимизация производственных
                            процессов.
                        </li>
                        <li>Проверка работоспособности существующих систем газо- и нефтедобычи, газопереработки и
                            нефтепереработки.
                        </li>
                        <li>Анализ поставщиков оборудования – оценка соответствия требованиям проекта, надежности и
                            эффективности оборудования.
                        </li>
                        <li>Техническое заключение на основе анализа и подбор оптимальных решений для модернизации и
                            повышения производительности.
                        </li>
                    </ul>
                    <p className={styles.conclusion}>
                        Мы помогаем нашим клиентам эффективно управлять проектами, оптимизировать технологические
                        процессы и обеспечивать бесперебойную работу производственных объектов.
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    );
};