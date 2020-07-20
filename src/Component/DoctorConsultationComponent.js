import React from 'react';
import {Button, Col, Row, Label, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';
import {Link } from 'react-router-dom';

const required = (value) => value && value.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isNumber = (val) => !isNaN(Number(val));




class DoctorConsultation extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(value){
    alert("status" + JSON.stringify(value));
  }



  render(){
      return(

        <div className ="container">
          <div className='row'>
            <Breadcrumb>
              <BreadcrumbItem><Link to ='/'>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active> Doctor Consultation </BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
              <h4>Book Appointment</h4>
              <hr />
            </div>
          </div>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <Row className="form-group">
              <Label md={2} htmlFor="patientName">Patient Name</Label>
              <Col className="mr-2">
                <Control.text model=".firstName" className="form-control"
                 id="firstName" name="firstName" placeholder="First Name"
                 validators={{required}}/>
                 <Errors className="text-danger"
                 model=".firstName"
                 show="touched"
                 messages={{required: "Required"}}
                 />
              </Col>
              <Col>
                <Control.text model=".lastName" id="lastName" name="lastName" className="form-control"
                 placeholder="Last Name" />
              </Col>
            </Row>

            <Row className="form-group">
              <Label md={2} htmlFor="fatherName">Patient's Father Name</Label>
              <Col>
                <Control.text model=".fatherFirstName" id="fatherFirstName"
                 className="form-control" name="fatherFirstName" placeholder="First Name"
                 validators={{required}} />
                 <Errors className="text-danger"
                 model=".fatherFirstName"
                 show="touched"
                 messages={{required: "Required"}}
                 />
              </Col>
              <Col>
                <Control.text model=".fatherLastName" id="fatherLastName" className="form-control" name="fatherLastName" placeholder="Last Name" />
              </Col>
            </Row>
            <Row className="form-group">
              <Label md={2} htmlFor='gender'>Select Gender</Label>
              <Col md={5} className="col-6">
                <Control.select model=".gender" id="gender" name="gender" className="form-control">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label md={2} htmlFor='dob'>Date of Birth</Label>
              <Col md={5}>
                <Control type='date' model='.dob' name='dob' className='form-control' validators={{required}} />
                <Errors className="text-danger"
                model=".dob"
                show="touched"
                messages={{required: "Required"}}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label md={2} htmlFor="number">Mobile Number</Label>
              <Col md={2} className="col-3">
                <Control.select model=".countrycode" name="countrycode" className="form-control" validators={{required}}>
                <option disabled selected>Contry Code</option>
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
                <option>+39</option>
                <option>+7</option>
                <option>+34</option>
                <option>+98</option>
                <option>+10</option>
                </Control.select>
                <Errors className="text-danger"
                model=".countrycode"
                show="touched"
                messages={{required: "Required"}}
                />
              </Col>
              <Col md={3} className="col-9">
                <Control.text model=".number" className="form-control"
                 id='number' name="number" placeholder="Mobile Number"
                 validators={{required, isNumber}}  />
                 <Errors className="text-danger"
                 model=".number"
                 show="touched"
                 messages={{required: "Required", isNumber: "Must be a Number"}}
                 />
              </Col>
            </Row>
            <Row className="form-group">
              <Label md={2} htmlFor="email">Email</Label>
              <Col md={5}>
                <Control.text model='.email' name="email" className='form-control'
                 placeholder="i.e. abc@xyz.com"
                 validators={{validEmail}}/>
                 <Errors className="text-danger"
                 model=".email"
                 show="touched"
                 messages={{validEmail: "Invalid Email Address"}}
                 />
              </Col>
            </Row>
            <Row className="form-group">
              <Label md={2} htmlFor="time">Appointment Date & Time</Label>
              <Col md={5} className="col-6">
                <Control type='date' model='.date' name='date'
                className="form-control" validators={{required}} />
                <Errors className="text-danger"
                model=".date"
                show="touched"
                messages={{required: "Required"}}
                />
              </Col>
              <Col md={5} className="col-6">
                <Control type='time' model='.time' name='time' className="form-control" />
              </Col>
            </Row>
            <Row className="form-group">
              <Label md={2} htmlFor='address1'>Persent Address</Label>
              <Col md={4}>
                <Control.text model='.city' className='form-control' name='city' placeholder="city or village" /><br/>
                <Control.text model='.post' className='form-control' name='post' placeholder="Post Office" /><br/>
                <Control.text model='.pincode' className='form-control' name='pincode' placeholder="Pincode" /><br/>
                <Control.text model='.district' className='form-control' name='district' placeholder="District" /><br/>
                <Control.select model=".state" className="form-control" name='state'>
                <option disabled selected>Select State</option>
                <option>Uttar Pardesh</option>
                <option>Madhya Pardesh</option>
                <option>Bihar</option>
                <option>Delhi</option>
                </Control.select>
              </Col>
              <Label md={2} htmlFor="address2">Parmanent Address</Label>
              <Col md={4}>
              <div className="form-check">
              <Label check>
                <Control.checkbox model='.agree' name ='agree' className="form-check-input" />
                <strong>Same as Persent address</strong>
              </Label>
              </div>
                <Control.text model='.city1' className='form-control' name='city1' placeholder="city or village" /><br/>
                <Control.text model='.post1' className='form-control' name='post1' placeholder="Post Office" /><br/>
                <Control.text model='.pincode1' className='form-control' name='pincode1' placeholder="Pincode" /><br/>
                <Control.text model='.district1' className='form-control' name='district1' placeholder="District" /><br/>
                <Control.select model=".state1" className="form-control" name='state1'>
                <option disabled selected>Select State</option>
                <option>Uttar Pardesh</option>
                <option>Madhya Pardesh</option>
                <option>Bihar</option>
                <option>Delhi</option>
                </Control.select>
                </Col>
            </Row>
            <Row className="form-group mt-3 justify-content-center">
              <Button type="submit" className="bg-success">Book Appointment</Button>
            </Row>
          </LocalForm>

        </div>
        );



  }
}

export default DoctorConsultation;
