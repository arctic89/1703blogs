import React from "react";
import styles from "./mainPage.module.css";

export default function MainPage() {
  return (
    <>
      <h1 className={styles.hero_title}>1703 Life Style</h1>
      <section className="container">
        <div className={styles.hero}>
          {/* <span className={styles.text}>
            Привет, Это 1703! И такой заголовок у нас неспроста. 1703 это для
            тех кто живёт музыкой, для тех кто дышит музыкой, для тех кто не
            может прожить без колебаний динамиков ни дня.
          </span> */}
          <span className={styles.text}>
            Сайт находится в разработке!
          </span>
        </div>
      </section>
    </>
  );
}
