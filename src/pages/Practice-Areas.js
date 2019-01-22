import React from 'react'
import $ from 'jquery'
import Responsive from 'react-responsive'
import ContactForm from '../components/ContactForm'
import ReactGA from 'react-ga'
const crimeData = require('../data/config.json')

var Mobile = props => <Responsive {...props} maxWidth={568}/>
var Desktop = props => <Responsive {...props} minWidth={569}/>

class PracticeAreas extends React.Component {
    state = {
        selected: null
    }

    componentDidMount(){
        ReactGA.initialize('UA-132864646-1');
        ReactGA.pageview('/');
    }  

    componentDidMount(){
        if(this.props.match.params.area){
            $(`#v-pills-${this.props.match.params.area}-tab`).addClass('active')
            $(`#v-pills-${this.props.match.params.area}`).addClass('show active')
            this.setState({selected: this.props.match.params.area})
        }
    }

    areaRoute(path){
        this.setState({selected: path}, function(){
            this.props.history.push(`/practice-areas/${path}`)
        })
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

    handleStateChange(target, value){
        this.setState({target: value})
    }

    render() {
      return (
            <div class="col-12 mr-auto ml-auto margin-section-extra">
                <div className="col-10 mr-auto ml-auto">
                    <h2 class="display-4 ">Legal Practice Areas</h2>
                </div>
                <div className="col-12 col-lg-12 bg-color" style={{paddingBottom:20,paddingTop:20}}>
                    <div className="col-10 row mr-auto ml-auto">
                        <div className="col-12 col-lg-3 col-md-4 col-sm-4 col-xl-3 practice-grid" style={{backgroundColor:'white',padding:15,borderRadius:2}}>
                            <div class="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {crimeData.map(crime => {
                                    return(
                                        <span class="practice-text" id={`v-pills-${crime.type.split(' ').join('-')}-tab`} data-toggle="pill" href={`#v-pills-${crime.type.split(' ').join('-')}`} role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => this.areaRoute(`${crime.type.split(' ').join('-')}`)}>{this.prettifyText(crime.type)}</span>
                                    )
                                })}                           
                            </div>
                        </div>
                        <div class="col-8 col-xl-9">
                            <div className="col-12 mr-auto ml-auto">
                                <div class="tab-content card-group" id="v-pills-tabContent">
                                    {crimeData.map(crime => {
                                        return(
                                            <div class="tab-pane fade col-12" id={`v-pills-${crime.type.split(' ').join('-')}`} role="tabpanel" aria-labelledby={`v-pills-${crime.type.split(' ').join('-')}-tab`}>
                                                <div className="col-12 mr-auto ml-auto text-center">
                                                    <h3 className="practice-head">{this.state.selected}</h3>
                                                </div>
                                                <div className="row mr-auto ml-auto">
                                                    {crime.crimes.map(charge => {
                                                        return(
                                                            <div class="col-12 col-xl-5 mr-auto ml-auto card hvr-fade pointer" onClick={() => this.crimeRoute(`/practice-areas/federal-crimes/${crime.type.split(' ').join('-')}`)}>
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
                </div>
                <div className="col-12">
                    <ContactForm/>
                </div>
            </div>
      );
    }
  }
  
  export default PracticeAreas;