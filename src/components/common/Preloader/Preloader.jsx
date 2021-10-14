import React from "react";
import loader from "../../../img/loader.svg";
import s from "./preloader.module.css"

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={loader} alt={'Загрузка'}/>
        </div>
    )
}
export default Preloader;