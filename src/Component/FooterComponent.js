import React from 'react';

function Footer(props){
	return(
		<div className="footer p-4">
		  <div className="container">
			<div className="row mb-4">
				<div className="col-sm-3">
					<h4>Whatsapp Us</h4>
					<a href="www.whatsapp.com"><i className="fa fa-whatsapp"></i> 9455147882</a>
				</div>
				<div className="col-sm-3">
					<h4>Follow us on</h4>
					<a href="www.twitter.com" className="btn btn-twitter btn-circle"><i className="fa fa-twitter"></i> </a> <a href="www.facebook.com" className="btn btn-facebook btn-circle ml-4"><i className="fa fa-facebook"></i></a>
				</div>
				<div className="col-sm-3">
					<h4>Subscribe newsletter</h4>
					<div className="input-group input-group-sm">
						<input className="form-control" type="email" name="email" placeholder="email@domain"/>
						<button className="btn btn-success input-group-append">Subscribe</button>
					</div>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-sm-3">
					<h4>Give a missed call to Download app</h4>
					<a href="/call: +919455887482"><span className="fa fa-phone"></span> 9455887482</a>
				</div>
				<div className="col-sm-3">
					<h4>Download our app</h4>
					<a href="www.playstore.com" className="btn "><i className="fa fa-play fa-lg"></i></a>
					<a href="www.playstore.com" className="btn "><i className="fa fa-android fa-lg"></i></a>
				</div>
				<div className="col-sm-3"></div>
			</div><hr />
			<div className="row mb-4">
				<div className="col-sm-3">
					<h4>For Customers</h4>
					<a href="/medical">Medical Store</a><br />
					<a href="/HealthProduct">Health Products</a><br />
					<a href="/consultation">Doctor consultation</a><br />
					<a href="/">lab test</a><br />
					<a href="/consultation">Find doctor</a><br />
					<a href="/aboutUs">About Us</a><br />
					<a href="/">Offers/coupons</a><br />
				</div>
				<div className="col-sm-3">
					<h4>For our doctors</h4>
					<a href="/">For doctor</a><br />
					<a href="/">Book a demo</a><br /><br />
					<h4>Partner with us</h4>
					<a href="/">Affilates</a><br />
					<a href="/">Franchise</a><br />
					<a href="/">Sell with us</a>
				</div>
				<div className="col-sm-3">
					<h4>Help</h4>
					<a href="/">FAQ</a><br />
					<a href="/">Return policy</a><br />
					<a href="/">Terms and condition</a><br />
					<a href="/">Privacy policy</a><br />
				</div>
				<div className="col-sm-3">
					<h4>Health Care</h4>
					<a href="/">Blogs</a><br />
					<a href="/">Carrers</a><br />
					<a href="/">Life</a><br />
					<a href="/">Contact Us</a><br />
				</div>
			</div>
			<p className="text-center">Copyright &copy; 1990</p>
		</div>
		</div>
		);
}

export default Footer;
