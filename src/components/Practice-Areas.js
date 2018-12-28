import React from 'react'
import $ from 'jquery'

class PracticeAreas extends React.Component {
    componentDidMount(){
        if(this.props.match.params.area){
            $(`#v-pills-${this.props.match.params.area}-tab`).addClass('active')
        }
    }

    areaRoute(path){
        this.props.history.push(`/practice-areas/${path}`)
    }

    crimeRoute(path){
        this.props.history.push(`${path}`)
    }

    render() {
      return (
            <div class="col-11 mr-auto ml-auto">
                <h1 class="display-4 text-center">Legal Practice Areas</h1>
                <p class="w-75 mr-auto ml-auto lead text-center">Below are the categories of legal cases we represent clients.  Click on a category to view specific information and crimes in this category.</p>
                <div class="row">
                    <div class="col-2">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link" id="v-pills-federal-crimes-tab" data-toggle="pill" href="#v-pills-federal-crimes" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => this.areaRoute('federal-crimes')}>Federal Crimes</a>
                            <a class="nav-link" id="v-pills-drug-crimes-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => this.areaRoute('drug-crimes')}>Drug Crimes</a>
                            <a class="nav-link" id="v-pills-sex-crimes-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => this.areaRoute('sex-crimes')}>Sex Crimes</a>
                            <a class="nav-link" id="v-pills-felonies-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => this.areaRoute('felonies')}>Felonies</a>
                            <a class="nav-link" id="v-pills-misdemeanors-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => this.areaRoute('misdemeanors')}>Misdemeanors</a>
                            <a class="nav-link" id="v-pills-dwi-charges-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => this.areaRoute('dwi-charges')}>DWI Charges</a>
                            <a class="nav-link" id="v-pills-traffic-violations-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => this.areaRoute('traffic-violations')}>Traffic Violations</a>
                            <a class="nav-link" id="v-pills-domestic-violence-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => this.areaRoute('domestic-violence')}>Domestic Violence</a>
                            <a class="nav-link" id="v-pills-underage-drinking-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => this.areaRoute('underage-drinking')}>Underage Drinking</a>
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-federal-crimes" role="tabpanel" aria-labelledby="v-pills-federal-crimes-tab">
                                <div className="row mr-auto ml-auto">
                                    <div class="card hvr-fade pointer mr-4 mb-4" onClick={() => this.crimeRoute('/practice-areas/federal-crimes/distribution')}>
                                        <div class="card-body">
                                            <h5 class="card-title">Distribution</h5>
                                            <p class="card-text">Intent to distribute.</p>
                                            <a href="/" class="card-link">Card link</a>
                                        </div>
                                    </div>                                  
                                    <div class="card hvr-fade pointer mr-4 mb-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Distribution</h5>
                                            <p class="card-text">Intent to distribute.</p>
                                            <a href="#" class="card-link">Card link</a>
                                        </div>
                                    </div>
                                    <div class="card hvr-fade pointer mr-4 mb-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Distribution</h5>
                                            <p class="card-text">Intent to distribute.</p>
                                            <a href="#" class="card-link">Card link</a>
                                        </div>
                                    </div>
                                    <div class="card hvr-fade pointer mr-4 mb-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Distribution</h5>
                                            <p class="card-text">Intent to distribute.</p>
                                            <a href="#" class="card-link">Card link</a>
                                        </div>
                                    </div>
                                    <div class="card hvr-fade pointer mr-4 mb-4">
                                        <div class="card-body">
                                            <h5 class="card-title">Distribution</h5>
                                            <p class="card-text">Intent to distribute.</p>
                                            <a href="#" class="card-link">Card link</a>
                                        </div>
                                    </div>                                  
                                </div>                              
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  }
  
  export default PracticeAreas;