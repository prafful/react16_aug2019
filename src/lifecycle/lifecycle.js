import React from 'react';

class Lifecycle extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dummy: 0
        }
        this.changeDummy = this.changeDummy.bind(this)
    }


    componentWillMount(){
        console.log("Component will mount on page");
        //alert(2)
    }

    componentDidMount(){
        console.log("Component is mounted on page!");
    }

    componentWillUpdate(){
        console.log("Component will update now");
    }

    componentDidUpdate(){
        console.log("Component has updated");
    }

    componentWillUnmount(){}

    changeDummy = function(){
        this.setState({dummy : this.state.dummy+1})
    }
    
    render() { 
        return ( 
            <div>
            <button onClick={this.changeDummy}>{this.state.dummy}</button>
                <h1>Exploring component lifecycle!</h1>
               
            </div>
         );
    }
}
 
export default Lifecycle;