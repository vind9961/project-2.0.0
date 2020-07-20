import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Medical from './MedicalComponent';
import DoctorConsultation from './DoctorConsultationComponent'
import {connect} from 'react-redux';
import AboutUs from './AboutUs';
import Product from './HealthProductComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

const mapStateToProps = state => {
	return {
		HealthProduct: state.HealthProduct,
		slide: state.slide,
		Lab: state.Lab,
		Medicine: state.Medicine
	}
}


class Main extends React.Component{

	render(){
		console.log(this.props.Lab);
		return(
			<>
			<Header />
			<Switch>
				<Route exact path='/' component={()=> <Home slide={this.props.slide} Lab={this.props.Lab} />} />
				<Route path='/HealthProduct' component={() =>
					<Product item = {this.props.HealthProduct} />
				} />
			  <Route path='/medical' component={()=><Medical medicine={this.props.Medicine} />}/>
				<Route path='/consultation' component={DoctorConsultation} />
				<Route path='/aboutUs' component={AboutUs} />
				<Redirect to='/' />
			</Switch>
			<Footer />
			</>
			);
	}
}

export default withRouter(connect(mapStateToProps)(Main));
