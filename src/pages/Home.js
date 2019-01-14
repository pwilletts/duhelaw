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
                <div className="col-12 header-img nopadding">
                    <Header/>
                </div>         
                <section class="col-12 bg-color">
                    <PracticeAreasGrid/>
                </section>
                <section className="col-12">
                    <ShortAbout/>
                </section>
                <section className="col-12 mr-auto ml-auto bg-color">
                    <ReviewsWidget/>
                </section>
                <section className="col-12 mr-auto ml-auto">
                    <ContactForm/>
                </section>
                <section className="col-12 mb-4" style={{backgroundColor:'#f3efe0'}}>
                    <Locations/>
                </section>
            </div>
      );
    }
  }
  
  export default Home;