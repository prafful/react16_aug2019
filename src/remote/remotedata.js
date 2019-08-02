import React from 'react';
import axios from "axios";
import UserDetail from './userdetail';

class RemoteData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    
componentWillMount(){
    this.getData()
}


successFunction = function(response){
    console.log(response.data);
}

errorFunction = function(){

}

getData = function(){
    axios.get("http://localhost:3000/freinds")
            .then((response)=>{
                console.log(response.data);
                this.setState({users: response.data})
                console.log("Resoponse.data is assigned to this.state.users ");
                console.log(this.state.users);
            }, (response)=>{
                console.log(response);
            })
}

displayAllUsers = function(){
    return this.state.users.map((user)=>{
        return (
            <UserDetail
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                zipcode={user.address.zipcode}
                lat={user.address.geo.lat}
                lng={user.address.geo.lng}
            ></UserDetail>
            )
    })
}


    render() { 
        return (  
            <span>
                        <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Zip</th>
                                <th>Lat</th>
                                <th>Lng</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.displayAllUsers()}
                        </tbody>
                    </table>
            
            </span>
            
        );
    }
}
 
export default RemoteData;