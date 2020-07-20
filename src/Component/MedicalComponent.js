import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';



function Medical (props){

	const item = props.medicine.map((product) => {
		return (
			<div className="col-6 col-sm-3 mt-3"  key={product.id}>
					<Card>
						<CardImg src={product.image} alt={product.name} />
						<CardBody>
							<h4 className="text-danger">{product.name}</h4>
							<strong>Price: {product.price}</strong>
							<h5>Quantity : {product.quantity}</h5>
							<h6>About Product : <br /> {product.about}</h6>
							<button className="btn btn-danger">Buy Product</button>
						</CardBody>
					</Card>
			 </div>
		);
	});

	return(
		<div className="container">
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem><Link to ='/'>Home</Link></BreadcrumbItem>
					<BreadcrumbItem active>Medical Store</BreadcrumbItem>
				</Breadcrumb>
				<div className='col-12'>
					<h4>Upload Doctor's Prescription</h4>
					<hr />
				</div>
			</div>
			<div className="row justify-content-center mb-5">
				<div className="input-group col-12 col-md-8">
					<input type='text' placeholder="Search medicine" className="form-control" />
					<div className="input-group-append">
						<button className="btn btn-success"><span className="fa fa-search fa-large"> Search</span></button>
					</div>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-12 col-md-4">
					<h4 className="text-center">Need More help</h4>
					<button className="btn btn-block btn-danger">Subscribe</button>
				</div>
				<div className="col-12 col-md-4">
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
				<div className="col-12 col-md-4">
					<h4 className="text-center">Don't have prescription</h4>
					<button className="btn btn-info btn-block">Get Started</button>
				</div>
			</div>
			<div className="row my-5">
			{item}
			</div>
		</div>
	);
}

export default Medical;
