import { Link } from "react-router-dom";
import styles from "./tourist.module.css";
import { useEffect } from "react";
import Pdf from "../../../assets/icons/pdf.svg";

export const Tourist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.tourist}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.breadcrubs}>
            <Link to="/">Главная</Link>
            <span>&gt;</span>
            <span>Для туриста</span>
          </div>
          <article className={styles.content}>
            <h2>Как оформить тур?</h2>
            <p>
              Необходимо оставить заявку на сайте или написать в любой удобный
              для&nbsp;Вас&nbsp;мессенджер&nbsp;/&nbsp;позвонить по телефону
              <a href="tel:+79217747604"  className={styles.link}>+7 921 774-76-04</a>.
            </p>
          </article>
          <article className={styles.content}>
            <h2>Что делать если вы столкнулись с проблемами в туре?</h2>
            <p>
              В любой ситуации вы можете позвонить или написать нам по телефону
              <a href="tel:+79217747604" className={styles.link}>+7 921 774-76-04</a>, и мы поможем решить все вопросы. Вы можете рассчитывать
              на нашу поддержку с самого начала — от оформления заявки на тур до возвращения из отпуска. Мы оперативно
              помогаем решить любые проблемы, так как дорожим своей репутацией и каждым клиентом.
            </p>
          </article>
          <article className={styles.content}>
            <h2>Что такое ФПР?</h2>
            <p>
              ФПР — это фактически понесенные затраты при аннуляции тура — это те затраты, которые туроператор уже
              осуществил при покупке услуг для вас. Например, оплата гостиницы, невозвратного чартерного билета и т.п.
              Узнать размер фактически понесенных затрат можно при аннуляции тура. Туроператор выдает все документы под
              эти расходы и остаток оплаты возвращает вам.
            </p>
            <p>
              Фактически понесённые затраты всегда будут при аннуляции по вашей инициативе, причём чем ближе к туру
              осуществлена аннуляция, тем больше будут фактически понесённые затраты. В каждом конкретном случае размер
              ФПЗ индивидуален.
            </p>
          </article>
          <div className={styles.content}>
            <h2>Документы:</h2>
            <div className={styles.documents}>
              <a href="/contract.pdf" download className={styles.document}>
                <Pdf />
                <div className={styles.description}>
                  <span className={styles.name}>Договор на оказание услуги</span>
                  <span className={styles.info}>PDF, 180 KB</span>
                </div>
              </a>
{/*               <a href="/contract.pdf" download className={styles.document}>
                <Pdf />
                <div className={styles.description}>
                  <span className={styles.name}>Реквизиты</span>
                  <span className={styles.info}>PDF, 180 KB</span>
                </div>
              </a> */}
              <a href="/doc.pdf" download className={styles.document}>
                <Pdf />
                <div className={styles.description}>
                  <span className={styles.name}>Свидетельство о регистрации</span>
                  <span className={styles.info}>PDF, 110 KB</span>
                </div>
              </a>
              <a href="/policy.pdf" download className={styles.document}>
                <Pdf />
                <div className={styles.description}>
                  <span className={styles.name}>Политика конфиденциальности</span>
                  <span className={styles.info}>PDF, 49 KB</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
