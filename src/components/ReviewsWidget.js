import React from 'react'
import {Link} from 'react-router-dom'

class ReviewsWidget extends React.Component {
    render() {
      return (
          <React.Fragment>
                <h2 style={{textAlign:'center'}}>Five Star Representation</h2>
                <div className="col-xl-10 col-lg-10 col-md-11 col-12 mr-auto ml-auto" style={{height:200,}}>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <div className="col-lg-10 col-12 mr-auto ml-auto">
                            <div class="carousel-inner text-center" style={{height:200}}>
                                <div class="carousel-item active">
                                    <h5>Jordan Duhe has been an excellent, over the top attorney. She's decicated to her job and her clients. I felt I was in good hands the moment I sat down and started explaining my situation. She's straightforward and honest. That's the beauty behind her and her work. No BS. I would recommend her to anyone who's dealing with the courts and needs legal help and advice.</h5>
                                </div>
                                <div class="carousel-item">
                                    <h5>Jordan has been wonderful in her representation for my son.  You can tell that she really cares about her clients.  Her legal knowledge and expertise is bar none - we knew what to expect throughout the whole process.  We consider ourselves very fortunate to have lucked into having her as our attorney.</h5>
                                </div>
                                <div class="carousel-item">
                                    <h5>Had the most troubling situation after a speeding ticket while heading to vacation in Myrtle Beach. In my search for help I stumbled upon Duhe Willets Law, and I MUST say that Jordan was beyond professional, helpful, & attentive. To going out of her way, with fast responding emails, Straight to the point answers and helpful solutions. To even responding at later then work hour emails. She was extremely helpful and managed to help me get my situation fixed as quick as possible! I am beyond thankful and hoping not to need to contact her again but will absolutely, if I’m ever in a bubble again!</h5>
                                </div>
                            </div>
                        </div>                
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
          </React.Fragment>
        
      );
    }
  }
  
  export default ReviewsWidget;