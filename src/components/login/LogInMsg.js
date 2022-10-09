const LogInMsg = (props) => {
    return (
        <div>
            <h1 className="headline">
                {props.heading}
            </h1>
            <p className="sub-head">
                {props.msg}
            </p>
        </div>
    );
}

export default LogInMsg;