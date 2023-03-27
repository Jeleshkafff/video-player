import React from "react";
import styles from "./Content.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Checkbox, SvgIcon } from "@mui/material";
export default function Content() {
  return (
    <div className={styles.content_div}>
      <div className={styles.filmInfo_div}>
        <img src="./film.jpg" alt="" />
        <div className={styles.filmDesc_div}>
          <h2>Правила стрима</h2>
          <p>2022 год | 2ч 25мин | Россия | HD | 16+</p>
          <NavLink to={"/video"}>
            <button className={styles.btn_watch}>Смотреть</button>
          </NavLink>
          <div>
            <h5>⚠ В этом фильме присутствуют эпилептические сцены</h5>
            <div>
              {/* <input className={styles.Paw} type="checkbox" /> */}
              <Checkbox
                color="default"
                className={styles.Checkbox}
                // icon={
                //   <SvgIcon
                //     fill="none"
                //     viewBox="0 0 1280 1280"
                //     className={styles.icon}
                //   ></SvgIcon>
                // }
                checkedIcon={
                  <SvgIcon viewBox="0 0 1280 1280" className={styles.icon}>
                    <path d="M461.5 32.4a85.2 85.2 0 0 0-43.6 25.5A141.1 141.1 0 0 0 390 97c-47.7 95.4-31.6 252.8 35.3 343a210.6 210.6 0 0 0 35.7 36.6c35.4 26.7 75.2 28.1 107.1 3.8 32.7-25 55.1-73.2 63.6-136.9 2.1-16.4 2.5-67.2.5-84-8.2-70.2-29.1-128.3-61.8-172.2a223.7 223.7 0 0 0-34.4-35 139.5 139.5 0 0 0-36.5-18.8c-8.3-2.3-30.2-2.9-38-1.1zM854.6 52.6c-31.1 6.1-63.6 29.9-90.5 66.1-34.6 46.5-58 108-66.8 175.8-2.8 21.6-2.5 69.8.5 89.4 7 44.7 21.9 78.9 44.2 101.1a80.9 80.9 0 0 0 67.5 25.2c58.1-7.2 115.4-70.6 146-161.6 25.4-75.5 28.1-155 7.3-215.6-20.3-59.1-61.5-89.7-108.2-80.4zM209.5 379c-40.9 6.5-71.7 39.5-85.6 91.9-7.9 30.1-9 71.6-2.8 108.1 14.3 85 63.5 163.1 121.7 193.3 29.8 15.4 59.5 18.1 85 7.5 37.6-15.6 62.3-56 70.4-115.3 1.6-11.9 1.6-47.2-.1-61-13-110.2-80.9-206.9-156.4-223-8.9-1.9-24.7-2.6-32.2-1.5zM1057 460c-36 7.7-71.3 33-100.6 72.2A322.4 322.4 0 0 0 897 686.4c-1.6 14.6-1.3 46 .5 60.1 12.2 94.8 76.6 140.3 149.5 105.9 39.1-18.5 74.5-56.6 99.8-107.3 48-96 44.9-208.5-7.3-260.6-22-22-52.3-31-82.5-24.5zM622.5 637.9c-66.2 11.8-149.7 81.3-223.7 186.1-57.9 82.1-98.7 170.5-110.9 240.5a208.1 208.1 0 0 0-.6 58.3 75.7 75.7 0 0 0 24.4 42.2 147.3 147.3 0 0 0 83 37.6c17.5 2.4 52.9 1.5 75.4-1.9 30.1-4.7 55.5-10.8 112.4-27.2 55-15.8 70.4-19.1 85.6-18.1 19.3 1.3 33.8 6 75.4 24.3a383.6 383.6 0 0 0 60.6 22.8c53 12.8 97.6-3.9 143.5-53.7 13.7-14.8 17.9-22 22.2-37.7 2.4-9 2.6-11 2.6-32.1 0-19.1-.3-24.5-2.3-35.5-11.8-66.7-46.9-147.3-97.6-224-60.3-91.2-131.1-156.9-190.2-176.4a117 117 0 0 0-59.8-5.2z" />
                  </SvgIcon>
                }
              ></Checkbox>

              <h5>Убрать эпилептические сцены</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="description_div">
        <h2>Описание</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          illum. Sit, sed? Error sequi quae explicabo, obcaecati saepe hic quas
          itaque, velit minus vel sed consectetur iste sapiente necessitatibus?
          Laudantium sit, rem itaque, autem fugiat quidem placeat molestias esse
          eligendi maiores expedita id atque corrupti numquam velit! Molestias,
          non fugit?
        </p>
      </div>
    </div>
  );
}
