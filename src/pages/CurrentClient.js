import React from 'react'
import ContactForm from '../components/ContactForm'

class About extends React.Component {
    render() {
      return (
          <div className="col-8 mr-auto ml-auto text-center">
            <div className="col-12 row">
                <div className="col-12 text-center mt-3">
                    <h3>Current Clients</h3>
                </div>
                <div className="col-6">
                    <h5>We accept all forms of payments. If you have an inquiry about a balance owed, don't hesitate to contact us. You may call, to make a phone payment, or you may use the link below to make a secure payment.</h5>
                    <button type="button">Make Payment</button>
                </div>
                <div className="col-6">
                    <h5>Find your pending criminal courtdate using the link below.  Enter your name and the county you are charged in, and then hit search. Contact our office with any additional questions.</h5>
                    <button type="button">Find Court Date</button>
                </div>
            </div>
            <div className="col-12 row mt-4">
                <div className="col-12">
                    <h3>Other Helpful Links</h3>
                </div>
                <div className="col-6">
                    <h5>Brunswick County Inmate Search</h5>
                    <button type="button">Go Now</button>
                </div>
                <div className="col-6">
                    <h5>New Hanover County Inmate Search</h5>
                    <button type="button">Now</button>
                </div>
            </div>
            <div className="col-12 row mt-4">
                <div className="col-12 text-center">
                    <h3>Questions? Contact Us Now!</h3>
                </div>              
                <div className="col-6">
                    <h4>By Phone</h4>
                    <h4><a href="+910-617-5542">910-617-5542</a></h4>
                </div>
                <div className="col-6">
                    <h4>By Email</h4>
                    <h4><a href="mailto:duhelaw@gmail.com">duhelaw@gmail.com</a></h4>
                </div>
                <div className="col-10 mr-auto ml-auto text-center">
                    <ContactForm/>
                </div>
            </div>
          </div>
      );
    }
  }
  
  export default About;