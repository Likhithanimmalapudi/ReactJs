import React from "react";

class Six extends React.Component{
    count = 0;
    name = "ReactJS";

    constructor() {
        super();
        this.state = {
            Number: 1
        };
        console.log("Constructor is called:");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
    }
    componentDidUpdate(){
        console.log("Component updated");
    }
    componentWillUnmount(){
        console.log("UnMounted");
    }
    funcEightBtnClk = ()=> {
        console.log("Button clicked");
        console.log(this.name+1);
        // update the state
        this.setState({Number: this.state.Number+1});
    }
    render(){
        return(
            <div>
                <h2>This is class component{this.name} {this.count} {this.state.Number}</h2>
                <button type="button" class="btn btn-primary" onClick = {this.funcEightBtnClk}>Button</button>

            </div>
        )
    }
}
export default Six;