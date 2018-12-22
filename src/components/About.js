import React from 'react'
import gMap from 'google-map-react'
import headshot from '../pictures/headshot.jpg'


class About extends React.Component {
    render() {
      return (
        <div style={{width:"100%",height:"100%"}}>
            <div style={{width:"70%",margin:'auto',backgroundColor:"#D3D3D3"}}>
                <div style={{width:'30%',color:"white",float:'left'}}>
                    <div style={{width:'100%',textAlign:'center'}}>
                        <img style={{maxWidth:'100%',maxHeight:400,borderRadius:'5%'}} src={headshot}></img>
                    </div>
                </div>
                <div style={{width:'70%',float:'left'}}>
                    <div style={{width:'100%', textAlign:'center'}}>
                        <h4>
                            Originally from Maryland, Jordan fell in love with North Carolina while obtaining her undergraduate degree at Guilford College, in Greensboro, North Carolina.  She is a graduate of Washington and Lee University School of Law.  When not at the office, Jordan likes to enjoy Southeastern North Carolina's beautiful beaches, and spending time with her husband, Patrick, and her dog, Pippin.
                        </h4>
                        <h4>
                            Professional Licensures
                            <ul>
                                <li>Criminal Law Specialist</li>
                                <li>NC State Bar</li>
                                <li>NC Bar Association</li>
                            </ul>
                        </h4>
                        <h4>
                            Causes and Memberships
                            <ul>
                                <li>Founder, Brunswick County Lawyers for Literacy</li>
                                <li>Board Member, Coastal Women Attorneys</li>
                                <li>Junior League of Wilmington</li>
                            </ul>
                        </h4>
                    </div>
                </div>
                <div style={{width:'100%',color:'white',textAlign:'center',clear:'both'}}>
                    <h4>Contact Us</h4>
                    <div style={{width:'80%',margin:'auto'}}>
                        <div style={{width:'50%',border:'1px solid yellow',float:'left'}}>
                            <h5>By Phone</h5>
                            <a href="tel: +443-880-7037">443-880-7037</a>
                            <h5>By Email</h5>
                            <a href="mailto: duhelaw@gmail.com">duhelaw@gmail.com</a>
                            
                        </div>
                        <div style={{width:'50%',border:'1px solid blue',float:'left'}}>
                            <h5>Request an Appointment or Send Us a Message</h5>
                            <div style={{width:'50%',float:'left'}}>
                                <input placeholder='name'></input>
                                <input placeholder='email'></input>
                                <input placeholder='phone'></input>
                            </div>
                            <div style={{width:'50%',float:'left'}}>
                                <input placeholder='subject'></input>
                                <textarea style={{width:'100%'}}></textarea>
                            </div>
                            <button style={{width:'40%'}}>Send</button>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%',height:250,border:'1px solid red',color:'white',textAlign:'center',clear:'both'}}>
                    <div style={{width:'50%',float:'left'}}>
                        <h5>Brunwick County</h5>
                        <a href="https://goo.gl/maps/h6HK39dUZCL2">Route Me</a>
                    </div>
                    <div style={{width:'50%',float:'left'}}>
                        <h5>New Hanover County</h5>
                        <a href="https://goo.gl/maps/h6HK39dUZCL2">Route Me</a>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default About;