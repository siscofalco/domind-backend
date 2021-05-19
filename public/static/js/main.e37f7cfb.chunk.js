(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(14),c=n.n(s),r=(n(73),n(9)),o=n(24),u=n(13),l=n(6),h=n(7),d=n(11),j=n(10),b=n(131),p=n(132),v=n(45),f=n.n(v),x=n(59),O=n(21),m=n.n(O),g=function(){function t(){Object(l.a)(this,t),this.instance=m.a.create({baseURL:"".concat("https://domind.herokuapp.com/api","/auth"),withCredentials:!0})}return Object(h.a)(t,[{key:"signupPatient",value:function(t){return this.instance.post("/signup-patient",t)}},{key:"signup",value:function(t){return this.instance.post("/signup-doctor",t)}},{key:"login",value:function(t){return this.instance.post("/login",t)}},{key:"logout",value:function(){return this.instance.post("/logout")}},{key:"isLoggedIn",value:function(){return this.instance.get("/loggedin")}},{key:"edit",value:function(t){return this.instance.post("/edit",t)}}]),t}(),y=n(1),C=a.a.createContext(),k=C.Consumer,S=C.Provider,w=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={isLoggedIn:!1,isLoading:!0,user:null},t.AuthService=new g,t.signup=function(){var e=Object(x.a)(f.a.mark((function e(n){var i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.AuthService.signup(n);case 3:(i=e.sent)&&t.setState({isLoggedIn:!0,user:i.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.setState({isLoggedIn:!1,user:null});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),t.login=function(e){t.AuthService.login(e).then((function(e){return t.setState({isLoggedIn:!0,user:e.data})})).catch((function(){return t.setState({isLoggedIn:!1,user:null})}))},t.logout=function(){t.AuthService.logout().then((function(){return t.setState({isLoggedIn:!1,user:null})})).catch((function(t){return console.error(t)}))},t.edit=function(e){t.AuthService.edit(e).then((function(e){return t.setState(Object(u.a)(Object(u.a)({},t.state),{},{user:e.data}))})).catch((function(t){return console.error(t)}))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.AuthService.isLoggedIn().then((function(e){e&&t.setState({isLoggedIn:!0,isLoading:!1,user:e})})).catch((function(){t.setState({isLoggedIn:!1,isLoading:!1,user:null})}))}},{key:"render",value:function(){var t=this.state,e=t.isLoggedIn,n=t.isLoading,i=t.user;return n?Object(y.jsx)("p",{children:"Loading..."}):Object(y.jsx)(S,{value:{isLoading:n,isLoggedIn:e,user:i,signup:this.signup,login:this.login,logout:this.logout,edit:this.edit},children:this.props.children})}}]),n}(a.a.Component),M=function(t){return function(e){return Object(y.jsx)(k,{children:function(n){var i=n.isLoading,a=n.isLoggedIn,s=n.user,c=n.signup,r=n.login,o=n.logout,l=n.edit;return Object(y.jsx)(t,Object(u.a)({isLoggedIn:a,isLoading:i,user:s,signup:c,login:r,logout:o,edit:l},e))}})}},D={username:function(t){},password:function(t){var e;return t?t.length<3&&(e="Invalid password"):e="Password is required",e}},A=M(function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={fields:{username:"",password:""},errors:{username:null,password:null}},i}return Object(h.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.login(this.state.fields)}},{key:"handleChange",value:function(t){var e=t.target,n=e.name,i=e.value;this.setState({fields:Object(u.a)(Object(u.a)({},this.state.fields),{},Object(o.a)({},n,i)),errors:Object(u.a)(Object(u.a)({},this.state.errors),{},Object(o.a)({},n,D[n](i)))})}},{key:"render",value:function(){var t=this,e=this.state.fields;return Object(y.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(y.jsx)("div",{className:"form-item",children:Object(y.jsx)(b.a,{type:"text",placeholder:"Username",name:"username",value:e.username,onChange:function(e){return t.handleChange(e)}})}),Object(y.jsx)("div",{className:"form-item",children:Object(y.jsx)(b.a,{type:"password",placeholder:"Password",name:"password",value:e.password,onChange:function(e){return t.handleChange(e)}})}),Object(y.jsx)(p.a,{variant:"outlined",color:"primary",type:"submit",children:"Log in"})]})}}]),n}(i.Component)),L=function(){return(new g).logout(),"Logout"},P=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,N={username:function(t){var e;return t||(e="Username is required"),e},name:function(t){var e;return t||(e="Name is required"),e},email:function(t){var e;return t?P.test(t)||(e="Invalid email"):e="Email is required",e},password:function(t){var e;return t?t.length<3&&(e="Invalid password"):e="Password is required",e},mobilephone:function(t){var e;return t?t.length<9&&(e="Invalid phone number"):e="Phone number is required",e}},I=M(function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={fields:{username:"",name:"",email:"",password:"",mobilephone:null},errors:{username:null,name:null,email:null,password:null,mobilephone:null}},i}return Object(h.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=Object(u.a)({},this.state.fields);this.props.signup(e)}},{key:"handleChange",value:function(t){var e=t.target,n=e.name,i=e.value;this.setState({fields:Object(u.a)(Object(u.a)({},this.state.fields),{},Object(o.a)({},n,i)),errors:Object(u.a)(Object(u.a)({},this.state.errors),{},Object(o.a)({},n,N[n](i)))})}},{key:"render",value:function(){var t=this,e=this.state.fields;return Object(y.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(y.jsx)("input",{type:"text",name:"username",value:e.username,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(y.jsx)("input",{type:"text",name:"name",value:e.name,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(y.jsx)("input",{type:"password",name:"password",value:e.password,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"mobilephone",children:"Mobilephone: "}),Object(y.jsx)("input",{type:"tel",name:"mobilephone",value:e.mobilephone,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(y.jsx)("input",{type:"text",name:"email",value:e.email,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsx)("button",{type:"submit",children:"Create user"})]})}}]),n}(i.Component)),V=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,q={username:function(t){var e;return t||(e="Username is required"),e},name:function(t){var e;return t||(e="Name is required"),e},birthdate:function(t){var e;return t||(e="Birthdate is required"),e},email:function(t){var e;return t?V.test(t)||(e="Invalid email"):e="Email is required",e},password:function(t){var e;return t?t.length<5&&(e="Invalid password"):e="Password is required",e}},z=M(function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={fields:{username:"",name:"",email:"",password:"",birthdate:null},errors:{username:null,name:null,email:null,password:null,birthdate:null}},i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=Object(u.a)({},this.state.fields);(new g).signupPatient(e).then((function(){window.location.reload()}))}},{key:"handleChange",value:function(t){var e=t.target,n=e.name,i=e.value;this.setState({fields:Object(u.a)(Object(u.a)({},this.state.fields),{},Object(o.a)({},n,i)),errors:Object(u.a)(Object(u.a)({},this.state.errors),{},Object(o.a)({},n,q[n](i)))})}},{key:"render",value:function(){var t=this;return this.props.user&&this.props.user.data&&Array.isArray(this.props.user.data.patients)?Object(y.jsx)("div",{children:Object(y.jsxs)("form",{onSubmit:function(e){return t.handleSubmit(e)},children:[Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(y.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(y.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(y.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"birthdate",children:"birthdate: "}),Object(y.jsx)("input",{type:"date",name:"birthdate",value:this.state.birthdate,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsxs)("div",{className:"form-item",children:[Object(y.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(y.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:function(e){return t.handleChange(e)}})]}),Object(y.jsx)("button",{type:"submit",children:"Create patient"})]})}):Object(y.jsx)(r.a,{to:"/user-selector"})}}]),n}(i.Component));var F=M((function(t){var e=t.isLoggedIn,n=t.isLoading,i=t.exact,a=t.path,s=t.redirectPath,c=void 0===s?"/user-selector":s,o=t.component;return n?Object(y.jsx)("p",{children:"Loading..."}):Object(y.jsx)(r.b,{exact:i,path:a,render:function(t){return e?Object(y.jsx)(r.a,{to:c}):e?void 0:Object(y.jsx)(o,Object(u.a)({},t))}})}));var _=M((function(t){var e=t.isLoggedIn,n=t.isLoading,i=t.exact,a=t.path,s=t.component;return n?Object(y.jsx)("p",{children:"Loading..."}):Object(y.jsx)(r.b,{exact:i,path:a,render:function(t){return e?e?Object(y.jsx)(s,Object(u.a)({},t)):void 0:Object(y.jsx)(r.a,{to:"/login"})}})})),U=M((function(t){return console.log(t),t.user.data?Array.isArray(t.user.data.patients)?Object(y.jsx)(r.a,{to:"/doctor-profile/".concat(t.user.data._id)}):Object(y.jsx)(r.a,{to:"/patient-profile/".concat(t.user.data._id)}):(setTimeout((function(){window.location.reload()}),200),Object(y.jsx)("p",{children:"Loading..."}))})),E=(n(99),function(){function t(){Object(l.a)(this,t),this.instance=m.a.create({baseURL:"".concat("https://domind.herokuapp.com/api","/doctor"),withCredentials:!0})}return Object(h.a)(t,[{key:"getDoctor",value:function(t){return this.instance.get("/".concat(t))}},{key:"editDoctor",value:function(t){return this.instance.put(t)}}]),t}()),T=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={doctor:{patients:[]}},i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;(new E).getDoctor(e).then((function(e){t.setState({doctor:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:this.state.doctor.name}),Object(y.jsx)("p",{children:this.state.doctor.email}),Object(y.jsx)("p",{children:this.state.doctor.mobilephone}),Object(y.jsx)("div",{children:this.state.doctor.patients.map((function(t){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:t.name}),Object(y.jsx)("a",{href:"/patient-details/".concat(t._id),children:"Show profile"})]})}))}),Object(y.jsx)("button",{onClick:this.props.logout,children:"Log out"})]})}}]),n}(i.Component),B=Object(r.f)(M(T)),R=function(){function t(){Object(l.a)(this,t),this.instance=m.a.create({baseURL:"".concat("https://domind.herokuapp.com/api","/patient"),withCredentials:!0})}return Object(h.a)(t,[{key:"getPatient",value:function(t){return this.instance.get("/".concat(t))}},{key:"editPatient",value:function(t,e){return this.instance.put("/edit/".concat(t),e)}},{key:"deletePatient",value:function(t){return this.instance.delete("/".concat(t))}}]),t}(),Q=function(){function t(){Object(l.a)(this,t),this.instance=m.a.create({baseURL:"".concat("https://domind.herokuapp.com/api","/diary"),withCredentials:!0})}return Object(h.a)(t,[{key:"createDiary",value:function(t){return this.instance.post("/create",t)}},{key:"getDiary",value:function(t){return this.instance.get("/".concat(t))}},{key:"deleteDiary",value:function(t){return this.instance.delete("/".concat(t))}}]),t}(),$=(n(58),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(h.a)(n,[{key:"render",value:function(){return!0===this.props.visible?Object(y.jsx)("div",{className:"modal-background",onClick:this.props.onModalClose,children:Object(y.jsx)("div",{className:"modal-container",onClick:function(t){t.stopPropagation()},children:this.props.children})}):null}}]),n}(i.Component)),J=function(){function t(){Object(l.a)(this,t),this.instance=m.a.create({baseURL:"".concat("https://domind.herokuapp.com/api","/activity"),withCredentials:!0})}return Object(h.a)(t,[{key:"createActivity",value:function(t){return this.instance.post("/create",t)}},{key:"getActivity",value:function(t){return this.instance.get("/".concat(t))}},{key:"editActivity",value:function(t,e){return this.instance.put("/edit/".concat(t),e)}},{key:"deleteActivity",value:function(t){return this.instance.delete("/".concat(t))}}]),t}(),Y=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={answers:[],isSuccess:!1},i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props.content);var t=this.props.content.questions.map((function(){return""}));this.setState({answers:t})}},{key:"onAnswerChange",value:function(t,e){var n=this.state.answers;n[e]=t,this.setState({answers:n})}},{key:"sendAnswers",value:function(){var t=this;(new J).editActivity(this.props.content._id,{answers:this.state.answers}).then((function(){t.setState({isSuccess:!0})}))}},{key:"render",value:function(){var t=this;return this.state.isSuccess?"ok":Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{children:this.props.content.questions.map((function(e,n){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:e}),Object(y.jsx)("input",{type:"text",onChange:function(e){t.onAnswerChange(e.target.value,n)}})]})}))}),Object(y.jsx)("button",{onClick:function(){t.sendAnswers(t)},children:"Send answers"})]})}}]),n}(i.Component),G=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).props.content&&i.props.content.comment?i.state={text:i.props.content.comment,isSuccess:!1}:i.state={text:"",isSuccess:!1},i}return Object(h.a)(n,[{key:"onTextChange",value:function(t){this.setState({text:t})}},{key:"createDiary",value:function(){var t=this;(new Q).createDiary({comment:this.state.text,patient:this.props.patientId}).then((function(){t.setState({isSuccess:!0})}))}},{key:"render",value:function(){var t=this;return this.state.isSuccess?"ok":Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{readOnly:!this.props.isNew,value:this.state.text,onChange:function(e){t.onTextChange(e.target.value)}}),this.props.isNew?Object(y.jsx)("button",{onClick:function(){t.createDiary(t)},children:"Send"}):null]})}}]),n}(i.Component),H=function(t){var e=new Date(t),n=e.getDate();n="".concat(n<10?0:"").concat(n);var i=e.getMonth()+1;i="".concat(i<10?0:"").concat(i);var a=e.getFullYear();return"".concat(n,"/").concat(i,"/").concat(a)},K=function(t){var e=new Date(t),n=e.getDate();n="".concat(n<10?0:"").concat(n);var i=e.getMonth()+1;i="".concat(i<10?0:"").concat(i);var a=e.getFullYear();return"".concat(a,"-").concat(i,"-").concat(n)},W=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={patient:{activities:[],diary:[]},isActivityModalVisible:!1,currentActivity:{},isDiaryModalVisible:!1,currentDiary:{}},i}return Object(h.a)(n,[{key:"getPatientData",value:function(){var t=this,e=this.props.match.params.id;(new R).getPatient(e).then((function(e){t.setState({patient:e.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){this.getPatientData()}},{key:"openActivityModal",value:function(t){this.setState({isActivityModalVisible:!0,currentActivity:t})}},{key:"openDiaryModal",value:function(t){this.setState({isDiaryModalVisible:!0,currentDiary:t})}},{key:"newDiary",value:function(){this.setState({isDiaryModalVisible:!0,currentDiary:{}})}},{key:"onCloseModal",value:function(){this.getPatientData(),this.setState({isActivityModalVisible:!1,isDiaryModalVisible:!1})}},{key:"deleteDiary",value:function(t){var e=this,n=t._id;(new Q).deleteDiary(n).then((function(){e.getPatientData()})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:this.state.patient.name}),Object(y.jsx)("h1",{children:this.state.patient.email})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Activities"}),Object(y.jsx)("div",{children:this.state.patient.activities.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:H(e.date)}),e.answers&&e.answers.length?null:Object(y.jsx)("button",{onClick:function(){t.openActivityModal(e)},children:"Do activity"})]})}))})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Diaries"}),Object(y.jsx)("button",{onClick:function(){t.newDiary()},children:"+"}),Object(y.jsx)("div",{children:this.state.patient.diary.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:H(e.date)}),Object(y.jsx)("button",{onClick:function(){t.openDiaryModal(e)},children:"See diary"}),Object(y.jsx)("button",{onClick:function(){t.deleteDiary(e)},children:"Delete diary"})]})}))})]}),Object(y.jsx)("button",{onClick:this.props.logout,children:"Log out"}),Object(y.jsx)($,{visible:this.state.isActivityModalVisible,onModalClose:function(){t.onCloseModal(t)},children:Object(y.jsx)(Y,{content:this.state.currentActivity})}),Object(y.jsx)($,{visible:this.state.isDiaryModalVisible,onModalClose:function(){t.onCloseModal(t)},children:Object(y.jsx)(G,{content:this.state.currentDiary,isNew:!this.state.currentDiary||!this.state.currentDiary.comment,patientId:this.state.patient._id})})]})}}]),n}(i.Component),X=Object(r.f)(M(W)),Z=function(){function t(){Object(l.a)(this,t),this.instance=m.a.create({baseURL:"".concat("https://domind.herokuapp.com/api","/doctor-session"),withCredentials:!0})}return Object(h.a)(t,[{key:"createSession",value:function(t){return this.instance.post("/create",t)}},{key:"getSession",value:function(t){return this.instance.get("/".concat(t))}},{key:"deleteSession",value:function(t){return this.instance.delete("/".concat(t))}}]),t}(),tt=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(l.a)(this,n),e.call(this,t)}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=this.props.content.answers&&this.props.content.answers.length;return Object(y.jsx)("div",{children:this.props.content.questions.map((function(n,i){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{children:n}),Object(y.jsx)("p",{children:e?t.props.content.answers[i]:"No answer"})]})}))})}}]),n}(i.Component),et=n(42),nt=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={questions:[""],isSuccess:!1},i}return Object(h.a)(n,[{key:"onTextChange",value:function(t,e){var n=Object(et.a)(this.state.questions);n[e]=t,this.setState({questions:n})}},{key:"addNewQuestion",value:function(){var t=Object(et.a)(this.state.questions);t.push(""),this.setState({questions:t})}},{key:"sendQuestions",value:function(){var t=this,e=Object(et.a)(this.state.questions).filter((function(t){return t.length>0}));e.length>0&&(new J).createActivity({questions:e,patient:this.props.patientId}).then((function(){t.setState({isSuccess:!0})}))}},{key:"render",value:function(){var t=this;return this.state.isSuccess?"Ok":Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[this.state.questions.map((function(e,n){return Object(y.jsx)("input",{value:e,onChange:function(e){t.onTextChange(e.target.value,n)}})})),Object(y.jsx)("button",{onClick:function(){t.addNewQuestion(t)},children:"Add new question"})]}),Object(y.jsx)("button",{onClick:function(){t.sendQuestions(t)},children:"Send"})]})}}]),n}(i.Component),it=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).props.content&&i.props.content.comment?i.state={text:i.props.content.comment,isSuccess:!1}:i.state={text:"",isSuccess:!1},i}return Object(h.a)(n,[{key:"onTextChange",value:function(t){this.setState({text:t})}},{key:"createSession",value:function(){var t=this;(new Z).createSession({comment:this.state.text,patient:this.props.patientId}).then((function(){t.setState({isSuccess:!0})}))}},{key:"render",value:function(){var t=this;return this.state.isSuccess?"ok":Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{readOnly:!this.props.isNew,value:this.state.text,onChange:function(e){t.onTextChange(e.target.value)}}),this.props.isNew?Object(y.jsx)("button",{onClick:function(){t.createSession(t)},children:"Send"}):null]})}}]),n}(i.Component),at=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;Object(l.a)(this,n),i=e.call(this,t);var a=t.content,s=a.name,c=a.username,r=a.email,o=a.birthdate;return console.log(K(o)),i.state={name:s,username:c,email:r,birthdate:K(o),isSuccess:!1},i}return Object(h.a)(n,[{key:"onUsernameChange",value:function(t){this.setState({username:t})}},{key:"onNameChange",value:function(t){this.setState({name:t})}},{key:"onEmailChange",value:function(t){this.setState({email:t})}},{key:"onBirthdateChange",value:function(t){this.setState({birthdate:t})}},{key:"editPatient",value:function(){var t=this;(new R).editPatient(this.props.content._id,{username:this.state.username,name:this.state.name,email:this.state.email,birthdate:new Date(this.state.birthdate)}).then((function(){t.setState({isSuccess:!0})}))}},{key:"render",value:function(){var t=this;return this.state.isSuccess?"ok":Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Username:"}),Object(y.jsx)("input",{value:this.state.username,onChange:function(e){t.onUsernameChange(e.target.value)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Name:"}),Object(y.jsx)("input",{value:this.state.name,onChange:function(e){t.onNameChange(e.target.value)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Email:"}),Object(y.jsx)("input",{value:this.state.email,onChange:function(e){t.onEmailChange(e.target.value)}})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Birthdate:"}),Object(y.jsx)("input",{value:this.state.birthdate,type:"date",onChange:function(e){t.onBirthdateChange(e.target.value)}})]}),Object(y.jsx)("button",{onClick:function(){t.editPatient(t)},children:"Send"})]})}}]),n}(i.Component),st=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={patient:{activities:[],sessions:[]},isSeeActivityModalVisible:!1,currentActivity:{},isCreateActivityModalVisible:!1,isSessionModalVisible:!1,isEditPatientModalVisible:!1},i}return Object(h.a)(n,[{key:"getPatientData",value:function(){var t=this,e=this.props.match.params.id;(new R).getPatient(e).then((function(e){t.setState({patient:e.data})})).catch((function(t){console.log(t)}))}},{key:"seeActivityModal",value:function(t){this.setState({isSeeActivityModalVisible:!0,currentActivity:t})}},{key:"onModalClose",value:function(){this.getPatientData(),this.setState({isCreateActivityModalVisible:!1,isSessionModalVisible:!1,isEditPatientModalVisible:!1})}},{key:"componentDidMount",value:function(){this.getPatientData()}},{key:"seeSessionModal",value:function(t){this.setState({isSessionModalVisible:!0,currentSession:t})}},{key:"deleteActivity",value:function(t){var e=this,n=t._id;(new J).deleteActivity(n).then((function(){e.getPatientData()})).catch((function(t){console.log(t)}))}},{key:"deleteSession",value:function(t){var e=this,n=t._id;(new Z).deleteSession(n).then((function(){e.getPatientData()})).catch((function(t){console.log(t)}))}},{key:"deletePatient",value:function(){var t=this.state.patient._id;(new R).deletePatient(t).then((function(){window.location.href="/user-selector"})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:this.state.patient.name}),Object(y.jsx)("p",{children:this.state.patient.email}),Object(y.jsx)("button",{onClick:function(){t.setState({isEditPatientModalVisible:!0})},children:"Edit patient"}),Object(y.jsx)("button",{onClick:function(){t.deletePatient(t)},children:"Delete patient"})]}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Activities"}),Object(y.jsx)("button",{onClick:function(){t.setState({isCreateActivityModalVisible:!0})},children:"+"})]}),Object(y.jsx)("div",{children:this.state.patient.activities.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:H(e.date)}),Object(y.jsx)("button",{onClick:function(){t.seeActivityModal(e)},children:"See activity"}),Object(y.jsx)("button",{onClick:function(){t.deleteActivity(e)},children:"Delete activity"})]})}))}),Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Sessions"}),Object(y.jsx)("button",{onClick:function(){t.setState({isSessionModalVisible:!0})},children:"+"})]}),Object(y.jsx)("div",{children:this.state.patient.sessions.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:H(e.date)}),Object(y.jsx)("button",{onClick:function(){t.seeSessionModal(e)},children:"See session"}),Object(y.jsx)("button",{onClick:function(){t.deleteSession(e)},children:"Delete session"})]})}))})]})]}),Object(y.jsx)($,{visible:this.state.isSeeActivityModalVisible,onModalClose:function(){t.setState({isSeeActivityModalVisible:!1})},children:Object(y.jsx)(tt,{content:this.state.currentActivity})}),Object(y.jsx)($,{visible:this.state.isCreateActivityModalVisible,onModalClose:function(){t.onModalClose(t)},children:Object(y.jsx)(nt,{patientId:this.state.patient._id})}),Object(y.jsx)($,{visible:this.state.isSessionModalVisible,onModalClose:function(){t.onModalClose(t)},children:Object(y.jsx)(it,{content:this.state.currentSession,isNew:!this.state.currentSession||!this.state.currentSession.comment,patientId:this.state.patient._id})}),Object(y.jsx)($,{visible:this.state.isEditPatientModalVisible,onModalClose:function(){t.onModalClose(t)},children:Object(y.jsx)(at,{content:this.state.patient})})]})}}]),n}(i.Component),ct=Object(r.f)(M(st));var rt=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(r.b,{exact:!0,path:"/",component:function(){return Object(y.jsx)(r.a,{to:"/login"})}}),Object(y.jsx)(_,{exact:!0,path:"/user-selector",component:U}),Object(y.jsx)(_,{path:"/doctor-profile/:id",component:B}),Object(y.jsx)(_,{path:"/patient-profile/:id",component:X}),Object(y.jsx)(_,{path:"/patient-details/:id",component:ct}),Object(y.jsx)(_,{path:"/new-patient",component:z}),Object(y.jsx)(F,{exact:!0,path:"/signup",component:I}),Object(y.jsx)(F,{exact:!0,path:"/login",component:A}),Object(y.jsx)(r.b,{exact:!0,path:"/logout",component:L})]})},ot=n(31),ut=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(ot.a,{children:Object(y.jsx)(w,{children:Object(y.jsx)(rt,{})})})}),document.getElementById("root")),ut()},58:function(t,e,n){},73:function(t,e,n){},99:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.e37f7cfb.chunk.js.map