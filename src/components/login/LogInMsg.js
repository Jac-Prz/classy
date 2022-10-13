const LogInMsg = (props) => {
    return (
        <div>
            <h1 className="headline">
                {props.heading}
            </h1>
            <p
                className="sub-head"
                style={{ color: props.error ? "#FF0000" : "#949EA8" }}
                aria-live={props.error ? "assertive" : "off"}
            >
                {props.msg}
            </p>
        </div>
    );
}

export default LogInMsg;