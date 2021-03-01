import React from 'react';
import s from './friends.module.css'
import avatar from '../../img/ava_Artem.jpg'

const Friends = () => {
    return (
        <div className={s.barFriends}>
            <div className={s.avatar}>
                <img src={avatar}/>
            </div>
            <div className={s.namesFriends}>
                Артём
            </div>
        </div>
    )
}

export default Friends;