import React from 'react';

class ReviewTitle extends React.Component {
    state = {  }
    render() { 
        let titleStyle = {
            color:"red",
            borderBottom:"1px solid purple"
        }
        return (  
        
                <p style={titleStyle}>Review Title</p>
    
        );
    }
}
 
export default ReviewTitle;