import { FC, useEffect } from "react";
import { AccordionSeason } from "../../ui/accordion/accordion";
import { Breadcrubs } from "../../ui/breadcrubs/breadcrubs";
import { Season, seasonsData } from "./seasons-data";
import styles from "./seasons.module.css";

export const Seasons: FC<{ season: Season }> = ({ season }) => {
  const data = seasonsData[season];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [season]);

  return (
    <section className={styles.season}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <Breadcrubs current={data.name} />
          <h1>Куда поехать {data.when}?</h1>
          <p className={styles.intro}>
            Ориентируясь на опыт бывалых туристов мы составили список лучших стран для путешествий в {data.which} период.
            Если вам нужно более детальное руководство по направлениями курортам, помощь в выборе тура или подборка с
            актуальными предложениями и ценами, в «Талос Тур» всегда готовы вам помочь: просто заполните форму обратной
            связи, или свяжитесь с нами по телефону или в любом удобном для вас мессенджере.
          </p>
          <AccordionSeason countries={data.countries} />
        </div>
      </div>
    </section>
  );
};

