import React from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import Responsive from 'react-responsive'
import PracticeAreasDropdown from '../components/PracticeAreasDropdown'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const crimeData = require('../data/config.json')

const NoEmail = props => <Responsive {...props} minWidth={1169}/>
const CollapsedPhone = props => <Responsive {...props} maxWidth={990} minWidth={600}/>

class HeaderBar extends React.Component {
    state = {
        searchTerm: null,
        searchResults: null
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
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div>
                <a className="navbar-brand header-title" href="/">Duhe Willetts Law PLLC</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="navbar-nav collapse navbar-collapse" id="navbarSupportedContent">
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
                    {/* <PracticeAreasDropdown/> */}
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

                <div className="ml-auto navbar-nav header-contact">   
                    <li class="nav-item">

                        <a className="nav-link" href="+910-617-5542" sytle={{fontSize:24}}><FontAwesomeIcon className="mr-2" icon="phone"></FontAwesomeIcon>910-617-5542</a>
                    </li>
                    <NoEmail>
                        <li class="nav-item">
                            <a className="nav-link" href="+910-617-5542"><FontAwesomeIcon className="mr-2" icon="envelope"></FontAwesomeIcon>duhelaw@gmail.com</a>
                        </li> 
                    </NoEmail>                                  
                </div> 
            </div>
            <CollapsedPhone>
                <div className="navbar-nav" style={{whiteSpace:"nowrap"}}>
                    <li class="nav-item">          
                        <a className="nav-link" href="+910-617-5542"><FontAwesomeIcon className="mr-2" icon="phone"></FontAwesomeIcon>910-617-5542</a>
                    </li>
                    <li class="nav-item" style={{display:"inline-block"}}>
                        <a className="nav-link" href="+910-617-5542">duhelaw@gmail.com</a>
                    </li>
                </div>
            </CollapsedPhone>       
        </nav>
      );
    }
  }
  
  export default HeaderBar;