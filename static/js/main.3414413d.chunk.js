(this["webpackJsonpproject-2.0.0"]=this["webpackJsonpproject-2.0.0"]||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(15),c=a.n(r),m=(a(85),a(86),a(87),a(88),a(16)),o=a(17),s=a(18),i=a(19),u=(a(89),a(26)),d=a(2),E=a(6),p=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).toggleNav=l.toggleNav.bind(Object(u.a)(l)),l.toggleSignInModal=l.toggleSignInModal.bind(Object(u.a)(l)),l.toggleSignUpModal=l.toggleSignUpModal.bind(Object(u.a)(l)),l.state={isNavOpen:!1,isSignInModalOpen:!1,isSignUpModalOpen:!1},l}return Object(o.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleSignInModal",value:function(){this.setState({isSignInModalOpen:!this.state.isSignInModalOpen})}},{key:"toggleSignUpModal",value:function(){this.setState({isSignUpModalOpen:!this.state.isSignUpModalOpen})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.w,{dark:!0,expand:"md"},n.a.createElement("div",{className:"container"},n.a.createElement(d.x,{className:"mr-auto",href:"/"},n.a.createElement("img",{src:"https://vind9961.github.io/project-2.0.0/assests/img/logo.png",height:"40",width:"50",alt:"Medical Store"})),n.a.createElement("h2",{className:"text-center mr-auto ml-4 pharmacy"},"pharmacy.com"),n.a.createElement(d.y,{onClick:this.toggleNav}),n.a.createElement(d.m,{isOpen:this.state.isNavOpen,navbar:!0},n.a.createElement(d.u,{navbar:!0,className:"ml-auto"},n.a.createElement(d.v,{className:"text-center"},n.a.createElement(E.b,{className:"nav-link",id:"link",to:"/"},n.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),n.a.createElement(d.v,{className:"text-center"},n.a.createElement(E.b,{className:"btn btn-link",id:"link",to:"/cart"},n.a.createElement("span",{className:"fa fa-shopping-cart fa-lg"})," Cart")),n.a.createElement(d.v,{className:"text-center"},n.a.createElement("button",{className:" btn btn-link",id:"link",onClick:this.toggleSignUpModal},n.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Sign Up")),n.a.createElement(d.v,{className:"text-center"},n.a.createElement("button",{type:"button",className:"btn btn-link",id:"link",onClick:this.toggleSignInModal},n.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Sign In")))))),n.a.createElement(d.r,{isOpen:this.state.isSignInModalOpen,toggle:this.toggleSignInModal},n.a.createElement(d.t,{toggle:this.toggleSignInModal},n.a.createElement("strong",null,"Sign In")),n.a.createElement(d.s,null,n.a.createElement(d.n,null,n.a.createElement(d.o,null,n.a.createElement(d.q,{htmlFor:"email"},"Email"),n.a.createElement(d.p,{className:"form-control",name:"email1",type:"email",placeholder:"abc@gmail.com"})),n.a.createElement(d.o,null,n.a.createElement(d.q,{htmlFor:"password"},"Password"),n.a.createElement(d.p,{className:"form-control",name:"password1",type:"password",placeholder:"Minimum 8 character including special character i.e = @#$%^&* "})),n.a.createElement(d.o,null,n.a.createElement(d.c,{type:"submit",className:"btn btn-success"},"Login"))))),n.a.createElement(d.r,{isOpen:this.state.isSignUpModalOpen,toggle:this.toggleSignUpModal},n.a.createElement(d.t,{toggle:this.toggleSignUpModal},n.a.createElement("strong",null,"Sign Up")),n.a.createElement(d.s,null,n.a.createElement(d.n,null,n.a.createElement(d.o,null,n.a.createElement(d.q,{htmlFor:"name"},"Name"),n.a.createElement(d.p,{name:"name",type:"text",placeholder:"Enter Your Name"})),n.a.createElement(d.o,null,n.a.createElement(d.q,{htmlFor:"email"},"Email"),n.a.createElement(d.p,{name:"email2",type:"email",placeholder:"abc@gmail.com"})),n.a.createElement(d.o,null,n.a.createElement(d.q,{htmlFor:"password"},"Create Password"),n.a.createElement(d.p,{className:"form-control",name:"password2",type:"password",placeholder:"Minimum 8 character including special character i.e = @#$%^&* "})),n.a.createElement(d.o,null,n.a.createElement(d.q,{htmlFor:"password"},"Confirm Password"),n.a.createElement(d.p,{className:"form-control",name:"password3",type:"password",placeholder:"Minimum 8 character including special character i.e = @#$%^&* "})),n.a.createElement(d.o,null,n.a.createElement(d.c,{type:"submit",className:"btn-success"},"Sign Up"))))))}}]),a}(n.a.Component),h=a(63),b=function(e){var t=Object(l.useState)(0),a=Object(h.a)(t,2),r=a[0],c=a[1],m=Object(l.useState)(!1),o=Object(h.a)(m,2),s=o[0],i=o[1],u=e.slide,E=function(){if(!s){var e=r===u.length-1?0:r+1;c(e)}},p=function(){if(!s){var e=0===r?u.length-1:r-1;c(e)}},b=u.map((function(e){return n.a.createElement(d.k,{onExiting:function(){return i(!0)},onExited:function(){return i(!1)},key:e.altText},n.a.createElement("img",{src:e.src,alt:e.altText,className:"img-fluid"}))}));return n.a.createElement(d.h,{activeIndex:r,next:E,previous:p},n.a.createElement(d.j,{items:u,activeIndex:r,onClickHandler:function(e){s||c(e)}}),b,n.a.createElement(d.i,{direction:"prev",directionText:"Previous",onClickHandler:p}),n.a.createElement(d.i,{direction:"next",directionText:"Next",onClickHandler:E}))},g=function(e){var t=e.item.map((function(e){return n.a.createElement("div",{className:"col-12 col-sm-4 mt-3",key:e.id},n.a.createElement(d.d,null,n.a.createElement(d.f,{src:e.img}),n.a.createElement("div",{className:"container p-4"},n.a.createElement(d.g,null,e.name),n.a.createElement("div",{className:"text-right"},e.detail,n.a.createElement("br",null),e.price," ",n.a.createElement("br",null),n.a.createElement("strong",{className:"text-danger"},e.off),n.a.createElement("br",null),n.a.createElement("button",{className:"btn btn-outline-success mt-3"},"Book Now")))))}));return n.a.createElement(n.a.Fragment,null,t)},f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container str mt-2"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-sm-2"},n.a.createElement(d.c,{className:"btn-outline-info btn-block"},n.a.createElement("strong",null,"Call To Order ",n.a.createElement("br",null),n.a.createElement("span",{className:"fa fa-phone fa-lg"})," 1800-180-255 "))),n.a.createElement("div",{className:"col-3 col-sm-2"},n.a.createElement(E.b,{id:"link1",to:"/medical"},n.a.createElement("strong",null,"Medical Store"))),n.a.createElement("div",{className:"col-3 col-sm-2"},n.a.createElement(E.b,{id:"link1",to:"/HealthProduct"},n.a.createElement("strong",null,"Health Product"))),n.a.createElement("div",{className:"col-3 col-sm-3"},n.a.createElement(E.b,{id:"link1",to:"/consultation"},n.a.createElement("strong",null,"Doctor Consultation"))),n.a.createElement("div",{className:"col-3 col-sm-2"},n.a.createElement(E.b,{id:"link1",to:"/aboutUs"},n.a.createElement("strong",null,"About Us")))),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-12 col-sm-3 mt-4 d-none d-sm-block"},n.a.createElement("img",{className:"img-fluid img-thumbnail",alt:"slogan",src:"https://vind9961.github.io/project-2.0.0/assests/img/slogan.jpg"})),n.a.createElement("div",{className:"col-12 col-sm-9"},n.a.createElement(b,{slide:this.props.slide}))),n.a.createElement("div",{className:"row gen mt-1"},n.a.createElement("p",{className:"col-sm-3 col-3 mt-2"},n.a.createElement("span",{className:"fa fa-certificate"})," Genuine Medicines"),n.a.createElement("p",{className:"col-sm-3 col-3 mt-2"},n.a.createElement("span",{className:"fa fa-truck"})," Timely Delivery"),n.a.createElement("p",{className:"col-sm-3 col-3 mt-2"},n.a.createElement("span",{className:"fa fa-exchange"})," Easy Return Refund"),n.a.createElement("p",{className:"col-sm-3 col-3 mt-2"},n.a.createElement("span",{className:"fa fa-credit-card"})," Secure Payment")),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("h2",{className:"text-center col-sm-12"},"Book Medicine")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4 my-4"},n.a.createElement("p",{className:"text-center"},"Need Medicines on regular basis ? "),n.a.createElement("a",{href:"/",className:"btn btn-danger btn-block"},"Subscribe Now")),n.a.createElement("div",{className:"col-sm-4 my-4"},n.a.createElement("h4",{className:"text-center"},"Have a prescription"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"custom-file"},n.a.createElement("input",{type:"file",className:"custom-file-input",id:"file"}),n.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},"Choose file ")),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-outline-danger",type:"button"},"Submit")))),n.a.createElement("div",{className:"col-sm-4 my-4"},n.a.createElement("p",{className:"text-center"},"Don't have prescription"),n.a.createElement("a",{href:"/",className:"btn btn-info btn-block"},"Get Started"))),n.a.createElement("div",{className:"row"},n.a.createElement(g,{item:this.props.Lab})))}}]),a}(n.a.Component);var N=function(e){return n.a.createElement("div",{className:"footer p-4"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"Whatsapp Us"),n.a.createElement("a",{href:"www.whatsapp.com"},n.a.createElement("i",{className:"fa fa-whatsapp"})," 9455147882")),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"Follow us on"),n.a.createElement("a",{href:"www.twitter.com",className:"btn btn-twitter btn-circle"},n.a.createElement("i",{className:"fa fa-twitter"})," ")," ",n.a.createElement("a",{href:"www.facebook.com",className:"btn btn-facebook btn-circle ml-4"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"Subscribe newsletter"),n.a.createElement("div",{className:"input-group input-group-sm"},n.a.createElement("input",{className:"form-control",type:"email",name:"email",placeholder:"email@domain"}),n.a.createElement("button",{className:"btn btn-success input-group-append"},"Subscribe")))),n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"Give a missed call to Download app"),n.a.createElement("a",{href:"/call: +919455887482"},n.a.createElement("span",{className:"fa fa-phone"})," 9455887482")),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"Download our app"),n.a.createElement("a",{href:"www.playstore.com",className:"btn "},n.a.createElement("i",{className:"fa fa-play fa-lg"})),n.a.createElement("a",{href:"www.playstore.com",className:"btn "},n.a.createElement("i",{className:"fa fa-android fa-lg"}))),n.a.createElement("div",{className:"col-sm-3"})),n.a.createElement("hr",null),n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"For Customers"),n.a.createElement("a",{href:"/medical"},"Medical Store"),n.a.createElement("br",null),n.a.createElement("a",{href:"/HealthProduct"},"Health Products"),n.a.createElement("br",null),n.a.createElement("a",{href:"/consultation"},"Doctor consultation"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"lab test"),n.a.createElement("br",null),n.a.createElement("a",{href:"/consultation"},"Find doctor"),n.a.createElement("br",null),n.a.createElement("a",{href:"/aboutUs"},"About Us"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Offers/coupons"),n.a.createElement("br",null)),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"For our doctors"),n.a.createElement("a",{href:"/"},"For doctor"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Book a demo"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h4",null,"Partner with us"),n.a.createElement("a",{href:"/"},"Affilates"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Franchise"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Sell with us")),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"Help"),n.a.createElement("a",{href:"/"},"FAQ"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Return policy"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Terms and condition"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Privacy policy"),n.a.createElement("br",null)),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("h4",null,"Health Care"),n.a.createElement("a",{href:"/"},"Blogs"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Carrers"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Life"),n.a.createElement("br",null),n.a.createElement("a",{href:"/"},"Contact Us"),n.a.createElement("br",null))),n.a.createElement("p",{className:"text-center"},"Copyright \xa9 1990")))};var v=function(e){var t=e.medicine.map((function(t){return n.a.createElement("div",{className:"col-6 col-sm-4 mt-3",key:t.id},n.a.createElement(d.d,null,n.a.createElement(d.f,{src:t.image,alt:t.name}),n.a.createElement(d.e,null,n.a.createElement("h4",{className:"text-danger"},t.name),n.a.createElement("strong",null,"Price: ",t.price),n.a.createElement("h5",null,"Quantity : ",t.quantity),n.a.createElement("h6",null,"About Product : ",n.a.createElement("br",null)," ",t.about),n.a.createElement("button",{className:"btn btn-outline-info m-1"},"Buy Product"),n.a.createElement("button",{className:"btn btn-outline-danger m-1",onClick:function(){e.addCart(t)}}," Add To Cart"))))}));return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(d.a,null,n.a.createElement(d.b,null,n.a.createElement(E.b,{to:"/"},"Home")),n.a.createElement(d.b,{active:!0},"Medical Store")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"Upload Doctor's Prescription"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row justify-content-center mb-5"},n.a.createElement("div",{className:"input-group col-12 col-md-8"},n.a.createElement("input",{type:"text",placeholder:"Search medicine",className:"form-control"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-success"},n.a.createElement("span",{className:"fa fa-search fa-large"}," Search"))))),n.a.createElement("div",{className:"row mb-4"},n.a.createElement("div",{className:"col-12 col-md-4"},n.a.createElement("h4",{className:"text-center"},"Need More help"),n.a.createElement("button",{className:"btn btn-block btn-danger"},"Subscribe")),n.a.createElement("div",{className:"col-12 col-md-4"},n.a.createElement("h4",{className:"text-center"},"Have a prescription"),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"custom-file"},n.a.createElement("input",{type:"file",className:"custom-file-input",id:"file"}),n.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},"Choose file ")),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-outline-danger",type:"button"},"Submit")))),n.a.createElement("div",{className:"col-12 col-md-4"},n.a.createElement("h4",{className:"text-center"},"Don't have prescription"),n.a.createElement("button",{className:"btn btn-info btn-block"},"Get Started"))),n.a.createElement("div",{className:"row my-5"},t))},y=a(4),j=function(e){return e&&e.length},w=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},S=function(e){return!isNaN(Number(e))},x=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).handleSubmit=l.handleSubmit.bind(Object(u.a)(l)),l}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){alert("status"+JSON.stringify(e))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(d.a,null,n.a.createElement(d.b,null,n.a.createElement(E.b,{to:"/"},"Home")),n.a.createElement(d.b,{active:!0}," Doctor Consultation ")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"Book Appointment"),n.a.createElement("hr",null))),n.a.createElement(y.LocalForm,{onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"patientName"},"Patient Name"),n.a.createElement(d.l,{className:"mr-2"},n.a.createElement(y.Control.text,{model:".firstName",className:"form-control",id:"firstName",name:"firstName",placeholder:"First Name",validators:{required:j}}),n.a.createElement(y.Errors,{className:"text-danger",model:".firstName",show:"touched",messages:{required:"Required"}})),n.a.createElement(d.l,null,n.a.createElement(y.Control.text,{model:".lastName",id:"lastName",name:"lastName",className:"form-control",placeholder:"Last Name"}))),n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"fatherName"},"Patient's Father Name"),n.a.createElement(d.l,null,n.a.createElement(y.Control.text,{model:".fatherFirstName",id:"fatherFirstName",className:"form-control",name:"fatherFirstName",placeholder:"First Name",validators:{required:j}}),n.a.createElement(y.Errors,{className:"text-danger",model:".fatherFirstName",show:"touched",messages:{required:"Required"}})),n.a.createElement(d.l,null,n.a.createElement(y.Control.text,{model:".fatherLastName",id:"fatherLastName",className:"form-control",name:"fatherLastName",placeholder:"Last Name"}))),n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"gender"},"Select Gender"),n.a.createElement(d.l,{md:5,className:"col-6"},n.a.createElement(y.Control.select,{model:".gender",id:"gender",name:"gender",className:"form-control"},n.a.createElement("option",null,"Male"),n.a.createElement("option",null,"Female"),n.a.createElement("option",null,"Other")))),n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"dob"},"Date of Birth"),n.a.createElement(d.l,{md:5},n.a.createElement(y.Control,{type:"date",model:".dob",name:"dob",className:"form-control",validators:{required:j}}),n.a.createElement(y.Errors,{className:"text-danger",model:".dob",show:"touched",messages:{required:"Required"}}))),n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"number"},"Mobile Number"),n.a.createElement(d.l,{md:2,className:"col-3"},n.a.createElement(y.Control.select,{model:".countrycode",name:"countrycode",className:"form-control",validators:{required:j}},n.a.createElement("option",{disabled:!0,selected:!0},"Contry Code"),n.a.createElement("option",null,"+91"),n.a.createElement("option",null,"+1"),n.a.createElement("option",null,"+44"),n.a.createElement("option",null,"+39"),n.a.createElement("option",null,"+7"),n.a.createElement("option",null,"+34"),n.a.createElement("option",null,"+98"),n.a.createElement("option",null,"+10")),n.a.createElement(y.Errors,{className:"text-danger",model:".countrycode",show:"touched",messages:{required:"Required"}})),n.a.createElement(d.l,{md:3,className:"col-9"},n.a.createElement(y.Control.text,{model:".number",className:"form-control",id:"number",name:"number",placeholder:"Mobile Number",validators:{required:j,isNumber:S}}),n.a.createElement(y.Errors,{className:"text-danger",model:".number",show:"touched",messages:{required:"Required",isNumber:"Must be a Number"}}))),n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"email"},"Email"),n.a.createElement(d.l,{md:5},n.a.createElement(y.Control.text,{model:".email",name:"email",className:"form-control",placeholder:"i.e. abc@xyz.com",validators:{validEmail:w}}),n.a.createElement(y.Errors,{className:"text-danger",model:".email",show:"touched",messages:{validEmail:"Invalid Email Address"}}))),n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"time"},"Appointment Date & Time"),n.a.createElement(d.l,{md:5,className:"col-6"},n.a.createElement(y.Control,{type:"date",model:".date",name:"date",className:"form-control",validators:{required:j}}),n.a.createElement(y.Errors,{className:"text-danger",model:".date",show:"touched",messages:{required:"Required"}})),n.a.createElement(d.l,{md:5,className:"col-6"},n.a.createElement(y.Control,{type:"time",model:".time",name:"time",className:"form-control"}))),n.a.createElement(d.z,{className:"form-group"},n.a.createElement(d.q,{md:2,htmlFor:"address1"},"Persent Address"),n.a.createElement(d.l,{md:4},n.a.createElement(y.Control.text,{model:".city",className:"form-control",name:"city",placeholder:"city or village"}),n.a.createElement("br",null),n.a.createElement(y.Control.text,{model:".post",className:"form-control",name:"post",placeholder:"Post Office"}),n.a.createElement("br",null),n.a.createElement(y.Control.text,{model:".pincode",className:"form-control",name:"pincode",placeholder:"Pincode"}),n.a.createElement("br",null),n.a.createElement(y.Control.text,{model:".district",className:"form-control",name:"district",placeholder:"District"}),n.a.createElement("br",null),n.a.createElement(y.Control.select,{model:".state",className:"form-control",name:"state"},n.a.createElement("option",{disabled:!0,selected:!0},"Select State"),n.a.createElement("option",null,"Uttar Pardesh"),n.a.createElement("option",null,"Madhya Pardesh"),n.a.createElement("option",null,"Bihar"),n.a.createElement("option",null,"Delhi"))),n.a.createElement(d.q,{md:2,htmlFor:"address2"},"Parmanent Address"),n.a.createElement(d.l,{md:4},n.a.createElement("div",{className:"form-check"},n.a.createElement(d.q,{check:!0},n.a.createElement(y.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"}),n.a.createElement("strong",null,"Same as Persent address"))),n.a.createElement(y.Control.text,{model:".city1",className:"form-control",name:"city1",placeholder:"city or village"}),n.a.createElement("br",null),n.a.createElement(y.Control.text,{model:".post1",className:"form-control",name:"post1",placeholder:"Post Office"}),n.a.createElement("br",null),n.a.createElement(y.Control.text,{model:".pincode1",className:"form-control",name:"pincode1",placeholder:"Pincode"}),n.a.createElement("br",null),n.a.createElement(y.Control.text,{model:".district1",className:"form-control",name:"district1",placeholder:"District"}),n.a.createElement("br",null),n.a.createElement(y.Control.select,{model:".state1",className:"form-control",name:"state1"},n.a.createElement("option",{disabled:!0,selected:!0},"Select State"),n.a.createElement("option",null,"Uttar Pardesh"),n.a.createElement("option",null,"Madhya Pardesh"),n.a.createElement("option",null,"Bihar"),n.a.createElement("option",null,"Delhi")))),n.a.createElement(d.z,{className:"form-group mt-3 justify-content-center"},n.a.createElement(d.c,{type:"submit",className:"bg-success"},"Book Appointment"))))}}]),a}(n.a.Component),C=a(21);var k=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(d.a,null,n.a.createElement(d.b,null,n.a.createElement(E.b,{to:"/"},"Home")),n.a.createElement(d.b,{active:!0},"About Us")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"About Us"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},n.a.createElement("strong",null,"Welcome to [store name], your number one source for all things [product, ie: shoes, bags, dog treats]. We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.] Founded in [year] by [founder's name], [store name] has come a long way from its beginnings in a [starting location, ie: home office, toolshed, Houston, TX.]. When [store founder] first started out, his/her passion for [passion of founder, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove him to [action, ie: do intense research, quit her day job], and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.  ",n.a.createElement("br",null)," ",n.a.createElement("br",null),"We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us."),n.a.createElement("h5",null,"Sincerely, ",n.a.createElement("br",null)," ",n.a.createElement("br",null),"Name, [title, ie: CEO, Founder, etc.] ")))},O=function(e){if(0===e.item.length)return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(d.a,null,n.a.createElement(d.b,null,n.a.createElement(E.b,{to:"/"},"Home")),n.a.createElement(d.b,{active:!0},"Cart")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"Your Cart"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"container"},n.a.createElement("h4",{className:"text-danger text-center"},"Your cart is empty.. ",n.a.createElement("br",null),"Please add some item form ",n.a.createElement(E.b,{to:"/HealthProduct"},"Health Product")," or ",n.a.createElement(E.b,{to:"/medical"},"Medical Store")," to buy....")));var t=e.item.map((function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(d.a,null,n.a.createElement(d.b,null,n.a.createElement(E.b,{to:"/"},"Home")),n.a.createElement(d.b,{active:!0},"Cart")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"Your Cart"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"col-6 col-sm-4 mt-3",key:e.id},n.a.createElement(d.d,null,n.a.createElement(d.f,{src:e.image,alt:e.name}),n.a.createElement(d.e,null,n.a.createElement("h4",{className:"text-danger"},e.name),n.a.createElement("strong",null,"Price: ",e.price),n.a.createElement("h5",null,"Quantity : ",e.quantity),n.a.createElement("h6",null,"About Product : ",n.a.createElement("br",null)," ",e.about),n.a.createElement("button",{className:"btn btn-outline-info m-1"},"Buy Product")))))}));return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},t))},q=function(e){var t=e.item.map((function(t){return n.a.createElement("div",{className:"col-6 col-sm-4 mt-4"},n.a.createElement(d.d,{key:t.id},n.a.createElement(d.f,{src:t.image,alt:t.name}),n.a.createElement(d.e,null,n.a.createElement("h4",{className:"text-danger"},t.name),n.a.createElement("strong",null,"Price: ",t.price),n.a.createElement("h6",null,"About Product ",n.a.createElement("br",null)," ",t.about),n.a.createElement("button",{className:"btn btn-outline-danger m-1"},"Buy Product"),n.a.createElement("button",{className:"btn btn-outline-success m-1",onClick:function(){e.addCart(t)}}," Add to Cart"))))}));return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(d.a,null,n.a.createElement(d.b,null,n.a.createElement(E.b,{to:"/"},"Home")),n.a.createElement(d.b,{active:!0}," Health Product")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h4",null,"Health Product"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"input-group col-12 col-md-8"},n.a.createElement("input",{type:"text",placeholder:"Search Health Product",className:"form-control"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-success"},n.a.createElement("span",{className:"fa fa-search fa-large"}," Search"))))),n.a.createElement("div",{className:"row mb-4"},t))},M=a(7),P=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null),n.a.createElement(M.d,null,n.a.createElement(M.b,{exact:!0,path:"/",component:function(){return n.a.createElement(f,{slide:e.props.slide,Lab:e.props.Lab})}}),n.a.createElement(M.b,{path:"/HealthProduct",component:function(){return n.a.createElement(q,{item:e.props.HealthProduct,addCart:e.props.addCart})}}),n.a.createElement(M.b,{path:"/medical",component:function(){return n.a.createElement(v,{medicine:e.props.Medicine,addCart:e.props.addCart})}}),n.a.createElement(M.b,{path:"/consultation",component:x}),n.a.createElement(M.b,{path:"/aboutUs",component:k}),n.a.createElement(M.b,{exact:!0,path:"/cart",component:function(){return n.a.createElement(O,{item:e.props.Cart})}}),n.a.createElement(M.a,{to:"/"})),n.a.createElement(N,null))}}]),a}(n.a.Component),F=Object(M.g)(Object(C.connect)((function(e){return{HealthProduct:e.HealthProduct,slide:e.slide,Lab:e.Lab,Medicine:e.Medicine,Cart:e.Cart}}),(function(e){return{addCart:function(t){e(function(e){return{type:"ADD_CART",payload:e}}(t))}}}))(P)),H=[{id:0,name:"Colgate",price:"$50",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Horliks",price:"$80",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Complain",price:"$250",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Vassline",price:"$15",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Fast relief",price:"$380",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Moov",price:"$50",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Moov",price:"50",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Moov",price:"$50",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Moov",price:"$50",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"},{id:0,name:"Moov",price:"$50",image:"https://vind9961.github.io/project-2.0.0/assests/img/moov.jpg",about:"Some text about product"}],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;arguments.length>1&&arguments[1];return e},U=[{src:"https://vind9961.github.io/project-2.0.0/assests/img/slide2.jpg",altText:"Slide 1",caption:"Slide 1"},{src:"https://vind9961.github.io/project-2.0.0/assests/img/slide2.jpg",altText:"Slide 2",caption:"Slide 2"},{src:"https://vind9961.github.io/project-2.0.0/assests/img/slide3.jpg",altText:"Slide 3",caption:"Slide 3"}],$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;arguments.length>1&&arguments[1];return e},I=[{name:"Basic Health Checkup",detail:"Include 47 parmeter",price:"$80",off:"70%",img:"https://vind9961.github.io/project-2.0.0/assests/img/family1.jpg"},{name:"Comprehensive Full Body Checkup",detail:"Include 47 parmeter",price:"$90",off:"67%",img:"https://vind9961.github.io/project-2.0.0/assests/img/family2.jpg"},{name:"Advance Full Body Checkup",detail:"Include 100 parmeter",price:"$100",off:"70%",img:"https://vind9961.github.io/project-2.0.0/assests/img/family3.jpg"}],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;arguments.length>1&&arguments[1];return e},B=[{id:0,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"},{id:1,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"},{id:2,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"},{id:3,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"},{id:4,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"},{id:5,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"},{id:6,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"},{id:7,name:"Crocin",price:"$500",image:"https://vind9961.github.io/project-2.0.0/assests/img/cro.jpg",quantity:"100 tab",about:"Some text about product"}],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;arguments.length>1&&arguments[1];return e},L=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CART":var a=t.payload;return e.concat(a);default:return e}},z=a(22),W=Object(z.createStore)(Object(z.combineReducers)({HealthProduct:A,slide:$,Lab:D,Medicine:T,Cart:R})),G=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(C.Provider,{store:W},n.a.createElement(E.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(F,null))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.Fragment,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(135)},88:function(e,t,a){},89:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.3414413d.chunk.js.map