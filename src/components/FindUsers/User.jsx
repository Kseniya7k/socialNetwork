import React from "react";
import s from "./user.module.css";
import userPhoto from "../../img/ava_no_photo.jpg";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.barUsers}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.large != null ? user.photos.large : userPhoto}
                         className={s.imgAvaUser}
                         alt={'картинка пользователя'}/>
                </NavLink>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}
                            className={s.button}>Unfollow
                    </button>
                    :
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}
                            className={s.button}>Follow
                    </button>
                }
            </div>
            <div className={s.usersInfo}>
                <div>
                    <div className={s.userName}>{user.name}</div>
                    <div className={s.userStatus}>{user.status != null ?
                        user.status : 'Пользователь ещё ничего не написал'}</div>
                </div>
            </div>
        </div>
    )
}

export default User;