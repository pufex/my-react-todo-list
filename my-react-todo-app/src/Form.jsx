import { useState } from "react";

function Form(props){
    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask(name)
        setName("");
    }

    const [name, setName] = useState("")

    return <>
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="note-name" 
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" id="submit">
                Submit
            </button>
        </form>
    </>;
}

export default Form;