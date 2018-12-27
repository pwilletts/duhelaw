import React from 'react'
import {Link} from 'react-router-dom'

class Contact extends React.Component {
    render() {
      return (
        <React.Fragment>
            <div className="col-8 mr-auto ml-auto mt-4 text-center">
                <h4>The first step to solving your legal circumstance is to contact Duhe Law PLLC.</h4>
                <h4>We will guide you step by step...</h4>
                <div className="col-12 row">
                    <div className="col-6">
                        <h4>By Phone</h4>
                        <h4><a href="+910-617-5542">910-617-5542</a></h4>
                    </div>
                    <div className="col-6">
                        <h4>By Email</h4>
                        <h4><a href="mailto:duhelaw@gmail.com">duhelaw@gmail.com</a></h4>
                    </div>
                    <div className="col-10 mr-auto ml-auto text-center">
                        <h4>Or Send Us A Message</h4>
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
                                <textarea className="form-control" id="textarea" rows='4'></textarea>
                            </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>           
            </div>
            <div className="col-12 mr-auto ml-auto mt-2 text-center">
                <h3>Read Our Reviews</h3>
                <div className="col-12 mr-auto ml-auto" style={{height:100}}>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <div className="col-10 mr-auto ml-auto">
                            <div class="carousel-inner text-center" style={{height:100}}>
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
        </React.Fragment>
      );
    }
  }
  
  export default Contact;