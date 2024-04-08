import React, { useState } from "react";

const Todo = (props) => {

    // 매개변수 -> (itme, setItem): 상태변수, 상태변수를 업데이트해주는 함수
    const [item, setItem] = useState(props.item);

    let output = <div className="Todo">
        <input 
            type="checkbox" 
            id={item.id} 
            name={item.id}
            checked={item.done}
        />
        <label for={item.id}>{item.title} </label>
    </div>

    return output;
}

export default Todo;