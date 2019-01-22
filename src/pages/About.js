import React from 'react'
import Responsive from 'react-responsive'
import headshot from '../pictures/headshot.jpg'
import ContactForm from '../components/ContactForm'
import Locations from '../components/Locations'
import Contact from './Contact';
import ReactGA from 'react-ga'

var Mobile = props => <Responsive {...props} maxWidth={568}/>
var Desktop = props => <Responsive {...props} minWidth={569}/>

class About extends React.Component {
    componentDidMount(){
        ReactGA.initialize('UA-132864646-1');
        ReactGA.pageview('/about');
    }

    render() {
      return (
        <div className="col-12 row nopadding">
            <Mobile>
                <div className="col-11 col-xl-10 col-lg-10 col-md-10 mr-auto ml-auto margin-section-extra">
                    <div className="col-12 row mr-auto ml-auto">
                        <div className="col-12 col-xl-9 mr-auto ml-auto mb-4">
                            <h2 className="text-center about-h2"><u><b>Duhe Willetts Law PLLC...</b></u></h2>
                            <h4 className="about-h4">
                                is the product of Jordan Duhe Willetts desire to build a law firm focused on prvoding clients the highest quality legal services focused on each client's individual needs.  As one of only nine Criminal Law Specialist's in Southeastern North Carolina, Duhe Willetts Law has the experience and legal expertise to guide you through and out of your legal circumstance.
                            </h4>
                            <a class="btn btn-primary btn-lg header-mobile-button" href="tel:1-910-763-4323" role="button">Call Now</a>
                        </div>
                        <div className="col-12 col-xl-3">
                            <div className="col-10 col-xl-3 mr-auto ml-auto">
                                <img className="headshot" style={{maxWidth:'100%',maxHeight:600}} src={headshot}></img>
                            </div>
                            <h2 className="text-center about-h2"><u><b>Meet Jordan Duhe Willetts</b></u></h2>
                            <h4>
                                Originally from Maryland, Jordan fell in love with North Carolina while obtaining her undergraduate degree at Guilford College, in Greensboro, North Carolina.  She is a graduate of Washington and Lee University School of Law.  When not at the office, Jordan likes to enjoy Southeastern North Carolina's beautiful beaches, and spending time with her husband, Patrick, and her dog, Pippin.
                            </h4>
                        </div>
                    </div>    
                </div>
            </Mobile>
            <Desktop>
                <div className="col-11 col-xl-10 col-lg-10 col-md-10 mr-auto ml-auto margin-section-extra">
                    <div className="col-12 row mr-auto ml-auto">
                        <div className="col-3">
                            <img className="headshot" style={{maxWidth:'100%',maxHeight:600}} src={headshot}></img>
                        </div>
                        <div className="col-9">
                            <h2 className="text-center about-h2"><u><b>Duhe Willetts Law PLLC...</b></u></h2>
                            <h4 className="about-h4">
                                is the product of Jordan Duhe Willetts desire to build a law firm focused on prvoding clients the highest quality legal services focused on each client's individual needs.  As one of only nine Criminal Law Specialist's in Southeastern North Carolina, Duhe Willetts Law has the experience and legal expertise to guide you through and out of your legal circumstance.
                            </h4>
                            <h2 className="text-center about-h2"><u><b>Meet Jordan Duhe Willetts</b></u></h2>
                            <h4>
                                Originally from Maryland, Jordan fell in love with North Carolina while obtaining her undergraduate degree at Guilford College, in Greensboro, North Carolina.  She is a graduate of Washington and Lee University School of Law.  When not at the office, Jordan likes to enjoy Southeastern North Carolina's beautiful beaches, and spending time with her husband, Patrick, and her dog, Pippin.
                            </h4>
                        </div>
                    </div>
                </div>
            </Desktop>



            
            <div className="col-12 bg-color">
                <ContactForm/>
            </div>
            <div className="col-12">
                <Locations/>
            </div>
        </div>
      );
    }
  }
  
  export default About;