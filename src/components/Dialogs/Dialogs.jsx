import React from 'react';
import s from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Massage/Message";
import ava from "../../img/ava_Artem.jpg"
import avaMe from "../../img/avaMe.jpg"

const Dialogs = (props) => {
    const { dialogsPage } = props;
    console.log({dialogsPage});
    let dialogsElements = dialogsPage.interlocutors
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    let messagesElements = dialogsPage.messages
        .map( m => <Message message={m.message} key={m.id}/> )

    const onMessageChange = (event) => {
        props.onMessageChangeHandler(event.target.value)
    };
    const sendMessage = () => props.sendMessageHandler();

    const isEmpty = !dialogsPage.newMessageText;
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>
                    <div className={s.dialog}>
                        <div>
                            <img className={s.avatar} src={ava} alt="Фото собеседника"/>
                        </div>
                        <div>{messagesElements}</div>
                        <div/>
                    </div>
                    <div className={s.dialogMe}>
                        <div/>
                        <div>Мои ответы</div>
                        <div>
                            <img className={s.avatar} src={avaMe} alt="Фото пользователя"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <textarea className={s.textarea}
                          value={dialogsPage.newMessageText}
                          onChange={onMessageChange}/>
                <div>
                    <button className={s.button} onClick={ sendMessage } disabled={isEmpty}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;