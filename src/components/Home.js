import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
            <div className="col-12 row nopadding">
                <div className="col-12 header-img nopadding mb-4">
                    <div className="col-xl-10 col-lg-12 col-12 text-center mr-auto ml-auto">
                        <div class="jumbotron">
                            <h1 class="display-4 mt-3" style={{fontWeight:'bold'}}>Committed to Defending Your Rights</h1>
                            <p class="lead">The criminal law specialists at Duhe Willetts Law PLLC will guide you through every step of your legal circumstance and continously advocate for your rights.</p>
                            <hr class="my-4"></hr>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
                        </div>
                    </div>
                </div>         
                <div class="card-body col-12" style={{backgroundColor:'#c0c0c0'}}>
                    <div className="col-xl-10 mr-auto ml-auto text-center" style={{color:"white"}}>
                        <h2>We provide representation in the following criminal law areas:</h2>
                    </div>                   
                    <div class="card-body col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12 mr-auto ml-auto">
                        <div class="card-deck">
                            <Link to={`/invoices`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer mb-2">
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
                    <div className="col-xl-9 col-lg-10 col-md-10 col-12 mr-auto ml-auto text-center">
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
                    <div className="col-xl-10 col-lg-10 col-md-11 col-12 mr-auto ml-auto" style={{height:200,border:'2px solid red',backgroundColor:'grey'}}>
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
                </div>
                <div className="col-lg-8 col-md-10 col-12 mr-auto ml-auto">
                    <div className="col-12 text-center">
                        <h4>Contact Now! Free Consultations!</h4>
                    </div>
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label for="inputEmail4">Name</label>
                          <input type="text" class="form-control" id="inputEmail4" placeholder="Jordan Duhe"></input>
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputPassword4">Contact #</label>
                          <input type="text" class="form-control" id="inputPassword4" placeholder="910-763-4323"></input>
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputPassword4">Email</label>
                          <input type="text" class="form-control" id="inputPassword4" placeholder="duhelaw@gmail.com"></input>
                        </div>
                      </div>
                      <div class="form-row">
                        <div className="form-group col-md-12">
                            <label for="textarea">Description</label>
                            <textarea className="form-control" id="textarea" rows='6'></textarea>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10 mr-auto ml-auto row mb-4">
                    <div className="col-12 text-center">
                        <h4>Proudly serving with locations in Brunswick and New Hanover Counties</h4>
                    </div>                   
                    <div className="col-6 text-center">
                        <h5>New Hanover County</h5>
                        <a href="https://goo.gl/maps/s9ssgHZejbB2" target="_blank">Click here to route!</a>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.319180913806!2d-77.94793438431593!3d34.240398280555226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1fc17b06473b%3A0xb7a212e30e6a745f!2sDuhe+Willetts+Law%2C+PLLC!5e0!3m2!1sen!2sus!4v1545778717360" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                    </div>
                    <div className="col-6 text-center">
                        <h5>Brunswick County</h5>
                        <a href="https://goo.gl/maps/1nTdbW8YXsv" target="_blank">Click here to route!</a>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.5633578152257!2d-78.14681079468065!3d34.06916241898909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa0fa8f4096a39%3A0xb3b87be82faa404d!2sBolivia+Office+Suites!5e0!3m2!1sen!2sus!4v1545779712042" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                    </div>
                </div>
            </div>
      );
    }
  }
  
  export default Home;