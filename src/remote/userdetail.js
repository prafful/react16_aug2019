import React from 'react';


class UserDeatil extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>{this.props.name} with {this.props.un}</div>
         );
    }
}
 
export default UserDeatil;
