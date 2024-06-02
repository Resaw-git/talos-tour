import { useEffect, useState } from "react";
import styles from "./calendar.module.css";
import spring from "../../../../assets/images/calendar/spring.png";
import summer from "../../../../assets/images/calendar/summer.png";
import fall from "../../../../assets/images/calendar/fall.png";
import winter from "../../../../assets/images/calendar/winter.png";
import spring1 from "../../../../assets/images/calendar/spring1.png";
import summer1 from "../../../../assets/images/calendar/summer1.png";
import fall1 from "../../../../assets/images/calendar/fall1.png";
import winter1 from "../../../../assets/images/calendar/winter1.png";
import spring2 from "../../../../assets/images/calendar/spring2.png";
import summer2 from "../../../../assets/images/calendar/summer2.png";
import fall2 from "../../../../assets/images/calendar/fall2.png";
import winter2 from "../../../../assets/images/calendar/winter2.png";
import spring3 from "../../../../assets/images/calendar/spring3.png";
import summer3 from "../../../../assets/images/calendar/summer3.png";
import fall3 from "../../../../assets/images/calendar/fall3.png";
import winter3 from "../../../../assets/images/calendar/winter3.png";
import { Button } from "../../../../ui/button/button";


export const Calendar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {

    if (screenWidth > 1439) {
      setImages([spring, summer, fall, winter]);
      console.log(0)
    }

    if (screenWidth < 1439 && screenWidth > 1023) {
      setImages([spring1, summer1, fall1, winter1]);
      console.log(1)
    }

    if (screenWidth < 1023 && screenWidth > 767) {
      setImages([spring2, summer2, fall2, winter2]);
      console.log(2)
    }

    if (screenWidth < 767) {
      setImages([spring3, summer3, fall3, winter3]);
      console.log(3)
    }


  }, [screenWidth])

  return (
    <section className={styles.calendar}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <h1>Туристический календарь: куда поехать весной, летом, осенью и зимой?</h1>
          <p>
            Предлагаем наши сезонные рекомендации для путешествий — они разбиты по месяцам. Все советы основаны на
            статистике последних лет и личном опыте бывалых путешественников. Узнайте наверняка, где искупаться в конце
            осени и как спланировать насыщенный и бюджетный отпуск в начале весны.
          </p>
          <div className={styles.seasons}>
            <div className={styles.card}>
              <img className={styles.image} src={images[0]} alt="весна" />
              <h4>Весна</h4>
              <div className={styles.button}>
                <Button style={"dark"}>Узнать подробнее</Button>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.image} src={images[1]} alt="лето" />
              <h4>Лето</h4>
              <div className={styles.button}>
                <Button style={"dark"}>Узнать подробнее</Button>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.image} src={images[2]} alt="осень" />
              <h4>Осень</h4>
              <div className={styles.button}>
                <Button style={"dark"}>Узнать подробнее</Button>
              </div>
            </div>
            <div className={styles.card}>
              <img className={styles.image} src={images[3]} alt="зима" />
              <h4>Зима</h4>
              <div className={styles.button}>
                <Button style={"dark"}>Узнать подробнее</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
