import React from 'react';
import{Button} from 'reactstrap';
import CarouselShow from './CarouselComponent.js';
import RenderItem from './PathLabComponent';

class Home extends React.Component {


	render(){
		return(

			<div className="container str mt-2">
				<div className="row">
					<div className="col-12 col-sm-2">
						<Button className="btn-outline-info btn-block"><strong>Call To Order <br/>
						<span className="fa fa-phone fa-lg"></span> 1800-180-255 </strong></Button>
					</div>
					<div className='col-3 col-sm-2'>
						<a className='nav-link' id="link1" href = "/medical"><strong>Medical Store</strong></a>
					</div>
					<div className='col-3 col-sm-2'>
						<a className='nav-link' id="link1" href = "/HealthProduct"><strong>Health Product</strong></a>
					</div>
					<div className='col-3 col-sm-3'>
						<a className='nav-link' id="link1" href = "/consultation"><strong>Doctor Consultation</strong></a>
					</div>
					<div className='col-3 col-sm-2'>
						<a className='nav-link' id="link1" href = "/aboutUs"><strong>About Us</strong></a>
					</div>
				</div>



				<div className="row mt-4">
					<div className = 'col-12 col-sm-3 mt-4 d-none d-sm-block'>
						<img className="img-fluid img-thumbnail" alt="slogan" src="assests/img/slogan.jpg" />
					</div>
					<div className="col-12 col-sm-9">
						<CarouselShow slide= {this.props.slide}/>
					</div>
				</div>
				<div className="row gen mt-1">
					<p className="col-sm-3 col-3 mt-2"><span className="fa fa-certificate"></span> Genuine Medicines</p>
					<p className="col-sm-3 col-3 mt-2"><span className="fa fa-truck"></span> Timely Delivery</p>
					<p className="col-sm-3 col-3 mt-2"><span className="fa fa-exchange"></span> Easy Return Refund</p>
					<p className="col-sm-3 col-3 mt-2"><span className="fa fa-credit-card"></span> Secure Payment</p>
				</div>

					<div className="row mt-4">
						<h2 className="text-center col-sm-12">Book Medicine</h2>
					</div>
					<div className="row">
						<div className="col-sm-4 my-4">
							<p className="text-center">Need Medicines on regular basis ? </p>
							<a href="/" className="btn btn-danger btn-block">Subscribe Now</a>
						</div>
						<div className="col-sm-4 my-4">
							<h4 className="text-center">Have a prescription</h4>
							<div className="input-group">
								<div className="custom-file">
									<input type="file" className="custom-file-input" id="file" />
									<label className="custom-file-label" htmlFor="file">Choose file </label>
								</div>
								<div className="input-group-append">
									<button className="btn btn-outline-danger" type="button">Submit</button>
								</div>
							</div>
						</div>
						<div className="col-sm-4 my-4">
							<p className="text-center">Don't have prescription</p>
							<a href="/" className="btn btn-info btn-block">Get Started</a>
						</div>
					</div>
					<div className="row">
						<RenderItem item={this.props.Lab} />
					</div>


			</div>

		);
	}
}
export default Home;
