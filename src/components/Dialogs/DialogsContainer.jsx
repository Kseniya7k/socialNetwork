import {connect} from "react-redux";
import {sendMessage} from "../../redux/dialogsReducer";
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
        sendMessageHandler: (massageText) => dispatch(sendMessage(massageText))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)