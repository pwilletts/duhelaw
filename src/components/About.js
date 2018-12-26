import React from 'react'
import gMap from 'google-map-react'
import headshot from '../pictures/headshot.jpg'


class About extends React.Component {
    render() {
      return (
          <div className="col-9 mr-auto ml-auto mt-4">
            <div className="col-12">
                <h2>Meet Our Firm</h2>
            </div>
            <div className="col-12 row">
                <div className="col-4">
                    <img style={{maxWidth:'100%',maxHeight:400,borderRadius:'5%'}} src={headshot}></img>
                </div>
                <div className="col-8 text-center">
                    <h3><u><b>About Duhe Willetts Law PLLC...</b></u></h3>
                    <h4>is the product of Jordan Duhe Willetts desire to build a law firm focused on prvoding clients the highest quality legal services focused on each client's individual needs.  As one of only nine Criminal Law Specialist's in Southeastern North Carolina, Duhe Willetts Law has the experience and legal expertise to guide you through and out of your legal circumstance.</h4>
                    <h3 className="mt-4"><u><b>Meet Jordan Duhe Willetts</b></u></h3>
                    <h4>
                        Originally from Maryland, Jordan fell in love with North Carolina while obtaining her undergraduate degree at Guilford College, in Greensboro, North Carolina.  She is a graduate of Washington and Lee University School of Law.  When not at the office, Jordan likes to enjoy Southeastern North Carolina's beautiful beaches, and spending time with her husband, Patrick, and her dog, Pippin.
                    </h4>
                </div>
            </div>
            <div className="col-12 mr-auto ml-auto text-center mt-3 row">        
                <div className="col-8 mr-auto ml-auto">
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
                            <textarea className="form-control" id="textarea" rows='5'></textarea>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
            <div className="col-12 mr-auto ml-auto mt-5 row mb-4">
                    <div className="col-12 text-center">
                        <h4>With locations in Brunwick and New Hanover County, we are here to serve you</h4>
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
        // <div style={{width:"100%",height:"100%"}}>
        //     <div style={{width:"70%",margin:'auto',backgroundColor:"#D3D3D3"}}>
        //         <div style={{width:'30%',color:"white",float:'left'}}>
        //             <div style={{width:'100%',textAlign:'center'}}>
        //                 <img style={{maxWidth:'100%',maxHeight:400,borderRadius:'5%'}} src={headshot}></img>
        //             </div>
        //         </div>
        //         <div style={{width:'70%',float:'left'}}>
        //             <div style={{width:'100%', textAlign:'center'}}>
        //                 <h4>
        //                     Originally from Maryland, Jordan fell in love with North Carolina while obtaining her undergraduate degree at Guilford College, in Greensboro, North Carolina.  She is a graduate of Washington and Lee University School of Law.  When not at the office, Jordan likes to enjoy Southeastern North Carolina's beautiful beaches, and spending time with her husband, Patrick, and her dog, Pippin.
        //                 </h4>
        //                 <h4>
        //                     Professional Licensures
        //                     <ul>
        //                         <li>Criminal Law Specialist</li>
        //                         <li>NC State Bar</li>
        //                         <li>NC Bar Association</li>
        //                     </ul>
        //                 </h4>
        //                 <h4>
        //                     Causes and Memberships
        //                     <ul>
        //                         <li>Founder, Brunswick County Lawyers for Literacy</li>
        //                         <li>Board Member, Coastal Women Attorneys</li>
        //                         <li>Junior League of Wilmington</li>
        //                     </ul>
        //                 </h4>
        //             </div>
        //         </div>
        //         <div style={{width:'100%',color:'white',textAlign:'center',clear:'both'}}>
        //             <h4>Contact Us</h4>
        //             <div style={{width:'80%',margin:'auto'}}>
        //                 <div style={{width:'50%',border:'1px solid yellow',float:'left'}}>
        //                     <h5>By Phone</h5>
        //                     <a href="tel: +443-880-7037">443-880-7037</a>
        //                     <h5>By Email</h5>
        //                     <a href="mailto: duhelaw@gmail.com">duhelaw@gmail.com</a>
                            
        //                 </div>
        //                 <div style={{width:'50%',border:'1px solid blue',float:'left'}}>
        //                     <h5>Request an Appointment or Send Us a Message</h5>
        //                     <div style={{width:'50%',float:'left'}}>
        //                         <input placeholder='name'></input>
        //                         <input placeholder='email'></input>
        //                         <input placeholder='phone'></input>
        //                     </div>
        //                     <div style={{width:'50%',float:'left'}}>
        //                         <input placeholder='subject'></input>
        //                         <textarea style={{width:'100%'}}></textarea>
        //                     </div>
        //                     <button style={{width:'40%'}}>Send</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div style={{width:'100%',height:250,border:'1px solid red',color:'white',textAlign:'center',clear:'both'}}>
        //             <div style={{width:'50%',float:'left'}}>
        //                 <h5>Brunwick County</h5>
        //                 <a href="https://goo.gl/maps/h6HK39dUZCL2">Route Me</a>
        //             </div>
        //             <div style={{width:'50%',float:'left'}}>
        //                 <h5>New Hanover County</h5>
        //                 <a href="https://goo.gl/maps/h6HK39dUZCL2">Route Me</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
      );
    }
  }
  
  export default About;