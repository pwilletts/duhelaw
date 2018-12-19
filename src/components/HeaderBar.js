import React from 'react'

class Home extends React.Component {
    render() {
      return (
        <div style={{backgroundColor:"#000080", width:'100%', height:50}}>
            <div style={{width:"90%",margin:"auto"}}>
                <div style={{width:"30%", color:"white", paddingTop:10,display:"inline-block",textAlign:"left",fontSize:20}}>
                    Duhe Willetts Law P.L.L.C
                </div>
                <div style={{width:"40%", color:"white", paddingTop:10,display:"inline-block",textAlign:"center"}}>
                    Logo will go here
                </div>
                <div style={{width:"30%", color:"white", paddingTop:10,display:"inline-block",textAlign:'right'}}>
                    <ul style={{display:"inline"}}>
                        <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:20}}>Home</li>
                        <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:20}}>About</li>
                        <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:20}}>Practice Areas</li>
                        <li className="pointer" style={{display:"inline",listStyle:"none",marginRight:15,fontSize:20}}>Current Clients</li>
                    </ul>
                </div>
            </div>          
        </div>
      );
    }
  }
  
  export default Home;