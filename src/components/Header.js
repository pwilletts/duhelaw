import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
        <div className="col-12 text-center mr-auto ml-auto margin-section-extra">
            <div className="col-xl-10 col-lg-12 col-12 text-center mr-auto ml-auto">
                <div class="jumbotron">
                    <h1 class="display-4 home-header">Committed to Defending Your Rights</h1>
                    <p class="lead home-header-lead">The criminal law specialists at Duhe Willetts Law PLLC will guide you through every step of your legal circumstance and continously advocate for your rights.</p>
                    <Link to='/contact'><a class="btn btn-primary btn-lg header-mobile-button show" href="" role="button">Contact Us</a></Link>
                    <a class="btn btn-primary btn-lg header-mobile-button" href="tel:1-910-763-4323" role="button">Call Now</a>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;