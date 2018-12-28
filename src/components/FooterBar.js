import React from 'react'
import {Link} from 'react-router-dom'

class FooterBar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
          <div className="col-xl-8 col-lg-8 col-md-10 col-12 mr-auto ml-auto text-center">
            <a className="navbar-brand" href="/">Duhe Willetts Law PLLC - 910-617-5542 - duhelaw@gmail.com</a>
          </div>
        </nav>
      );
    }
  }
  
  export default FooterBar;