import React from 'react';

class FirstComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>{this.props.mytitle}!</h1>
                <h4>Hello!!!! {this.props.children}</h4>
            </div>
         );
    }
}
 
export default FirstComponent;