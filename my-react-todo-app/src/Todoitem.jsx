import { useState } from "react";



function Todoitem(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    function handleChange(e){
        setNewName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    let checked = "todo-control mark-item";
    if(props.checked === true)
        checked+=" active--mark";

    const viewTemplate = <>
        <div className="todo">
            <div className="todo-controls">
                <button 
                    className={checked}
                    onClick={() => {
                            props.toggleTaskCompleted(props.id)
                        }
                    }
                >
                </button>
                <label className="label">{props.name}</label>
            </div>
            <div className="todo-controls">
                <button
                    className="todo-control edit-item"
                    onClick={() => {
                            setEditing(true)
                        }
                    }
                >
                    ✎
                </button>
                <button 
                    className="todo-control delete-item"
                    onClick={() => {
                            props.deleteTask(props.id);
                        }
                    }
                >
                    🗑
                </button>
            </div>
        </div>
    </>;

    const editView = <>
        <form className="todo" onSubmit={handleSubmit}>
            <div className="todo-controls">
                <button 
                    className={checked}
                    onClick={() => {
                            props.toggleTaskCompleted(props.id)
                        }
                    }
                >
                </button>
                <input 
                    type="text" 
                    placeholder="New name" 
                    className="name-input"
                    onChange={handleChange}
                    value={newName}
                />
            </div>
            <div className="todo-controls">
                <button
                    className="todo-control discard-change"
                    onClick={() => {
                            setEditing(false);
                        }
                    }
                >
                    ✖
                </button>
                <button 
                    type="submit"
                    className="todo-control accept-change"
                >
                    ✔
                </button>
            </div>
        </form>
    </>
    if(isEditing == false) return viewTemplate;
    else return editView ;
}

export default Todoitem;