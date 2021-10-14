import s from "../PageUser/pageUser.module.css";
import userPhoto from "../../../img/ava_no_photo.jpg";
import ProfileStatusHook from "../ProfileInfo/ProfileStatusHook";
import React, {useEffect, useState} from "react";
import {usersProfileAPI} from "../../../api/api";

const PageUser = (props) => {
    const [followed, setFollowed] = useState(false);
    const {status, updateStatus, isFollowingDisabled, userId, profile, follow, unfollow} = props;
    const {contacts, photos, aboutMe, lookingForAJobDescription, fullName} = profile;
    const aboutUser = `Обо мне: ${aboutMe}`;
    const forAJobDescription = `Для работодателей: ${lookingForAJobDescription}`;

    useEffect(async () => {
        const newFollowed = await usersProfileAPI.getUserFriend(userId);
        setFollowed(newFollowed);
    }, [isFollowingDisabled])

    return (
        <div>
            <div className={s.profileUserBlock}>
                <div className={s.profileUserBlockAvaAndButton}>
                    <img src={photos.large != null ? photos.large : userPhoto}
                         alt={'картинка пользователя'}
                         className={s.profileAva}/>
                    {followed ?
                        <button disabled={isFollowingDisabled}
                                onClick={() => unfollow(userId)}
                                className={s.button}>Unfollow</button>
                        :
                        <button disabled={isFollowingDisabled}
                                onClick={() => follow(userId)}
                                className={s.button}>Follow</button>
                    }
                </div>
                <div className={s.userNameAndStatusAndAboutMe}>
                    <h1 className={s.profileNameUser}>{fullName}</h1>
                    <ProfileStatusHook status={status}
                                       updateStatus={updateStatus}/>
                    <h3 className={s.profileAboutMe}>{aboutMe != null ? aboutUser : null }</h3>
                </div>
            </div>
            <div className={s.blockInfo}>
                <h3>Мои соц сети для связи:</h3>
                {Object.keys(contacts).map(key =>
                {
                    if (contacts[key] != null) {
                        return <div>
                            <h4 className={s.profileInfo}>{`${key}: ${contacts[key]}`}</h4>
                        </div>
                    } else {
                        return <h4>{`${key}: пользователь пока не добавил данные`}</h4>
                    }
                }
                )}
                <h3>{lookingForAJobDescription != null ? forAJobDescription : null}</h3>
            </div>
        </div>
    );
}

export default PageUser;