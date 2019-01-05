import React from 'react'

class ReviewCard extends React.Component {
    render() {
      return (
        <div class="card p-3">
            <blockquote class="blockquote mb-0 text-center">
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