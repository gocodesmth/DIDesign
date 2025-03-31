import React from "react";
import styles from "./Principles.module.css";

export const Principles = () => {
    return (
        <section className={styles.principles}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    ОБЩИЕ КОНЦЕПЦИИ РАБОТЫ КОМПАНИИ ОСНОВАНЫ НА СЛЕДУЮЩИХ ПРИНЦИПАХ:
                </h2>
                <div className={styles.divider}></div>
                <div className={styles.list}>
                    <div className={styles.item}>
                        Индивидуальный и профессиональный подход в подборе и разработке
                        конструкторской документации к каждому обращению Заказчика
                    </div>
                    <div className={styles.item}>
                        <p>
                            Индивидуальное рассмотрение каждой поставленной задачи и качественный выбор путей её решения
                        </p>
                    </div>
                    <div className={styles.item}>
                        Взвешенное аргументированное решение поставленных задач
                    </div>
                    <div className={styles.item}>
                        Качественное и своевременное выполнение документации
                    </div>
                </div>
            </div>
        </section>
    );
};
