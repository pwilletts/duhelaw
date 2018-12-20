import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render() {
      return (
        <div style={{backgroundColor:"#000080", width:'100%', height:50}}>
            <div style={{width:"90%",margin:"auto"}}>
                <div style={{width:"30%", color:"white", paddingTop:10,display:"inline-block",textAlign:"left",fontSize:18}}>
                    Duhe Willetts Law P.L.L.C
                </div>
                <div style={{width:"40%", color:"white", paddingTop:10,display:"inline-block",textAlign:"center"}}>
                    Logo will go here
                </div>
                <div style={{width:"30%", color:"white", paddingTop:10,display:"inline-block",textAlign:'right'}}>
                    <ul style={{display:"inline"}}>
                        <Link to="/">
                            <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:18,color:'white'}}>Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:18,color:'white'}}>About</li>
                        </Link>
                        <Link to="/practice-areas">
                            <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:18,color:'white'}}>Practice Areas</li>
                        </Link>
                        <Link to="/current-clients">
                            <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:18,color:'white'}}>Current Clients</li>
                        </Link>                       
                    </ul>
                </div>
            </div>          
        </div>
      );
    }
  }
  
  export default Home;