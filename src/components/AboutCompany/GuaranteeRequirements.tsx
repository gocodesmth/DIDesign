import React from "react";
import styles from "./GuaranteeRequirements.module.css";


export const GuaranteeRequirements = () => {
    return (
        <section className={styles.requirements}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    СОБЛЮДЕНИЕ ТРЕБОВАНИЙ К ГАРАНТИЙНЫМ ОБЯЗАТЕЛЬСТВАМ ОКАЗЫВАЕМЫХ УСЛУГ
                </h2>
                <div className={styles.subtitle_container}>
                    <p className={styles.subtitle}>
                        Наша компания берет на себя ответственность в соблюдении следующих требований:
                    </p>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.ribbon}></div>
                        <p>Замечания со стороны Заказчика (при их наличии) устраняются в рабочем порядке.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.ribbon}></div>
                        <p>Качественная разработка полного перечня документации.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.ribbon}></div>
                        <p>Своевременная разработка документации.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
