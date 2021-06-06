import React from 'react';
import s from './findUsers.module.css'

const FindUsers = (props) => {
    if(props.users.length === 0) {
        props.setUser([{id: 1, followed: true, nickName: 'Александра',
            photo: 'https://i.pinimg.com/474x/da/16/c6/da16c67bae91d887360ef82a83e4ffcf.jpg',
            status: 'Хочу тепла и шоколадку :) ', location:
                {city: 'Воронеж', country: 'Россия'}},
            {id: 2, followed: true, nickName: 'Анастасия',
                photo: 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/kartinki-dlya-srisovki-kotiki-8.jpg',
                status: 'Муррр :) ', location:
                    {city: 'Воронеж', country: 'Россия'}},
            {id: 3, followed: true, nickName: 'Артём', photo: 'https://klike.net/uploads/posts/2019-07/1564314090_3.jpg',
                status: 'Лучший программист на свете!', location:
                    {city: 'Старый-Оскол', country: 'Россия'}},
            {id: 4, followed: true, nickName: 'Валентина',
                photo: 'https://img5.goodfon.ru/wallpaper/nbig/0/48/koshka-kotionok-mat-fon-britanskie-koshki.jpg',
                status: 'Чем бы поднять настроение? :3 ', location:
                    {city: 'Воронеж', country: 'Россия'}},
            {id: 5, followed: true, nickName: 'Ирина',
                photo: 'https://i.pinimg.com/originals/db/df/e4/dbdfe42e04a183303daf087f0b4418c7.jpg',
                status: 'Жить нужно так, чтобы депрессия была у других ', location:
                    {city: 'Воронеж', country: 'Россия'}},
            {id: 6, followed: true, nickName: 'Николай',
                photo: 'https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/10/kartinki-kotyat-dlya-srisovki-1.jpg',
                status: 'Подумай, прежде чем написать мне', location:
                    {city: 'Воронеж', country: 'Россия'}},
            {id: 7, followed: true, nickName: 'Екатерина',
                photo: 'https://image.freepik.com/free-vector/cartoon-cute-valentines-day-cat-and-love-vector_39961-924.jpg',
                status: 'Сегодня теплооо :3', location:
                    {city: 'Воронеж', country: 'Россия'}},
            {id: 8, followed: false, nickName: 'Альбина',
                photo: 'https://i.pinimg.com/236x/54/a9/60/54a96034d3b92fc35295c158f656a2a1--pusheen-cat-cartoon-cats.jpg',
                status: 'Да когда уже будет солнце!', location:
                    {city: 'Санкт-Петербург', country: 'Россия'}}
            ]
        )
    }

    return (
        <div>
            <h3>Пользователи</h3>
            {props.users.map(usr => {
                return (
                    <div key={usr.id} className={s.barUsers}>
                        <div>
                            <img src={usr.photo} className={s.imgAvaUser} alt={'картинка пользователя'}/>
                            {usr.followed ?
                                <button onClick={() => props.unfollow(usr.id)}>Unfollow</button>
                                :
                                <button onClick={() => props.follow(usr.id)}>Follow</button>
                            }
                        </div>
                        <div className={s.usersInfo}>
                            <div>
                                <div className={s.userName}>{usr.nickName}</div>
                                <div className={s.userStatus}>{usr.status}</div>
                            </div>
                            <div className={s.mesto}>
                                <div className={s.userCountry}>{usr.location.country},</div>
                                <div className={s.userCity}> {usr.location.city}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default FindUsers;