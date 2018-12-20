import React from 'react'

class PracticeAreas extends React.Component {
    render() {
      return (
        <div style={{width:"100%"}}>
            <div style={{width:"80%",margin:'auto'}}>
                <div style={{width:'100%',color:'white',textAlign:'center',fontSize:24}}>
                    Below are our Firms Practice Areas
                </div>
                <div style={{width:"100%",height:300,paddingTop:15,height:300}}>
                    <div style={{width:"50%",textAlign:'center',border:'1px solid yellow',float:'left'}}>
                        <div>
                            <div style={{display:"inline-block",width:'33%',height:100}}>
                                Assualt
                            </div>
                            <div style={{display:"inline-block",width:'34%',height:100}}>
                                Drug Charges
                            </div>
                            <div style={{display:"inline-block",width:'33%',height:100}}>
                                a
                            </div>
                            <div style={{display:"inline-block",width:'33%',height:100}}>
                                a
                            </div>
                            <div style={{display:"inline-block",width:'34%',height:100}}>
                                a
                            </div>
                            <div style={{display:"inline-block",width:'33%',height:100}}>
                                a
                            </div>
                            <div style={{display:"inline-block",width:'33%',height:100}}>
                                a
                            </div>
                            <div style={{display:"inline-block",width:'34%',height:100}}>
                                a
                            </div>
                            <div style={{display:"inline-block",width:'33%',height:100}}>
                                a
                            </div>
                        </div>
                    </div>
                    <div style={{width:"50%",height:'100%',textAlign:'center',border:'1px solid red',float:'left'}}>
                        <div style={{width:'80%',margin:'auto',marginTop:50,verticalAlign:'middle',height:300}}>
                            Here we update the charge description and what the client should do next
                        </div>                    
                    </div>
                </div>
                <div style={{width:"100%",border:'1px solid blue',float:'left',textAlign:'center'}}>
                    Contact form will go here
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default PracticeAreas;