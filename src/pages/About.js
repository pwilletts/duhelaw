import React from 'react'
import headshot from '../pictures/headshot.jpg'
import ContactForm from '../components/ContactForm'
import Locations from '../components/Locations'
import Contact from './Contact';

class About extends React.Component {
    render() {
      return (
        <div className="col-12 row nopadding mb-4">
            <div className="col-12" style={{paddingBottom:50}}>
                <div className="col-10 mr-auto ml-auto mt-4">
                    <div className="col-12 row" style={{paddingTop:80}}>
                        <div className="col-3">
                            <img style={{maxWidth:'100%',maxHeight:600}} src={headshot}></img>
                        </div>
                        <div className="col-9">
                            <h3 className="text-center"><u><b>About Duhe Willetts Law PLLC...</b></u></h3>
                            <h4>is the product of Jordan Duhe Willetts desire to build a law firm focused on prvoding clients the highest quality legal services focused on each client's individual needs.  As one of only nine Criminal Law Specialist's in Southeastern North Carolina, Duhe Willetts Law has the experience and legal expertise to guide you through and out of your legal circumstance.</h4>
                            <h3 className="mt-4 text-center"><u><b>Meet Jordan Duhe Willetts</b></u></h3>
                            <h4>
                                Originally from Maryland, Jordan fell in love with North Carolina while obtaining her undergraduate degree at Guilford College, in Greensboro, North Carolina.  She is a graduate of Washington and Lee University School of Law.  When not at the office, Jordan likes to enjoy Southeastern North Carolina's beautiful beaches, and spending time with her husband, Patrick, and her dog, Pippin.
                            </h4>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="col-12" style={{backgroundColor:'#f3efe0',paddingBottom: 50}}>
                <ContactForm/>
            </div>
            <div className="col-12" style={{paddingBottom: 50, paddingTop: 50}}>
                <Locations/>
            </div>
        </div>



        //   <React.Fragment>
        //     <div className="col-10 mr-auto ml-auto mt-4">
        //         <div className="col-12 row" style={{paddingTop:80}}>
        //             <div className="col-3">
        //                 <img style={{maxWidth:'100%',maxHeight:600}} src={headshot}></img>
        //             </div>
        //             <div className="col-9">
        //                 <h3 className="text-center"><u><b>About Duhe Willetts Law PLLC...</b></u></h3>
        //                 <h4>is the product of Jordan Duhe Willetts desire to build a law firm focused on prvoding clients the highest quality legal services focused on each client's individual needs.  As one of only nine Criminal Law Specialist's in Southeastern North Carolina, Duhe Willetts Law has the experience and legal expertise to guide you through and out of your legal circumstance.</h4>
        //                 <h3 className="mt-4 text-center"><u><b>Meet Jordan Duhe Willetts</b></u></h3>
        //                 <h4>
        //                     Originally from Maryland, Jordan fell in love with North Carolina while obtaining her undergraduate degree at Guilford College, in Greensboro, North Carolina.  She is a graduate of Washington and Lee University School of Law.  When not at the office, Jordan likes to enjoy Southeastern North Carolina's beautiful beaches, and spending time with her husband, Patrick, and her dog, Pippin.
        //                 </h4>
        //             </div>
        //         </div>    
        //     </div>
        //     <div className="col-12" style={{backgroundColor:'#f3efe0',margin:"50px auto"}}>      
        //         <ContactForm/>
        //     </div>
        //     <section className="col-12" style={{padding: '60px 0'}}>
        //         <Locations/>
        //     </section>
        // </React.Fragment>
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