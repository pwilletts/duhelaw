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
                <section class="col-12" style={{backgroundColor:'#f3efe0'}}>
                    <PracticeAreasGrid/>
                </section>
                <section className="col-12">
                    <ShortAbout/>
                </section>
                <section className="col-12 mr-auto ml-auto mt-4" style={{backgroundColor:'#f3efe0'}}>
                    <ReviewsWidget/>
                </section>
                <section className="col-lg-8 col-md-10 col-12 mr-auto ml-auto">
                    <ContactForm/>
                </section>
                <section className="col-12 col-md-12 col-lg-10 col-xl-10 mr-auto ml-auto row mb-4">
                    <Locations/>
                </section>
            </div>
      );
    }
  }
  
  export default Home;