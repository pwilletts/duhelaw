import React from 'react'
import {Link} from 'react-router-dom'

class ShortAbout extends React.Component {
    render() {
      return (
        <div className="about col-xl-9 col-lg-10 col-md-10 col-11 mr-auto ml-auto text-center margin-section">
            <h2>
                Proudly serving Brunswick, New Hanover, and Pender Counties.
            </h2>
            <p>
                Whether you are a college student facing your first criminal charge, or you are facing a felony charge as a repeat offender, you can find the high-caliber defense you need at my Southeastern North Carolina defense firm. I am Jordan Duhe Willetts, a local attorney, ready to guard your every right so that you can move forward from this charge with your future intact.  We represent clients all through Southeastern North Carolina including Wilmington, Brunswick County and Pender County.
            </p>
            <Link to="/about"><a class="btn btn-primary btn-lg" href="" role="button">Learn More</a></Link>
        </div>
      );
    }
  }
  
  export default ShortAbout;