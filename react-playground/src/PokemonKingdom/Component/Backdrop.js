
function Backdrop(props){
    const {children, onClose} = props;
    return (
        <div
            id="backdropContainer"
            onClick={(event) => {
                const element = event.target;
                const id = element.id;
                if(id === "backdropContainer"){
                    onClose();
                }
            }}
        style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(255,255,255,.4)",

            zIndex: 1000000,
            top:"0",
            left: "0",
        }}
        >
            <div id="children">{children}</div>
        </div>
    )
}
export default Backdrop;