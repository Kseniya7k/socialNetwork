import React from 'react';
import s from './profileInfo.module.css';
import fon from "../../../img/fon.jpg";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileImg}>
                <img src={fon}/>
            </div>
            <div className={s.descriptionBlock}>
                <img/>
            </div>
        </div>
    )
}

export default ProfileInfo;