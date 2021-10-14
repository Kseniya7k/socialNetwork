import React from 'react';
import s from './friends.module.css'
import userPhoto from "../../img/ava_no_photo.jpg";
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = ['1', '2', '3', '4', '...', pagesCount];

    return (
        <div className={s.bodyFriends}>
            <div className={s.pages}>
                {pages.map(p =>
                    <span className={props.page === p && s.selectedPage}
                          onClick={e => {
                              props.onPageChanged(p)
                          }}>{p}</span>
                )}
            </div>
            {props.friends.map(friend => {
                return (
                    <div className={s.barFriends}>
                        <div className={s.avatar}>
                            <img src={friend.photos.large != null ? friend.photos.large : userPhoto}
                                 alt={'картинка пользователя'}/>
                            <div>
                                {friend.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === friend.id)}
                                            onClick={() => {
                                                props.unfollow(friend.id)
                                            }}>Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === friend.id)}
                                            onClick={() => {
                                                props.follow(friend.id)
                                            }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={s.infaBoxFriends}>
                            <h4>{friend.name}</h4>
                            <div className={s.statusBar}>{friend.status != null ?
                                friend.status : 'Пользователь ещё ничего не написал в своём статусе'}
                            </div>
                            <NavLink to={'/dialogs/' + friend.id}>
                                <p>Написать сообщение</p>
                            </NavLink>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Friends;