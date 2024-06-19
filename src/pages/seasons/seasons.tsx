import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Breadcrubs } from "../../ui/breadcrubs/breadcrubs";
import styles from "./seasons.module.css";

export const Seasons = () => {
  const { seasons } = useAppSelector((state) => state.seasons);
  const [season, setSeason] = useState("Весна");

  useEffect(() => {
    const seasonMappings: {
      [key: string]: string;
    } = {
      spring: "Весна",
      summer: "Лето",
      fall: "Осень",
      winter: "Зима",
    };

    if (seasonMappings[seasons]) {
      setSeason(seasonMappings[seasons]);
    }
  }, [seasons]);

  return (
    <section className={styles.season}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <Breadcrubs current={season} />
        </div>
      </div>
    </section>
  );
};
