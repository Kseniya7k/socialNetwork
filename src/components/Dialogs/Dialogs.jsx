import React from 'react';
import s from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Massage/Message";
import ava from "../../img/ava_Artem.jpg"
import avaMe from "../../img/avaMe.jpg"
import MassageForm from "./MassageForm";

const Dialogs = (props) => {
    const { dialogsPage } = props;
    let dialogsElements = dialogsPage.interlocutors
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    let messagesElements = dialogsPage.messages
        .map( m => <Message message={m.message} key={m.id}/> );

    // const isEmpty = !dialogsPage.newMessageText;

    const sendNewMassage = (values) => {
        props.sendMessageHandler(values.massageText)
    }
    return (
        <div className={s.bodyDialogs}>
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
            <MassageForm onSubmit={sendNewMassage}/>
        </div>
    );
}

export default Dialogs;