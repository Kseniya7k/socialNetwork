import React from "react";
import s from "./findUsers.module.css";
import userPhoto from "../../img/ava_no_photo.jpg";
import {NavLink, Redirect} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '...', pagesCount];

    // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={e => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(usr => {
                return (
                    <div key={usr.id} className={s.barUsers}>
                        <div>
                            <NavLink to={'/profile/' + usr.id}>
                                <img src={usr.photos.large != null ? usr.photos.large : userPhoto}
                                     className={s.imgAvaUser}
                                     alt={'картинка пользователя'}/>
                            </NavLink>
                            {usr.followed ?
                                <button disabled={props.followingInProgress.some(id => id === usr.id)}
                                        onClick={() => {
                                            props.unfollowThunkCreator(usr.id)
                                        }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === usr.id)}
                                        onClick={() => {
                                            props.followThunkCreator(usr.id)
                                        }}>Follow</button>
                            }
                        </div>
                        <div className={s.usersInfo}>
                            <div>
                                <div className={s.userName}>{usr.name}</div>
                                <div className={s.userStatus}>{usr.status != null ?
                                    usr.status : 'Пользователь ещё ничего не написал'}</div>
                            </div>
                            <div className={s.mesto}>
                                {/*<div className={s.userCountry}>{usr.location.country},</div>*/}
                                {/*<div className={s.userCity}> {usr.location.city}</div>*/}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Users;