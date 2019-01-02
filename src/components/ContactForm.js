import React from 'react'
import {Link} from 'react-router-dom'

class ContactForm extends React.Component {
    render() {
      return (
        <React.Fragment>
            <div className="col-12 text-center">
                <h4>Contact Now! Free Consultations!</h4>
            </div>
            <form>
                <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Name</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Jordan Duhe"></input>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputPassword4">Contact #</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="910-763-4323"></input>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputPassword4">Email</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="duhelaw@gmail.com"></input>
                </div>
                </div>
                <div class="form-row">
                <div className="form-group col-md-12">
                    <label for="textarea">Description</label>
                    <textarea className="form-control" id="textarea" rows='6'></textarea>
                </div>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </React.Fragment>
      );
    }
  }
  
  export default ContactForm;