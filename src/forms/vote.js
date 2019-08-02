import React from 'react';

class UserVote extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:""
        }

        this.getName = this.getName.bind(this)
    }

    getName = function(event){
        event.persist()
        console.log("Name Input Changing");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }
    
    render() { 
        return ( 
            <div>
                Name: <input type="text" value={this.state.name} onChange={this.getName}></input>
                <br></br>
                Vote: <input type="number"></input>
                <br></br>
                <button>Vote</button>
            </div>
         );
    }
}
 
export default UserVote;