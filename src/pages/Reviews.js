import React from 'react'
import ReviewCard from '../components/ReviewCard'
const reviews = require('../data/reviews.json')

class About extends React.Component {
    render() {
      return (
          <div className="col-10 mr-auto ml-auto mt-4">  
            <div className="row col-12 mb-3" style={{paddingTop:80}}>
                <h2>Our Recent Reviews</h2> 
                <button type="button" class="btn btn-lg btn-primary ml-auto w-25">Leave a Review</button>
            </div>
            <div class="card-columns" style={{paddingBottom:50}}>
                {reviews.map(
                    review => {
                        return(
                            <ReviewCard review={review}/>
                        )
                    }
                )}
            </div>
        </div>
      );
    }
  }
  
  export default About;