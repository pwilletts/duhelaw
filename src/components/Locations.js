import React from 'react'
import {Link} from 'react-router-dom'

class Locations extends React.Component {
    render() {
      return (
        <div className="col-12" style={{paddingBottom:80}}>
            <div className="col-10 mr-auto ml-auto text-center" style={{paddingTop:50}}>
                <h2>Proudly serving with locations in Brunswick and New Hanover Counties</h2>
            </div>                   
            <div className="col-10 row text-center mr-auto ml-auto">
                <div className="col-6">
                    <h4>New Hanover County</h4>
                    <h5><a href="https://goo.gl/maps/s9ssgHZejbB2" target="_blank">Click here to route!</a></h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.319180913806!2d-77.94793438431593!3d34.240398280555226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa1fc17b06473b%3A0xb7a212e30e6a745f!2sDuhe+Willetts+Law%2C+PLLC!5e0!3m2!1sen!2sus!4v1545778717360" width="80%" height="250" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </div>
                <div className="col-6">
                    <h4>Brunswick County</h4>
                    <h5><a href="https://goo.gl/maps/1nTdbW8YXsv" target="_blank">Click here to route!</a></h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206.5633578152257!2d-78.14681079468065!3d34.06916241898909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa0fa8f4096a39%3A0xb3b87be82faa404d!2sBolivia+Office+Suites!5e0!3m2!1sen!2sus!4v1545779712042" width="80%" height="250" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Locations;