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
                    </div>
                </div>
            </div>
      );
    }
  }
  
  export default Home;