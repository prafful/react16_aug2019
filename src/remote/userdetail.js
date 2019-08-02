import React from 'react';

class UserDetail extends React.Component {
    state = {  }
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td> 
                <td>{this.props.username}</td>
                <td>{this.props.zipcode}</td>
                <td>{this.props.lat}</td>
                <td>{this.props.lng}</td>
            </tr>
         );
    }
}
 
export default UserDetail;