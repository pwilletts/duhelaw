import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
        <div className="col-xl-10 col-lg-12 col-12 text-center mr-auto ml-auto">
            <div class="jumbotron">
                <h1 class="display-4 mt-3" style={{fontWeight:'bold'}}>Committed to Defending Your Rights</h1>
                <p class="lead">The criminal law specialists at Duhe Willetts Law PLLC will guide you through every step of your legal circumstance and continously advocate for your rights.</p>
                <hr class="my-4"></hr>
                <a class="btn btn-primary btn-lg" href="#" role="button">Contact Us</a>
            </div>
        </div>
      );
    }
  }
  
  export default Home;