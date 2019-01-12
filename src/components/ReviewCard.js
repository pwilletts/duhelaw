import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class ReviewCard extends React.Component {
    render() {
      return (
        <div class="card p-3">
            <blockquote class="blockquote mb-0 text-center">
            <div style={{paddingBottom:20}}>
                <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
            </div>
            <p>{this.props.review.text}</p>
            <footer class="blockquote-footer">
                <small class="text-muted">
                    {this.props.review.name}
                </small>
            </footer>
            </blockquote>
        </div>
      );
    }
  }
  
  export default ReviewCard;