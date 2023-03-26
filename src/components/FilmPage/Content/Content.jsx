import React from 'react'
import styles from './Content.module.css'
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Content() {
  return (
    <div className={styles.content_div}>
        <div className={styles.filmInfo_div}>
            <img src="./film.jpg" alt="" />
            <div className={styles.filmDesc_div}>
                <h2>Правила стрима</h2>
                <p>2022 год | 2ч 25мин | Россия | HD | 16+</p>
            <NavLink to={"/video"}  >
                <button className={styles.btn_watch}>Смотреть</button>
            </NavLink>
            </div>
        </div>

        <div className='description_div'>
            <h2>Описание</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, illum. Sit, sed? Error sequi quae explicabo, obcaecati saepe hic quas itaque, velit minus vel sed consectetur iste sapiente necessitatibus? Laudantium sit, rem itaque, autem fugiat quidem placeat molestias esse eligendi maiores expedita id atque corrupti numquam velit! Molestias, non fugit?</p>
        </div>
    </div>
  )
}
