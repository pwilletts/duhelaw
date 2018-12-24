import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
            <div className="col-12 row nopadding">
                <div className="col-12 header-img nopadding mb-4">
                    <div className="col-8 text-center mr-auto ml-auto">
                        <div class="jumbotron">
                            <h1 class="display-4 mt-3" style={{fontWeight:'bold'}}>Committed to Defending Your Rights</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4"></hr>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
                        </div>
                    </div>
                </div>         
                <div class="card-body col-12" style={{backgroundColor:'#c0c0c0'}}>
                    <div className="col-8 mr-auto ml-auto text-center" style={{color:"white"}}>
                        <h2>We provide representation in the following criminal law areas:</h2>
                    </div>                   
                    <div class="card-body col-5 mr-auto ml-auto">
                        <div class="card-deck">
                            <Link className="col-8" to={`/invoices`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Federal Crimes</h5>
                                    {/* <p class="card-text">View invoice status, payment date, or update invoice information.</p> */}
                                </div>
                            </Link>
                            <Link to={`/payments`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                                <div class="card-body text-center">
                                <h5 class="card-title">Drug Crimes</h5>
                                {/* <p class="card-text">View recent payments and remittance information.</p> */}
                                </div>
                            </Link>

                            <Link to={`/submit`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                                <div class="card-body text-center">
                                <h5 class="card-title">Sex Crimes</h5>
                                {/* <p class="card-text">Submit invoice copies, statements, or vendor documentation</p> */}
                                </div>
                            </Link>
                        </div>
                        <div class="card-deck">
                            <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Violent Felonies</h5>
                                    {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                                </div>
                            </Link>
                            <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Misdemeanors</h5>
                                    {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                                </div>
                            </Link>
                            <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                                <div class="card-body text-center">
                                    <h5 class="card-title">DWI Charges</h5>
                                    {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                                </div>
                            </Link>
                        </div>
                        <div class="card-deck">
                            <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Traffic Violations</h5>
                                    {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                                </div>
                            </Link>
                            <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Domestic Violence</h5>
                                    {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                                </div>
                            </Link>
                            <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Underage Drinking</h5>
                                    {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="col-8 mr-auto ml-auto text-center">
                        <h3>
                            Proudly serving Brunswick, New Hanover, and Pender Counties.
                        </h3>
                        <h4>
                            Whether you are a college student facing your first criminal charge, or you are facing a felony charge as a repeat offender, you can find the high-caliber defense you need at my Southeastern North Carolina defense firm. I am Jordan Duhe Willetts, a local attorney, ready to guard your every right so that you can move forward from this charge with your future intact.  We represent clients all through Southeastern North Carolina including Wilmington, Brunswick County and Pender County.
                        </h4>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn More</a>
                    </div>
                </div>
                <div className="col-12 mr-auto ml-auto mt-4">
                    <h3 style={{textAlign:'center'}}>Five Star Representation</h3>
                    <div className="col-10 mr-auto ml-auto" style={{height:200,border:'2px solid red',backgroundColor:'grey'}}>
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <div className="col-8 mr-auto ml-auto">
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
                </div>
            </div>
      );
    }
  }
  
  export default Home;