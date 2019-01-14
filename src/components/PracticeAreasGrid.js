import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
          <div className="margin-section">
                <div className="col-xl-10 col-11 mr-auto ml-auto text-center practice-area-head">
                    <h2>We provide representation in the following criminal law areas:</h2>
                </div>                   
                <section class="card-body col-xl-8 col-lg-8 col-md-10 col-sm-11 col-11 mr-auto ml-auto">
                    <div class="card-deck">
                        <Link to={`/invoices`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                            <div class="card-body text-center">
                                <h5 class="card-title">Violent Felonies</h5>
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
                                <h5 class="card-title">Misdemeanors</h5>
                                {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                            </div>
                        </Link>
                        <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                            <div class="card-body text-center">
                                <h5 class="card-title">DWI</h5>
                                {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                            </div>
                        </Link>
                        <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
                            <div class="card-body text-center">
                                <h5 class="card-title">Traffic Violations</h5>
                                {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                            </div>
                        </Link>
                    </div>
                    <div class="card-deck">
                        <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                            <div class="card-body text-center">
                                <h5 class="card-title">Domestic Violence</h5>
                                {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                            </div>
                        </Link>
                        <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                            <div class="card-body text-center">
                                <h5 class="card-title">Property Crimes</h5>
                                {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                            </div>
                        </Link>
                        <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                            <div class="card-body text-center">
                                <h5 class="card-title">Expunctions</h5>
                                {/* <p class="card-text">Update address, contact, W9, or payment information</p> */}
                            </div>
                        </Link>
                    </div>
                </section>
          </div>
      );
    }
  }
  
  export default Home;