import React from 'react'
import styles from "./FilmPage.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
import Header from '../Header';
import Content from './Content';
export default function FilmPage() {
  return (
    <div className={styles.filmPage_div}>
       <Header/>
       <Content/>
    </div>
  )
}
