import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import PracticeAreasDropdown from '../components/PracticeAreasDropdown'
const crimeData = require('../data/config.json')

class HeaderBar extends React.Component {
    state = {
        searchTerm: null,
        searchResults: null
    }

    componentDidMount(){

    }

    handleSearch(){
        var a = []
        var categories = crimeData.filter(a => a.type.indexOf($('#searchTerm').val()) > -1)
        var i = 0;
        var d = 0;
        var x = 0;

        for(i=0;i <= crimeData.length-1;i++){
            if(crimeData[i].type.indexOf($('#searchTerm').val()) > -1){
                categories.push(crimeData[i])
                break
            }
            for(d=0; d<=crimeData[i].crimes.length-1;d++){
                if(crimeData[i].crimes[d].type.indexOf($('#searchTerm').val()) > -1){
                    categories.push(crimeData[i])
                    break;
                } else {
                    for(x=0;x<=crimeData[i].crimes[d].description.length-1;x++){
                        if(crimeData[i].crimes[d].description[x].indexOf($('#searchTerm').val()) > -1){
                            categories.push(crimeData[i])
                            break;
                        }
                    }
                }
            }
        }
        this.setState({searchResults: categories})
    }

    updateState(target, value){
        this.setState({[target]: value}, () => {
            this.handleSearch()
        })
    }

    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
            <div>
                <a className="navbar-brand" href="/">Duhe Willetts Law PLLC</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="navbar-nav ml-8 collapse navbar-collapse" id="navbarSupportedContent">
                <Link to="/">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                </Link>

                <li class="here nav-item dropdown">
                    <Link to="/practice-areas">
                        <a class="nav-link" href="" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Practice Areas
                        </a>
                    </Link>                  
                    <PracticeAreasDropdown/>
                </li>

                <Link to="/current-clients">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Current Clients</a>
                    </li>
                </Link>

                <Link to="/contact">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </Link>

                <Link to="/about">
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </Link>
                
                <Link to="/reviews">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Reviews</a>
                    </li>
                </Link>

                <div className="ml-auto">   
                    <form class="dropdown form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" id='searchTerm' onChange={(e) => this.updateState('searchTerm', e.target.value)} placeholder="Search" aria-label="Search"></input>
                        <button id="dLabel" className="btn btn-outline-success" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Search
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dLabel">
                            {this.state.searchResults ? this.state.searchResults.map(
                                result => {
                                    // result.crimes.map(
                                    //     crime => {
                                    //         return (
                                    //             <li>{crime}</li>
                                    //         )
                                    //     }
                                    // )
                                    return(
                                        <li>{result.type}</li>
                                    )
                                }
                            ): ""}
                        </div>
                    </form>                                     
                </div>
            </div>
        </nav>
      );
    }
  }
  
  export default HeaderBar;