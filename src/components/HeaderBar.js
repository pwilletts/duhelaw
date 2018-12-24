import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark col-12">
        //     <div className="col-3">
        //         <a class="navbar-brand" href="#">Duhe Willetts Law PLLC</a>
        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //     </div>

        //     <div class="collapse navbar-collapse mr-auto ml-auto center col-9" id="navbarSupportedContent">
        //         <ul class="navbar-nav mr-auto ml-auto text-center col-9">
        //             <Link to="/">
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Home</a>
        //                 </li>
        //             </Link>

        //             <Link to="/about">
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">About</a>
        //                 </li>
        //             </Link>
                    
        //             <Link to="/contact">
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Contact</a>
        //                 </li>
        //             </Link>

        //             <Link to="/current-clients">
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Current Clients</a>
        //                 </li>
        //             </Link>

        //             <li class="nav-item dropdown">
        //                 <a class="nav-link" href="" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
        //                     Practice Areas
        //                 </a>
        //                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                     <div class="row nopadding">
        //                         <ul class="col-md-4 text-center mt-2 mb-2">
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/federal-crimes">Federal Crimes</a>
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/drug-crimes">Drug Crimes</a>
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/sex-crimes">Sex Crimes</a>
        //                         </ul>
        //                         <ul class="col-md-4 text-center mt-2 mb-2">
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/violent-felonies">Violent Felonies</a>
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/misdemeanors">Misdemeanors</a>
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/dwi">DWI Charges</a>
        //                         </ul>
        //                         <ul class="col-md-4 text-center mt-2 mb-2">
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/traffic-violations">Traffice Violations</a>
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/domestic-violence">Domestic Violence</a>
        //                             <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/underage-drinking">Underage Drinking</a>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </li>
        //         </ul>
        //         <form class="form-inline my-2 my-lg-0 ml-auto text-right">
        //             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        //             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
            <div>
                <a className="navbar-brand" href="/">Duhe Willetts Law PLLC</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="navbar-nav ml-8">
                <Link to="/">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                </Link>

                <Link to="/about">
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </Link>
                
                <Link to="/contact">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </Link>

                <Link to="/current-clients">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Current Clients</a>
                    </li>
                </Link>

                <li class="nav-item dropdown">
                    <a class="nav-link" href="" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        Practice Areas
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <h4>Practice Areas</h4>
                        <div class="row nopadding">
                            <ul class="col-md-4 text-center mt-2 mb-2">
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/federal-crimes">Federal Crimes</a>
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/drug-crimes">Drug Crimes</a>
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/sex-crimes">Sex Crimes</a>
                            </ul>
                            <ul class="col-md-4 text-center mt-2 mb-2">
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/violent-felonies">Violent Felonies</a>
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/misdemeanors">Misdemeanors</a>
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/dwi">DWI Charges</a>
                            </ul>
                            <ul class="col-md-4 text-center mt-2 mb-2">
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/traffic-violations">Traffice Violations</a>
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/domestic-violence">Domestic Violence</a>
                                <a className="dropdown-item text-center mt-4 mb-4" href="/practice-areas/underage-drinking">Underage Drinking</a>
                            </ul>
                        </div>
                    </div>
                </li>
            </div>
            <div className="ml-auto">
                <form class="form-inline my-2 my-lg-0">
                     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </form>
            </div>
        </nav>
      );
    }
  }
  
  export default Home;