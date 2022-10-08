const Input = (props) => {
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
            />
        </div>
    );
}
export default Input;