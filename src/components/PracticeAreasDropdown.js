import React from 'react'
import {Link} from 'react-router-dom'
const crimeData = require('../data/config.json')

class PracticeAreasDropdown extends React.Component {
    prettifyText(values){
        var words = values.split(' ')
        var output = ''
        words.forEach(function(word, index){
            if(index === words.length){
               output += word.slice(0,1).toUpperCase()+word.slice(1)
            } else {
                output += word.slice(0,1).toUpperCase()+word.slice(1) + " "
            }
            
        })
        return output
    }

    setClasses(index){
        if(crimeData.length % 3 == 0){
            return 'col-4 hvr-fade mt-2 mb-2'
        } else if(crimeData.length % 4 == 0) {
            return 'col-3 hvr-fade mt-2 mb-2'
        } else if(crimeData.length % 2 == 0){
            return 'col-6 hvr-fade mt-2 mb-2'
        } else if(crimeData.length % 3 == 1){
            return 'col-4 hvr-fade mt-2 mb-2'
        }
    }

    render() {
      return (
        <div className="here dropdown-menu text-center" aria-labelledby="navbarDropdown">
            <h4>Practice Areas</h4>
            <div>
                <ul class="col-12 text-center">
                    {crimeData.map((crime, index) => {
                        return(
                            <Link to={`/practice-areas/${crime.type.split(' ').join('-')}`}>
                                <li style={{height:50,paddingTop:15}} className={this.setClasses(index)}>{this.prettifyText(crime.type)}</li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
      );
    }
  }
  
  export default PracticeAreasDropdown;