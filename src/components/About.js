import React from 'react'

class About extends React.Component {
    render() {
      return (
        <div style={{width:"100%",height:"100%"}}>
            <div style={{width:"70%",margin:'auto',backgroundColor:'#000080'}}>
                <div style={{width:'30%',color:"white",display:'inline-block'}}>
                    <div style={{width:'100%',textAlign:'center',border:'1px solid white'}}>
                        image would go here
                    </div>
                </div>
                <div style={{width:'70%',color:'white',border:'1px solid yellow',display:'inline-block'}}>
                    <div style={{width:'100%', textAlign:'center'}}>
                        Bio would go here
                    </div>
                </div>
                <div style={{width:'100%',border:'1px solid red',color:'white',textAlign:'center'}}>
                    Contact information would go here
                </div>
                <div style={{width:'100%',border:'1px solid red',color:'white',textAlign:'center'}}>
                    Map information would go here
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default About;