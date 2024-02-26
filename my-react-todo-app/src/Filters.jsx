function Filters(props){
    let buttonClass="filter";
    switch(props.name){
        default: break;
        case "All": 
            buttonClass+=" all-items";
            break;
        case "Checked": 
            buttonClass+=" checked-items";
            break;
        case "Unchecked": 
            buttonClass+=" unchecked-items";
            break;
    }

    return <>
            <button 
                className={buttonClass}
                onClick={() => {
                        props.setFilter(props.name);
                    }
                }
            >
                {props.name}
            </button>
    </>;
}
export default Filters;