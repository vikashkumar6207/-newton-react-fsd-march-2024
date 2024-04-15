import { Component } from "react";

class CounterClassComponent extends Component {
    
    state = {
        count: 0,
    }

    increment(){
        // this.setState({
        //     ...this.state,
        //     count: 1
        // })

        this.setState((oldState) => {
            return {
                ...oldState,
                count: oldState.count + 1,
            }
        })
    }

    decerement(){
        // this.setState({
        //     ...this.state,
        //     count: -1
        // });
        this.setState((oldState) => {
            return {
                ...oldState,
                count: oldState.count - 1,
            }
        })
    }
    render(){

        return (
            <>
                <h1>{"Counter with ClassComponent"}</h1>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", gap:"10px"}}>
                    <div >{this.state.count}</div>
                    <div >
                        <button onClick={this.decerement.bind(this)} style={{margin: "10px", padding: "10px"}}>-</button>
                        <button onClick={this.increment.bind(this)} style={{margin: "10px", padding: "10px"}}>+</button>
                    </div>
                </div>
            </>
        )
    }
}
export default CounterClassComponent;