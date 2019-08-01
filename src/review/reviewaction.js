import React from 'react';
import ReviewAuthor from './reviewauthor';

class ReviewActions extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            like: parseInt(this.props.like),
            unlike: parseInt(this.props.unlike)
        }

        this.increaseLike = this.increaseLike.bind(this)
        this.decreaseLike = this.decreaseLike.bind(this)

    }
increaseLike = function(){
    console.log("Increase called");
    this.setState({like: this.state.like + 1})
}

decreaseLike = function(){
    console.log("Decrease like");
    this.setState({unlike: this.state.unlike - 1})
}

    render() { 
        return (  
            <div>
                <button onClick={this.increaseLike}>+  {this.state.like} + </button>
                &nbsp;
                <button onClick={this.decreaseLike}>- {this.state.unlike}  - </button>
                 <ReviewAuthor user={this.props.un}></ReviewAuthor>
                 <hr></hr>
            </div>
        );
    }
}
 
export default ReviewActions;