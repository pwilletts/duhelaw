import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const reviews = require('../data/reviews.json')

class ReviewsWidget extends React.Component {
    setClasses(review){
        if(review.start){
            return "carousel-item active";
        } else {
            return "carousel-item";
        }
    }

    render() {
      return (
          <div className="col-12 margin-section">
                <div className="col-xl-10 col-lg-10 col-md-11 col-11 text-center mr-auto ml-auto">
                    <h2>Five Star Representation</h2>
                </div>       
                <div className="col-xl-10 col-lg-10 col-md-11 col-11 mr-auto ml-auto" style={{height:200,}}>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <div className="col-xl-10 col-lg-11 col-12 mr-auto ml-auto">
                            <div class="carousel-inner text-center review-div">
                                {reviews.map(review => {
                                    return(
                                        <div className={this.setClasses(review)}>
                                        <h5 className="review-text">{review.text.slice(0,300)}</h5>
                                        <div style={{textAlign:'center'}}>
                                            <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                                            <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                                            <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                                            <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                                            <FontAwesomeIcon className="star" icon="star" style={{fontSize:18}}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>                
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
          </div>
        
      );
    }
  }
  
  export default ReviewsWidget;