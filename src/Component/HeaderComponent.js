import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, Nav, Modal, ModalBody, ModalHeader, Input, Button,
	Label, Form, FormGroup} from 'reactstrap';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleSignInModal = this.toggleSignInModal.bind(this);
		this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
        this.state = {
          isNavOpen: false,
					isSignInModalOpen: false,
					isSignUpModalOpen: false
        };
    }

        toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
			toggleSignInModal (){
				this.setState({isSignInModalOpen: !this.state.isSignInModalOpen});
			}

			toggleSignUpModal(){
				this.setState({isSignUpModalOpen: !this.state.isSignUpModalOpen});
			}



	render(){
		return(
			<>
			  <Navbar dark expand="md">
                <div className="container">
                  <NavbarBrand className="mr-auto" href='/'><img src='../assests/img/logo.png' height="40"
									 width="50" alt="Medical Store"/></NavbarBrand>
									 <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className='ml-auto'>
											<NavItem>
												<a className='btn btn-link' id='link' href="/" ><span className="fa fa-home fa-lg"></span> Home</a>
											</NavItem>
	                      <NavItem>
	                        <button className='btn btn-link' id='link' ><span className="fa fa-shopping-cart fa-lg"></span> Cart</button>
	                      </NavItem>
	                      <NavItem>
	                        <button className=" btn btn-link" id='link' onClick={this.toggleSignUpModal}><span className="fa fa-sign-in fa-lg"></span> Sign Up</button>
	                      </NavItem>
	                      <NavItem>
	                        <button type="button" className="btn btn-link" id='link' onClick={this.toggleSignInModal}><span className="fa fa-sign-in fa-lg"></span> Sign In</button>
	                      </NavItem>
                    </Nav>
                  </Collapse>
                 </div>
					</Navbar>
					<Modal isOpen={this.state.isSignInModalOpen} toggle ={this.toggleSignInModal}>
						<ModalHeader toggle ={this.toggleSignInModal}><strong>Sign In</strong></ModalHeader>
						<ModalBody>
							<Form>
								<FormGroup>
									<Label htmlFor="email">Email</Label>
									<Input className="form-control" name="email1" type="email" placeholder="abc@gmail.com" />
								</FormGroup>
								<FormGroup>
									<Label htmlFor="password">Password</Label>
									<Input className="form-control" name="password1" type="password" placeholder="Minimum 8 character including special character i.e = @#$%^&* " />
								</FormGroup>
								<FormGroup>
									<Button type="submit" className="btn btn-success">Login</Button>
								</FormGroup>
							</Form>
						</ModalBody>
					</Modal>
					<Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal}>
						<ModalHeader  toggle={this.toggleSignUpModal}><strong>Sign Up</strong></ModalHeader>
						<ModalBody>
							<Form>
								<FormGroup>
									<Label htmlFor="name">Name</Label>
									<Input name="name" type="text" placeholder="Enter Your Name" />
								</FormGroup>
								<FormGroup>
									<Label htmlFor="email">Email</Label>
									<Input  name="email2" type="email" placeholder="abc@gmail.com" />
								</FormGroup>
								<FormGroup>
									<Label htmlFor="password">Create Password</Label>
									<Input className="form-control" name="password2" type="password" placeholder="Minimum 8 character including special character i.e = @#$%^&* " />
								</FormGroup>
								<FormGroup>
									<Label htmlFor="password">Confirm Password</Label>
									<Input className="form-control" name="password3" type="password" placeholder="Minimum 8 character including special character i.e = @#$%^&* " />
								</FormGroup>
								<FormGroup>
									<Button type="submit" className="btn-success">Sign Up</Button>
								</FormGroup>
							</Form>
						</ModalBody>
					</Modal>
			</>
			);
	}
}

export default Header;
