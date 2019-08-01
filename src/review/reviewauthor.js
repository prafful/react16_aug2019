import React from 'react';

class ReviewAuthor extends React.Component {
    state = {  }
    render() { 
        return ( 
            <span>{this.props.user}</span>
         );
    }
}
 
export default ReviewAuthor;