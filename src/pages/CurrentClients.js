import React from 'react'
import ContactForm from '../components/ContactForm'
import ReactGA from 'react-ga'

class CurrentClients extends React.Component{
    componentDidMount(){
        ReactGA.initialize('UA-132864646-1');
        ReactGA.pageview('/current-clients');
    }
  
    render(){
        return(
            <div className="col-12 mr-auto ml-auto text-center">
                <div className="col-12">
                    <div className="col-8 mr-auto ml-auto" style={{paddingTop:80}}>
                        <div className="col-12 text-center mt-3">
                            <h2>Current Clients</h2>
                        </div>
                        <div className="col-12 row mt-3">
                            <div className="col-6">
                                <h3>Make a Payment</h3>
                                <h5 style={{paddingBottom:25}}>
                                    We accept all forms of payments. If you have an inquiry about a balance owed, don't hesitate to contact us. Use the link below or please call us to make a payment.
                                </h5>
                                <a target="_blank" href="https:secure.lawpay.com/pages/duhelaw/operating"><button type="button" className="btn btn-primary">Make Payment</button></a>
                            </div>
                            <div className="col-6">
                                <h3>Find Your Court Date</h3>
                                <h5 style={{paddingBottom:25}}>
                                    Find your pending criminal courtdate using the link below.  Enter your name and the county you are charged in, and then hit search. Contact our office with any additional questions.
                                </h5>
                                <a target="_blank" href="https:secure.lawpay.com/pages/duhelaw/operating"><button type="button" className="btn btn-primary">Find Court Date</button></a>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="col-12" style={{width:'100%',backgroundColor:'#f3efe0', marginTop:50,paddingTop:30,paddingBottom:50}}>
                    <div className="col-8 mr-auto ml-auto">
                        <div className="col-12">
                            <h2>Other Helpful Links</h2>
                        </div>
                        <div className="col-12 row nopadding">
                            <div className="col-6">
                                <h3>Brunswick County Inmate Search</h3>
                                <h5 style={{paddingBottom:25}}>
                                    Use this link to find an inmate at the Brunswick Country Prison, located in Bolivia
                                </h5>
                                <a target="_blank" href="https:secure.lawpay.com/pages/duhelaw/operating"><button type="button" className="btn btn-primary">Find Court Date</button></a>
                            </div>
                            <div className="col-6">
                                <h3>New Hanover County Search</h3>
                                <h5 style={{paddingBottom:25}}>
                                    Use this link to find an inmate at the New Hanover Country Prison, located in Castle Hayne
                                </h5>
                                <a target="_blank" href="https:secure.lawpay.com/pages/duhelaw/operating"><button type="button" className="btn btn-primary">Find Court Date</button></a>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
}

export default CurrentClients