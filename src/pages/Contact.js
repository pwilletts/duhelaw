import React from 'react'
import {Link} from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import ReviewsWidget from '../components/ReviewsWidget'

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
                        <ContactForm/>
                    </div>
                </div>           
            </div>
            <div className="col-12 mr-auto ml-auto mt-2 text-center">
                <ReviewsWidget/>
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default Contact;