import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

const Todo = (props) => {

    // 매개변수 -> (itme, setItem): 상태변수, 상태변수를 업데이트해주는 함수
    const [item, setItem] = useState(props.item);
    const[readOnly, setReadOnly] = useState(true);
    

    const editItem = props.editItem;
    const deleteItem = props.deleteItem;
    
    const deleteEventHandler = () => {
        deleteItem(item)
    }
    
    const editEventHandler = (e) => {
        item.title = e.target.value;
        editItem();
    }

    const turnOffReadOnly = () => {
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        if (e.key === 'Enter') {
            setReadOnly(true);
        }
    }

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem();
    }
    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
        <ListItemText>
            <InputBase
                inputProps={{ "aria-label": "naked", readOnly: readOnly }}
                onClick={turnOffReadOnly} 
                onKeyDown={turnOnReadOnly}
                onChange={editEventHandler}
                type="text"
                id={item.id}
                name={item.id}
                value={item.title}
                multiline={true}
                fullWidth={true}
            />
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={deleteEventHandler} >
                <DeleteOutlineOutlined />
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;