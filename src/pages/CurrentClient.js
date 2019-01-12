import React from 'react'
import ContactForm from '../components/ContactForm'

class About extends React.Component {
    render() {
      return (
        <div className="col-12 row">
          <div className="col-8 mr-auto ml-auto text-center" style={{paddingTop:80}}>
            <div className="col-12 text-center mt-3">
                <h2>Current Clients</h2>
            </div>
            <div className="col-12 row mt-3">
              <div className="col-6">
                <h5 style={{paddingBottom:25}}>We accept all forms of payments. If you have an inquiry about a balance owed, don't hesitate to contact us. Use the link below or please call us to make a payment.</h5>
                <a target="_blank" href="https:secure.lawpay.com/pages/duhelaw/operating"><button type="button" className="btn btn-success">Make Payment</button></a>
              </div>
              <div className="col-6">
                  <h5 style={{paddingBottom:25}}>Find your pending criminal courtdate using the link below.  Enter your name and the county you are charged in, and then hit search. Contact our office with any additional questions.</h5>
                  <a target="_blank" href="http:www1.aoc.state.nc.us/www/calendars/CriminalQuery.html"><button type="button" className="btn btn-info">Find Court Date</button></a>
              </div>
            </div>

            <div className="col-8 mr-auto ml-auto text-center">
              <div className="col-12">
                <h3>Other Helpful Links</h3>
              </div>
              <div className="col-12 row">
                <div class="col-6">
                    <h5 class="card-title">Brunswick County Inmate Search</h5>
                    <p class="card-text">Use this link to find an inmate at the Brunswick Country Prison, located in Bolivia, NC</p>
                    <a target="_blank" href="http:www.brunswicksheriff.com/detention-center/inmate-search"><button type="button" className="btn btn-dark">Find Court Date</button></a>
                </div>
                <div class="col-6">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">Use this link to find an inmate at the New Hanover Country Prison, located in Castle Hayne, NC</p>
                        <a target="_blank" href="http:p2c.nhcgov.com/p2c/jailinmates.aspx"><button type="button" className="btn btn-dark">Find Court Date</button></a>
                    </div>
                </div>
              </div>
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