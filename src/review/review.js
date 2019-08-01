import React, {Component} from 'react';
import ReviewTitle from './reviewtitle';
import ReviewDescription from './reviewdescription';
import ReviewActions from './reviewaction';

class ReviewComponent extends Component {
    state = {  }
    render() { 
        return ( <div>
                    <h4>Review</h4>
                    <ReviewTitle titlecolor={this.props.titleColor}></ReviewTitle>
                    <ReviewDescription></ReviewDescription>
                    <ReviewActions 
                        like={this.props.like} 
                        unlike={this.props.unlike}
                        un={this.props.username}>
                    </ReviewActions>
                </div> 
            );
    }
}
 
export default ReviewComponent;