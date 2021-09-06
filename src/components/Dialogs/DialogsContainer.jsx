import React from 'react';
import {connect} from "react-redux";
import {onMessageChange, sendMessage} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)