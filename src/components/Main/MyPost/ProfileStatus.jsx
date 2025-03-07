import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserStatus } from "../../../redux/mainPageReducer";

const ProfileStatus = (props) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const isAuth = useSelector((state) => state.Auth.isAuth);
    
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        if (isAuth) {
            dispatch(updateUserStatus(status));
        }
        setEditMode(false);
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            {!editMode &&
                <div>
                   <span onDoubleClick={isAuth ? activateEditMode : undefined}>
                {props.status || "No status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input 
                        autoFocus={true} 
                        value={status} 
                        onChange={onStatusChange} 
                        onBlur={deactivateEditMode} 
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatus;
