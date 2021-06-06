import React from 'react';
import {connect} from "react-redux";
import {onMessageChange, sendMessage} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 const dispatch = store.dispatch.bind(store);
//                 return <Dialogs
//                     onMessageChangeHandler={event => dispatch(onMessageChange(event.target.value))}
//                     sendMessageHandler={() => dispatch(sendMessage())}
//                     dialogsPage={store.getState().dialogsPage}
//                 />
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChangeHandler: (value) =>{
            console.log(value);
            dispatch(onMessageChange(value))
        },
        sendMessageHandler: () => dispatch(sendMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);