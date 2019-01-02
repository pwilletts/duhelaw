import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import PracticeAreasGrid from '../components/PracticeAreasGrid'
import ShortAbout from '../components/ShortAbout'
import ReviewsWidget from '../components/ReviewsWidget'
import ContactForm from '../components/ContactForm'
import Locations from '../components/Locations'

class Home extends React.Component {
    render() {
      return (
            <div className="col-12 row nopadding">
                <div className="col-12 header-img nopadding mb-4">
                    <Header/>
                </div>         
                <div class="card-body col-12" style={{backgroundColor:'#c0c0c0'}}>
                    <PracticeAreasGrid/>
                </div>
                <div className="col-12">
                    <ShortAbout/>
                </div>
                <div className="col-12 mr-auto ml-auto mt-4">
                    <ReviewsWidget/>
                </div>
                <div className="col-lg-8 col-md-10 col-12 mr-auto ml-auto">
                    <ContactForm/>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10 mr-auto ml-auto row mb-4">
                    <Locations/>
                </div>
            </div>
      );
    }
  }
  
  export default Home;