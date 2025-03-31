import React, {useState} from 'react';
import styles from './careers.module.css'
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {ScrollToTop} from "../../helpers/ScrollToTop";


const vacancies = [
    {
        id: 1,
        title: "Инженер-технолог нефтегазовой отрасли",
        location: "Ташкент, Узбекистан",
        employment: "Полный рабочий день",
        requirements: [
            "Опыт концептуальной разработки технических решений на всех стадиях проекта (ТЭО, FEED, РД).",
            "Расчет сепарационного, колонного, насосного, компрессорного, теплообменного, оборудования.",
            "Расчет запорно-регулирующей арматуры и предохранительных клапанов.",
            "Владение профильным программным обеспечением (Aspen HYSYS, Aspen Plus, SmartPlant P&ID).",
            "Разработка технологической части проекта, готовность к принятию решений.",
            "Готовность к руководству технологической частью проекта при необходимости.",
            "Координация с другими дисциплинами, проверка качества выполнения работ.",
            "Владение русским и английским языком.",
            "Ответственность за выполнение проекта.",
        ],
        responsibilities: [],
        contactEmail: "info.di.intel.design@gmail.com",
    },
    {
        id: 2,
        title: "Инженер-проектировщик по электроснабжению",
        location: "Ташкент, Узбекистан",
        employment: "Полный рабочий день",
        responsibilities: [],
        requirements: [
            "Знание нормативных документов РУз.",
            "Проектирование разделов ЭС, ЭН.",
            "Разработка проектной документации на стадии П, РД. Сбор исходных данных и выполнение расчетов.",
            "Составление ТЗ. Согласование документации в соответствующих коммунальных службах, в экспертизе, РТН.",
            "Участие в переговорах с заказчиком на ранних и преддоговорных стадиях проекта; Выезд на объекты, ведение предпроектного обследования.",
            "Получение технических условий, ведение переговоров с эксплуатирующими организациями в процессе ведения проектов.",
            "Выдача технических (строительных) заданий архитекторам и проектировщикам смежных направлений, увязка своего раздела со смежными разделами проекта.",
            "Проектирование сетей 0,4 Кв силового оборудования зданий и сооружений.",
            "Проектирование наружного и внутреннего освещения зданий и сооружений.",
            "Проектирование наружных сетей электроснабжения 0,4-35 Кв.",
            "Проектирование систем электроснабжения промышленных предприятий 6-10-35кВ.",
            "Разработка полных и монтажных схем.",
            "Составление кабельных журналов.",
            "Составление однолинейных схем.",
            "Составление ведомостей объемов работ.",
            "Авторский надзор за проектами."
        ],
        contactEmail: "info.di.intel.design@gmail.com",
    },
    {
        id: 3,
        title: "Инженер-проектировщик по монтажу трубопроводов",
        location: "Ташкент, Узбекистан",
        employment: "Полный рабочий день",
        responsibilities: [],
        requirements: [
            "Образование — высшее.",
            "5 и более лет опыта работы в проектных организациях, занимающихся разработкой проектной документации объектов нефтегазовой, химической и нефтехимической промышленности.",
            "Разработка монтажных чертежей обвязки оборудования и аппаратов технологическими и вспомогательными трубопроводами с использованием 3Д-программ типа Intergraph Smart3D, AVEVA PDMS (E3D), AUTO PLANT 3D.",
            "Владение русским и английским языком.",
            "Ответственность за выполнение проекта.",
            "Коммуникабельность, трудолюбие, нацеленность на результат."
        ],
        contactEmail: "info.di.intel.design@gmail.com",
    }
];


export const Careers = () => {

    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleDetails = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div id={'careers'}>
            <ScrollToTop/>
            <Header/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Вакансии</h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.col5}>
                        {vacancies.map((vacancy, index) => (
                            <div key={index} className={styles.catalogPreview}>
                                <div className={styles.date}>
                                    <span>{vacancy.location}</span>
                                </div>
                                <div className={styles.catalogPreviewContent}>
                                    <h4>{vacancy.title}</h4>
                                </div>
                                <div className={styles.catalogPreviewActions}>
                                    <button onClick={() => toggleDetails(vacancy.id)} className={styles.linkArr}>
                                        {expandedId === vacancy.id ? "Скрыть" : "Подробнее"}
                                    </button>
                                </div>
                                {expandedId === vacancy.id && (
                                    <div className={styles.vacancyDetails}>
                                        <p><strong>Расположение офиса:</strong> {vacancy.location}</p>
                                        <p><strong>Занятость:</strong> {vacancy.employment}</p>
                                        {vacancy.responsibilities.length > 0 && (
                                            <>
                                                <h4>Обязанности:</h4>
                                                <ul>
                                                    {vacancy.responsibilities.map((resp, index) => (
                                                        <li key={index}>{resp}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                        <h4>Требования:</h4>
                                        <ul>
                                            {vacancy.requirements.map((req, index) => (
                                                <li key={index}>{req}</li>
                                            ))}
                                        </ul>

                                        <p>
                                            Если вас заинтересовала вакансия, отправьте резюме на:{" "}
                                            <a href={`mailto:${vacancy.contactEmail}`}>{vacancy.contactEmail}</a>
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
