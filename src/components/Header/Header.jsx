import React from 'react'
import styles from "./Header.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header_div}>
        <div className={styles.chapters_div}>
            <img src="./kion_logo.svg" alt="kion_logo" className={styles.logo} />
            
            <NavLink to={"/"} id={styles.navLink} className={styles.chapterLink}>
                <p>Главная</p>
            </NavLink>

            <NavLink to={"/channels"} id={styles.navLink} className={styles.chapterLink}>
                <p>Телеканалы</p>
            </NavLink>

            <NavLink to={"/films"} id={styles.navLink} className={styles.chapterLink}>
                <p>Фильмы</p>
            </NavLink>

            <NavLink to={"/serials"} id={styles.navLink} className={styles.chapterLink}>
                <p>Сериалы</p>
            </NavLink>
        </div>

    <input type="text" placeholder='Поиск' className={styles.search} />

    <NavLink to={"/profile"} id={styles.navLink} className={styles.profileLink}>
        <img src="./profile.svg" alt="profile_img" />
    </NavLink>
</div>
  )
}
