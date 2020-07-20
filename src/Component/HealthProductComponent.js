import React from 'react';
import { Card, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const Product = (props) => {
  const item = props.item.map((product) => {
    return (
      <div className="col-6 col-sm-3 mt-4">
          <Card key={product.id}>
            <CardImg src={product.image} alt={product.name} />
            <CardBody>
              <h4 className="text-danger">{product.name}</h4>
              <strong>Price: {product.price}</strong>
              <h6>About Product <br /> {product.about}</h6>
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
            <BreadcrumbItem active> Health Product</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h4>Health Product</h4>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="input-group col-12 col-md-8">
          <input type='text' placeholder="Search Health Product" className="form-control" />
          <div className="input-group-append">
            <button className="btn btn-success"><span className="fa fa-search fa-large"> Search</span></button>
          </div>
          </div>
        </div>
        <div className="row mb-4">
          {item}
        </div>
    </div>
  );
}

export default Product;
