import React from 'react'
import ReviewCard from '../components/ReviewCard'
const reviews = require('../data/reviews.json')

class About extends React.Component {
    render() {
      return (
          <div className="col-11 col-xl-9 col-lg-10 col-md-10 mr-auto ml-auto margin-section-extra">
            <div className="col-12 row">
                <h2>Our Recent Reviews</h2>
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
            <button type="button" class="btn btn-lg btn-primary flt-btn">Leave a Review</button>
        </div>
      );
    }
  }
  
  export default About;