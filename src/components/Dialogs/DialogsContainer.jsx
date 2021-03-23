import React from 'react';
import {onMessageChange, sendMessage} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const dispatch = store.dispatch.bind(store);
                return <Dialogs
                    onMessageChangeHandler={event => dispatch(onMessageChange(event.target.value))}
                    sendMessageHandler={() => dispatch(sendMessage())}
                    dialogsPage={store.getState().dialogsPage}
                />
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;