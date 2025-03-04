import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserStatus } from "../../../redux/mainPageReducer"; 

const ProfileStatus = (props) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        if (status !== props.status) {
            setStatus(props.status);
        }
        console.log("Компонент обновился!");
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
       
        if (props.authUserId === props.profileId) {
            dispatch(updateUserStatus(status));
        }
    };

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
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
