"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[158],{3321:function(e,n,t){t(2791);var s=t(184);n.Z=function(){return(0,s.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var s=t(184),r=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("footer",{children:(0,s.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,s.jsx)("a",{href:"https://www.linkedin.com/in/roshnimishraa",target:"_blank",rel:"noreferrer",children:"Roshni"})," ","\xa9 ",(new Date).getFullYear()]})})})}},3841:function(e,n,t){t.d(n,{Z:function(){return x}});var s=t(9439),r=t(2791),i=t(7689),o=t(1087),a=t(3495),l=t(9434),c=t(5318),d=t(3853),u=t(1213),m=t(456),h=t(184),x=function(){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),t=n[0],x=n[1],p=(0,l.I0)(),j=(0,i.s0)(),f=(0,r.useState)(localStorage.getItem("token")||""),v=(0,s.Z)(f,2),g=v[0],N=(v[1],(0,r.useState)(localStorage.getItem("token")?(0,m.Z)(localStorage.getItem("token")):"")),k=(0,s.Z)(N,2),b=k[0];k[1];return(0,h.jsxs)("header",{children:[(0,h.jsxs)("nav",{className:t?"nav-active":"",children:[(0,h.jsx)("h2",{className:"nav-logo",children:(0,h.jsx)(o.OL,{to:"/",children:"CareBridge"})}),(0,h.jsxs)("ul",{className:"nav-links",children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/",children:"Home"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),g&&b.isAdmin&&(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!b.isAdmin&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,h.jsx)("li",{children:(0,h.jsx)(a.fO,{to:"/#contact",children:"Contact Us"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),g?(0,h.jsx)("li",{children:(0,h.jsx)("span",{className:"btn",onClick:function(){p((0,c.ps)({})),localStorage.removeItem("token"),j("/login")},children:"Logout"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{className:"btn",to:"/login",children:"Login"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,h.jsxs)("div",{className:"menu-icons",children:[!t&&(0,h.jsx)(d.cur,{className:"menu-open",onClick:function(){x(!0)}}),t&&(0,h.jsx)(u.ySC,{className:"menu-close",onClick:function(){x(!1)}})]})]})}},3158:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var s=t(4165),r=t(5861),i=t(9439),o=t(2791),a=t(4942),l=t(1413),c=t(3263),d=t(3402),u=t(4373),m=t(184),h=function(e){var n=e.setModalOpen,t=e.ele,h=(0,o.useState)({date:"",time:""}),x=(0,i.Z)(h,2),p=x[0],j=x[1],f=function(e){var n=e.target,t=n.name,s=n.value;return j((0,l.Z)((0,l.Z)({},p),{},(0,a.Z)({},t,s)))},v=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(r){var i,o,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,d.ZP.promise(c.Z.post("/appointment/bookappointment",{doctorId:null===t||void 0===t||null===(i=t.userId)||void 0===i?void 0:i._id,date:p.date,time:p.time,doctorname:"".concat(null===t||void 0===t||null===(o=t.userId)||void 0===o?void 0:o.firstname," ").concat(null===t||void 0===t||null===(a=t.userId)||void 0===a?void 0:a.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 4:n(!1),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"modal flex-center",children:(0,m.jsxs)("div",{className:"modal__content",children:[(0,m.jsx)("h2",{className:"page-heading",children:"Book Appointment"}),(0,m.jsx)(u.QAE,{onClick:function(){n(!1)},className:"close-btn"}),(0,m.jsx)("div",{className:"register-container flex-center book",children:(0,m.jsxs)("form",{className:"register-form",children:[(0,m.jsx)("input",{type:"date",name:"date",className:"form-input",value:p.date,onChange:f}),(0,m.jsx)("input",{type:"time",name:"time",className:"form-input",value:p.time,onChange:f}),(0,m.jsx)("button",{type:"submit",className:"btn form-btn",onClick:v,children:"book"})]})})]})})})},x=function(e){var n,t,s,r,a=e.ele,l=(0,o.useState)(!1),c=(0,i.Z)(l,2),u=c[0],x=c[1],p=(0,o.useState)(localStorage.getItem("token")||""),j=(0,i.Z)(p,2),f=j[0];j[1];return(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("div",{className:"card-img flex-center",children:(0,m.jsx)("img",{src:(null===a||void 0===a||null===(n=a.userId)||void 0===n?void 0:n.pic)||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:"profile"})}),(0,m.jsxs)("h3",{className:"card-name",children:["Dr. ",(null===a||void 0===a||null===(t=a.userId)||void 0===t?void 0:t.firstname)+" "+(null===a||void 0===a||null===(s=a.userId)||void 0===s?void 0:s.lastname)]}),(0,m.jsxs)("p",{className:"specialization",children:[(0,m.jsx)("strong",{children:"Specialization: "}),null===a||void 0===a?void 0:a.specialization]}),(0,m.jsxs)("p",{className:"experience",children:[(0,m.jsx)("strong",{children:"Experience: "}),null===a||void 0===a?void 0:a.experience,"yrs"]}),(0,m.jsxs)("p",{className:"fees",children:[(0,m.jsx)("strong",{children:"Fees per consultation: "}),"$ ",null===a||void 0===a?void 0:a.fees]}),(0,m.jsxs)("p",{className:"phone",children:[(0,m.jsx)("strong",{children:"Phone: "}),null===a||void 0===a||null===(r=a.userId)||void 0===r?void 0:r.mobile]}),(0,m.jsx)("button",{className:"btn appointment-btn",onClick:function(){if(""===f)return d.Am.error("You must log in first");x(!0)},children:"Book Appointment"}),u&&(0,m.jsx)(h,{setModalOpen:x,ele:a})]})},p=t(6794),j=t(3841),f=t(4971),v=t(3200),g=t(9434),N=t(5318),k=t(3321),b=function(){var e=(0,o.useState)([]),n=(0,i.Z)(e,2),t=n[0],a=n[1],l=(0,g.I0)(),c=(0,g.v9)((function(e){return e.root})).loading,d=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,N.K4)(!0)),e.next=3,(0,f.Z)("/doctor/getalldoctors");case 3:n=e.sent,a(n),l((0,N.K4)(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){d()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j.Z,{}),c&&(0,m.jsx)(v.Z,{}),!c&&(0,m.jsxs)("section",{className:"container doctors",children:[(0,m.jsx)("h2",{className:"page-heading",children:"Our Doctors"}),t.length>0?(0,m.jsx)("div",{className:"doctors-card-container",children:t.map((function(e){return(0,m.jsx)(x,{ele:e},e._id)}))}):(0,m.jsx)(k.Z,{})]}),(0,m.jsx)(p.Z,{})]})}}}]);
//# sourceMappingURL=158.adb56791.chunk.js.map