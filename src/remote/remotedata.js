import React from 'react';
import axios from "axios";
import UserDeatil from './userdetail';


class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }
    
    componentWillMount(){
        this.getRemoteData()
    }

    getRemoteData = function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                console.log(response.data);
                this.setState({users: response.data})
                console.log(this.state.users);
            })
    }

    displayAllUsers = function(){
        return this.state.users.map((user)=>{
            return <UserDeatil
                            key={user.id}
                            name={user.name}
                            un={user.username}
                     ></UserDeatil>
        })
    }

    render() { 
        return ( 
            <div>
               {this.displayAllUsers()}
            </div>
         );
    }
}
 
export default RemoteData;