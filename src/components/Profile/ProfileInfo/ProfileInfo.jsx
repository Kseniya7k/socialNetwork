import React from 'react';
import s from './profileInfo.module.css';
import fon from "../../../img/fon.jpg";

const ProfileInfo = ({profile}) => {
    if (!profile) {
        return (
            <div>
                <div>
                    <div className={s.profileImg}>
                        <img src={fon} alt={'фон страницы'}/>
                    </div>
                    <div className={s.descriptionBlock}>
                        <img/>
                    </div>
                </div>
            </div>
        )
    } else {
        const { contacts, photos, aboutMe, lookingForAJobDescription, fullName} = profile;
        return (
            <div>
                <img src={photos.large} alt={'картинка пользователя'}/>
                <h1>{fullName}</h1>
                <h3>Обо мне: {aboutMe}</h3>
                {Object.keys(contacts).map(key =>
                    <h4>{`${key}: ${contacts[key]}`}</h4>
                )}
                <p>Для работодателей: {lookingForAJobDescription}</p>
            </div>
        )
    }

}

export default ProfileInfo;