import s from "../WelcomePage/welcomePage.madule.css";
import fon from "../../../img/fon.jpg";
import React from "react";

const WelcomePage = () => {
    return (
        <div>
            <div>
                <div className={s.profileImg}>
                    <img src={fon} alt={'фон страницы'}/>
                </div>
                <div className={s.descriptionBlock}>
                    <h2>Добро пожаловать в CoffeeLike! Социальную сеть для поиска собеседника на обеденный
                        перерыв.</h2>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;