import React from 'react'
import {Link} from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Locations from '../components/Locations'
import ReviewsWidget from '../components/ReviewsWidget'

class Contact extends React.Component {
    render() {
      return (
        <React.Fragment>
            <div className="col-12">
                <div className="col-12">
                    <div className="col-8 mr-auto ml-auto" style={{paddingTop:80,paddingBottom:35}}>
                        <div className="col-12 text-center mt-3">
                            <h2>Don't face your criminal charge alone</h2>
                            <h4 style={{paddingBottom:25,lineHeight:1.5}}>High quality legal services will make or break the outcome of your case and can give you piece of mind you will be able to move forward from the charge.</h4>
                            <h4 style={{paddingBottom:25,lineHeight:1.5}}>Duhe Willetts Law has the proven <a target="__" href="/reviews">track record</a>, and as a Licensed Criminal Law Specialist, has the combination of experience and expertise to handle any legal challenge.</h4>
                        </div>
                        {/* <div className="col-12 row text-center">
                            <div className="col-6">
                                <h3>By Phone</h3>
                                <h5 style={{paddingBottom:25}}>
                                    <a href="+910-617-5542">910-617-5542</a>
                                </h5>
                            </div>
                            <div className="col-6">
                                <h3>By Email</h3>
                                <h5 style={{paddingBottom:25}}>
                                    <a href="mailto:duhelaw@gmail.com">duhelaw@gmail.com</a>
                                </h5>
                            </div>
                        </div> */}
                        {/* <div className="col-12">
                            <ContactForm/>
                        </div> */}
                    </div>
                </div>
                <div className="col-12" style={{backgroundColor:'#f3efe0',paddingTop:50,paddingBottom:30}}>
                    <ContactForm/>
                </div>
                <div className="col-12">
                    <Locations/>
                </div>
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default Contact;