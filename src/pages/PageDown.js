import Header from "../components/Header";

const PageDown = (props) => {
    return (
        <div className="login-container">
            <Header />
            <section className="login">
                <h1 className="headline">
                    {(props.type === "404")
                        ? "404 Error - page not found."
                        : "Something went wrong"}
                </h1>
                <p className="sub-head">Seems like someone didn’t study hard enough in programming class! <br /> Please press the refresh button and everything should be fine again.  </p>
                <button className="btn-lrg btn-blk">REFRESH</button>
            </section>
        </div>

    );
}

export default PageDown;