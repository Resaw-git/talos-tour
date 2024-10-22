import { useAppSelector } from "../../redux/hooks";
import { AccordionSeason } from "../../ui/accordion/accordion";
import { Breadcrubs } from "../../ui/breadcrubs/breadcrubs";
import styles from "./seasons.module.css";

export const Seasons = () => {
  const { seasons } = useAppSelector((state) => state.seasons);

  const transformSeason = (seasonForm: "what" | "when" | "which") => {
    const season = seasons || "spring";
    const result: {
      [key: string]: { what: string; when: string; which: string };
    } = {
      spring: { what: "Весна", when: "весной", which: "весенний" },
      summer: { what: "Лето", when: "летом", which: "летний" },
      fall: { what: "Осень", when: "осенью", which: "осенний" },
      winter: { what: "Зима", when: "зимой", which: "зимний" },
    };

    return result[season][seasonForm];
  };

  return (
    <section className={styles.season}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <Breadcrubs current={transformSeason("what")} />
          <h1>Куда поехать {transformSeason("when")}?</h1>
          <p>
            Ориентируясь на опыт бывалых туристов мы составили для вас список лучших стран, для путешествий в{" "}
            {transformSeason("which") + " "}
            период. Если вам нужно более детальное руководство по направлениями курортам, помощь в выборе тура или
            подборка с актуальными предложениями и ценами, в «Талос Тур» всегда готовы вам помочь: просто заполните{" "}
            <strong>форму обратной связи</strong>, или свяжитесь с нами по телефону или в любом удобном для вас
            мессенджере.
          </p>
          <AccordionSeason />
        </div>
      </div>
    </section>
  );
};
