import React from 'react';
import s from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Massage/Message";
import ava from "../../img/ava_Artem.jpg"
import avaMe from "../../img/avaMe.jpg"

const Dialogs = (props) => {

    let dialogsElements = props.interlocutors
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messages
        .map( m => <Message message={m.message} /> )

    let TextNewMessage = React.createRef();

    let sendMessage = () => {
        let TextMessage = TextNewMessage.current.value;
    }
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
                    </div>
                    <div className={s.dialogMe}>
                        <div>Мои ответы</div>
                        <div>
                            <img className={s.avatar} src={avaMe} alt="Фото пользователя"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <textarea/>
                <div>
                    <button onClick={ sendMessage }>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;