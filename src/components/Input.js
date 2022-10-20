import { useEffect, useRef } from "react";

const Input = (props) => {

    const inputEl = useRef(null);

useEffect(()=>{
if (props.initialRef){
    inputEl.current.focus();
}
}, [])

useEffect(()=>{
    if (props.error){
        inputEl.current.focus();
    }
    }, [props.error])

    return (
        <div>
            <label htmlFor={props.name}>
                {(props.value.length > 0) ? props.placeholder : ""}
            </label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                suggested={props.suggested && props.suggested}
                style={{ borderBottom: props.error ? "solid 1px #FF0000" : "solid 1px #C9CED3" }}
                className={props.cassName}
                autoComplete="off"
                ref={inputEl} 
            />
        </div>
    );
}
export default Input;