import React from 'react'
import $ from 'jquery'
const crimeData = require('../data/config.json')

class PracticeAreas extends React.Component {
    componentDidMount(){
        if(this.props.match.params.area){
            $(`#v-pills-${this.props.match.params.area}-tab`).addClass('active')
            $(`#v-pills-${this.props.match.params.area}`).addClass('show active')
        }
    }

    areaRoute(path){
        this.props.history.push(`/practice-areas/${path}`)
    }

    crimeRoute(path){
        this.props.history.push(`${path}`)
    }

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

    render() {
      return (
            <div class="col-11 mr-auto ml-auto">
                <h1 class="display-4 text-center">Legal Practice Areas</h1>
                <p class="w-75 mr-auto ml-auto lead text-center">Below are the categories of legal cases we represent clients.  Click on a category to view specific information and crimes in this category.</p>
                <div class="row">
                    <div class="col-2">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {crimeData.map(crime => {
                                return(
                                    <a class="nav-link" id={`v-pills-${crime.type.split(' ').join('-')}-tab`} data-toggle="pill" href={`#v-pills-${crime.type.split(' ').join('-')}`} role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => this.areaRoute(`${crime.type.split(' ').join('-')}`)}>{this.prettifyText(crime.type)}</a>
                                )
                            })}                           
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="tab-content" id="v-pills-tabContent">
                            {crimeData.map(crime => {
                                return(
                                    <div class="tab-pane fade" id={`v-pills-${crime.type.split(' ').join('-')}`} role="tabpanel" aria-labelledby={`v-pills-${crime.type.split(' ').join('-')}-tab`}>
                                        <div className="row mr-auto ml-auto">
                                            {crime.crimes.map(charge => {
                                                return(
                                                    <div class="card hvr-fade pointer mr-4 mb-4" onClick={() => this.crimeRoute(`/practice-areas/federal-crimes/${crime.type.split(' ').join('-')}`)}>
                                                        <div class="card-body">
                                                            <h5 class="card-title">{charge.type}</h5>
                                                            <p class="card-text">{charge.description.join(' ')}</p>
                                                            <a href="/" class="card-link">Card link</a>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  }
  
  export default PracticeAreas;