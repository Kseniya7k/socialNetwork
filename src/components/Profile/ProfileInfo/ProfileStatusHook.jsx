import React, {useEffect, useState} from 'react';
import s from './profileStatusHook.module.css'

const ProfileStatusHook = (props) => {
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <>
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode } className={s.status}>{ props.status || "No status" }</span>
                </div>
                }
                { editMode &&
                <div>
                    <input onChange={ onStatusChange }
                           className={s.status}
                           autoFocus={true}
                           onBlur={ deActivateEditMode }
                           value={status}/>
                </div>
                }
            </div>
        </>
    )
}

export default ProfileStatusHook;