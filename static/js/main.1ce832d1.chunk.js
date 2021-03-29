(this["webpackJsonpccdc-app"]=this["webpackJsonpccdc-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(10),s=a.n(l),r=(a(22),a(4)),d=(a(23),a(7)),i=(a(26),{BaseURL:"https://a1980ba5ac2e.ngrok.io/api/"}),j=a(0);var o=function(e){var t=e.username,a=Object(c.useState)([]),n=Object(r.a)(a,2),l=n[0],s=n[1],d=Object(c.useState)(0),o=Object(r.a)(d,2),b=o[0],u=o[1],O=Object(c.useState)(""),x=Object(r.a)(O,2),h=x[0],p=x[1],v=Object(c.useState)(!1),m=Object(r.a)(v,2),C=m[0],w=m[1],T=Object(c.useState)(!1),f=Object(r.a)(T,2),g=f[0],y=f[1],D=Object(c.useState)(""),S=Object(r.a)(D,2),R=S[0],N=S[1],k=i.BaseURL,L=(new Date).toISOString().slice(0,10),B=function(e){var t=new XMLHttpRequest;t.open("POST",k+e+"?startDate="+L+"&processingDays="+b,!0),t.onload=function(){var e=JSON.parse(this.response);null!=e&&(console.log("New date = "+e),N(e))},t.send(),document.getElementById("outputLabel").style.display="block"};Object(c.useEffect)((function(){U()}),[]);var U=function(){var e=new XMLHttpRequest;e.open("GET",k+"getCalendarsForUser/"+t,!0),e.onload=function(){var e=JSON.parse(this.response);null!=e&&s(e)},e.send()};return Object(j.jsxs)("div",{class:"tabContainer",children:[Object(j.jsx)("div",{class:"pageTitle",children:" Calculate the commit date"}),Object(j.jsx)("div",{class:"infoText",children:"Calculate the expected commit date based on the lead time in days"}),Object(j.jsxs)("table",{class:"tableStyle",children:[Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{children:Object(j.jsx)("label",{children:"Select a calendar to use:"})}),Object(j.jsx)("td",{children:Object(j.jsxs)("select",{name:"calendar",id:"calendar",onChange:function(e){return p(e.target.value)},children:[Object(j.jsx)("option",{children:"Select Calendar"}),l.map((function(e,t){return Object(j.jsx)("option",{value:e.calendarCode,children:e.calendarName},t)}))]})})]}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{children:Object(j.jsx)("label",{children:"Enter the lead time in days: "})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{id:"inputText",type:"text",onChange:function(e){return u(e.target.value)}})})]}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{children:Object(j.jsx)("label",{children:"Exclude Weekend in Calculation "})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"checkbox",onClick:function(){w(!C)}})})]}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{children:Object(j.jsx)("label",{children:"Exclude Holiday in Calculation "})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"checkbox",disabled:!C,onClick:function(){y(!g)}})})]})]}),Object(j.jsx)("input",{id:"calculateButton",type:"button",value:"Calculate commit date",onClick:function(){return function(){if("Select Calendar"==h||""==h)document.getElementById("outputLabel").style.display="none",alert("Please select a calendar to calculate");else if(C)if(g){var e=new XMLHttpRequest;e.open("POST",k+"calculateNewDateExcludeAll?calendarCode=VIC&processingDays="+b+"&startDate="+L,!0),e.onload=function(){var e=JSON.parse(this.response);null!=e&&(console.log("New date = "+e),N(e))},e.send(),document.getElementById("outputLabel").style.display="block"}else B("calculateNewDateExcludeWk");else B("calculateNewDate")}()}}),Object(j.jsx)("div",{id:"outputLabel",children:Object(j.jsxs)("label",{children:[" The New Commit Date based on above setting and calendar is ",R," "]})})]})};var b=function(){var e=i.BaseURL,t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],l=a[1],s=Object(c.useState)(""),d=Object(r.a)(s,2),o=d[0],b=d[1],u=Object(c.useState)(""),O=Object(r.a)(u,2),x=O[0],h=O[1],p=Object(c.useState)(""),v=Object(r.a)(p,2),m=v[0],C=v[1];return Object(j.jsxs)("div",{class:"tabContainer",children:[Object(j.jsx)("div",{class:"pageTitle",children:" Create your calendar"}),Object(j.jsx)("div",{class:"infoText",children:"Create your customized calendar"}),Object(j.jsxs)("table",{class:"tableStyle",children:[Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{children:"Calendar Code:"})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputCalendarCodeText",type:"text",onChange:function(e){return l(e.target.value)}})})]}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{children:"Calendar Name:"})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputCalendarNameText",type:"text",onChange:function(e){return b(e.target.value)}})})]}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{children:"Place:"})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputPlaceText",type:"text",onChange:function(e){return h(e.target.value)}})})]}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{children:"Description:"})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputDescriptionText",type:"text",onChange:function(e){return C(e.target.value)}})})]})]}),Object(j.jsx)("input",{id:"updateButton",type:"button",value:"Save",onClick:function(){return function(){if(console.log(n),console.log(o),""==n||""==o||""==m)alert("Please enter calendar code, name and description");else{var t=new XMLHttpRequest;t.open("POST",e+"createCalendar?calendarCode="+n+"&calendarName="+o+"&place="+x+"&description="+m,!0),t.onload=function(){var e=JSON.parse(this.response);null!=e&&alert("New Calendar "+e.calendarName+" has been added")},t.send()}}()}})]})};var u=function(e){var t=e.username,a=Object(c.useState)([]),n=Object(r.a)(a,2),l=n[0],s=n[1],d=i.BaseURL,o=Object(c.useState)(""),b=Object(r.a)(o,2),u=b[0],O=b[1];Object(c.useEffect)((function(){x()}),[u]);var x=function(){var e=new XMLHttpRequest;e.open("GET",d+"getCalendarsForUser/"+t,!0),e.onload=function(){var e=JSON.parse(this.response);null!=e&&s(e)},e.send()};return Object(j.jsxs)("div",{class:"tabContainer",children:[Object(j.jsx)("div",{class:"pageTitle",children:" Delete your calendar"}),Object(j.jsx)("div",{class:"infoText",children:"Select and delete your calendar"}),Object(j.jsx)("table",{class:"tableStyle",children:Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{children:Object(j.jsx)("label",{children:"Select a calendar to delete:"})}),Object(j.jsx)("td",{children:Object(j.jsxs)("select",{name:"calendar",id:"calendar",onChange:function(e){return O(e.target.value)},children:[Object(j.jsx)("option",{children:"Select Calendar"}),l.map((function(e,t){return Object(j.jsx)("option",{value:e.calendarCode,children:e.calendarName},t)}))]})})]})}),Object(j.jsx)("div",{id:"deletePageButtons",children:Object(j.jsx)("input",{id:"deleteButton",type:"button",value:"Delete",onClick:function(){return function(){if("Select Calendar"==u||""==u)alert("Please select a calendar to delete");else{var e=new XMLHttpRequest;e.open("POST",d+"deleteCalendar/"+u,!0),e.onload=function(){var e=JSON.parse(this.response);null!=e&&(console.log(e.calendarName),alert("The Calendar "+e.calendarName+" has been deleted"),O("Select Calendar"))},e.send()}}()}})})]})};var O=function(e){var t=e.username,a=Object(c.useState)([]),n=Object(r.a)(a,2),l=n[0],s=n[1],d=i.BaseURL,o=Object(c.useState)(""),b=Object(r.a)(o,2),u=b[0],O=b[1],x=Object(c.useState)(""),h=Object(r.a)(x,2),p=h[0],v=h[1],m=Object(c.useState)(""),C=Object(r.a)(m,2),w=C[0],T=C[1],f=Object(c.useState)([]),g=Object(r.a)(f,2),y=g[0],D=g[1],S=Object(c.useState)(""),R=Object(r.a)(S,2),N=R[0],k=R[1];Object(c.useEffect)((function(){B()}),[]),Object(c.useEffect)((function(){L()}),[u,y]);var L=function(){var e=new XMLHttpRequest;e.open("GET",d+"getNonWorkingDaysForCalendar/"+u,!0),e.onload=function(){var e=JSON.parse(this.response);null!=e&&D(e)},e.send()},B=function(){var e=new XMLHttpRequest;e.open("GET",d+"getCalendarsForUser/"+t,!0),e.onload=function(){var e=JSON.parse(this.response);null!=e&&s(e)},e.send()};return Object(j.jsxs)("div",{class:"tabContainer",children:[Object(j.jsx)("div",{class:"pageTitle",children:" Update your calendar"}),Object(j.jsx)("div",{class:"infoText",children:"Update the Non-Working days for your calendar"}),Object(j.jsxs)("table",{class:"tableStyle",children:[Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{children:"Select a calendar to use:"})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsxs)("select",{name:"calendar",id:"calendar",onChange:function(e){return O(e.target.value)},children:[Object(j.jsx)("option",{children:"Select Calendar"}),l.map((function(e,t){return Object(j.jsx)("option",{value:e.calendarCode,children:e.calendarName},t)}))]})})]}),Object(j.jsx)("tr",{class:"rowContainer",children:Object(j.jsx)("td",{colspan:"2",class:"removeDateTableRow",children:Object(j.jsx)("label",{children:"Add a new Non-Working day:"})})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Code: "})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputCodeText",name:"newDateCodeTextBox",type:"text",onChange:function(e){return v(e.target.value)}})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Name: "})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputNameText",name:"newDateNameTextBox",type:"text",onChange:function(e){return T(e.target.value)}})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Date: "})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"datePicker",type:"date",name:"newDateInput",onChange:function(e){return k(e.target.value)}})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow"}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"addNonWorkingdayButton",type:"button",value:"Add",onClick:function(){return function(){if("Select Calendar"==u||""==u)alert("Please select a calendar to calculate");else{var e=new XMLHttpRequest;e.open("POST",d+"addNonWorkingDayToCalendar?calendarCode="+u+"&nonWorkingDayCode="+p+"&nonWorkingDayName="+w+"&date="+N,!0),e.onload=function(){var e=JSON.parse(this.response);null!=e&&(D(e),console.log(e))},e.send()}}()}})})]}),Object(j.jsx)("tr",{class:"rowContainer",children:Object(j.jsx)("td",{colSpan:"2",class:"removeDateTableRow",id:"removeNWdaysTitle",children:Object(j.jsx)("label",{children:"Current Nonworking days:"})})}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{colspan:"2",class:"removeDateTableRow",children:Object(j.jsxs)("table",{class:"removeDateTable",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableHeader",children:"Name"}),Object(j.jsx)("td",{class:"removeDateTableHeader",children:"Date"}),Object(j.jsx)("td",{class:"removeDateTableHeader",children:"Action"})]}),y.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:e.nwdayName}),Object(j.jsx)("td",{class:"removeDateTableRow",children:e.date}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"removeNonWorkingdayButton",type:"button",value:"Remove",onClick:function(){return function(e){var t=new XMLHttpRequest;t.open("POST",d+"deleteNonWorkingDayFromCalendar?calendarCode="+u+"&nonWorkingDayCode="+e,!0),t.onload=function(){var e=JSON.parse(this.response);null!=e&&D(e)},t.send()}(e.nwdayCode)}})})]})}))]})}),Object(j.jsx)("td",{})]})]})]})};var x=function(){return Object(j.jsxs)("div",{class:"tabContainer",children:[Object(j.jsx)("div",{class:"pageTitle",children:" User Admin"}),Object(j.jsx)("div",{class:"infoText",children:"Add and Remove Users"}),Object(j.jsxs)("table",{class:"tableStyle",children:[Object(j.jsx)("tr",{class:"rowContainer",children:Object(j.jsx)("td",{class:"removeDateTableRow",colspan:"2",children:Object(j.jsx)("label",{children:"Create a new user:"})})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Name: "})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputText",name:"usernameTextBox",type:"text"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Email: "})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{id:"inputText",name:"emailTextBox",type:"text"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Privileged: "})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{name:"privilegedCheckBox",type:"checkbox",value:"0"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow"}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{name:"addUserButton",id:"addNonWorkingdayButton",type:"button",value:"Add"})})]})]}),Object(j.jsxs)("table",{class:"tableStyle",children:[Object(j.jsx)("tr",{class:"rowContainer",children:Object(j.jsx)("td",{colSpan:"2",class:"removeDateTableRow",id:"removeNWdaysTitle",children:Object(j.jsx)("label",{children:"Modify User:"})})}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Select User:"})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsxs)("select",{name:"user",id:"calendar",children:[Object(j.jsx)("option",{value:"",children:"Select User"}),Object(j.jsx)("option",{value:"Eric",children:"Eric"}),Object(j.jsx)("option",{value:"Jack",children:"Jack"}),Object(j.jsx)("option",{value:"Kym",children:"Kym"})]})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Privileged: "})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{name:"privilegedCheckBox",type:"checkbox",value:"0"})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow"}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{name:"modifyUserButton",id:"addNonWorkingdayButton",type:"button",value:"Update"})})]})]}),Object(j.jsxs)("table",{class:"tableStyle",children:[Object(j.jsx)("tr",{class:"rowContainer",children:Object(j.jsx)("td",{colSpan:"2",class:"removeDateTableRow",id:"removeNWdaysTitle",children:Object(j.jsx)("label",{children:"Delete User:"})})}),Object(j.jsxs)("tr",{class:"rowContainer",children:[Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("label",{class:"updateCalendarLabels",children:"Select User:"})}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsxs)("select",{name:"user",id:"calendar",children:[Object(j.jsx)("option",{value:"",children:"Select User"}),Object(j.jsx)("option",{value:"Eric",children:"Eric"}),Object(j.jsx)("option",{value:"Jack",children:"Jack"}),Object(j.jsx)("option",{value:"Kym",children:"Kym"})]})})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"removeDateTableRow"}),Object(j.jsx)("td",{class:"removeDateTableRow",children:Object(j.jsx)("input",{name:"deleteUserButton",id:"addNonWorkingdayButton",type:"button",value:"Delete"})})]})]})]})},h=a(34),p=a(33),v=(a(28),a.p+"static/media/logo.a3ed4e1f.png");var m=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),s=Object(r.a)(l,2),m=s[0],C=s[1],w=Object(c.useState)(""),T=Object(r.a)(w,2),f=T[0],g=T[1],y=i.BaseURL,D=Object(c.useState)(!1),S=Object(r.a)(D,2),R=S[0],N=S[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"with-react-tabs",children:[Object(j.jsxs)("div",{className:"headerStyle",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Customized Commit Date Calculator"}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{id:"logo",src:v})})]}),Object(j.jsxs)("div",{children:[R?Object(j.jsxs)("p",{id:"welcomeMessage",children:[" Welcome, ",m," "]}):Object(j.jsx)("p",{}),Object(j.jsx)(h.a,{id:"myLoginButton",onClick:function(){n(!0)},children:"Log in"}),Object(j.jsx)(h.a,{id:"myLogoutButton",onClick:function(){return C(""),void N(!1)},children:"Log Out"})]})]}),Object(j.jsx)("div",{className:"tabStyle",children:Object(j.jsxs)(d.d,{children:[Object(j.jsxs)(d.b,{children:[Object(j.jsx)(d.a,{children:"Home"}),Object(j.jsx)(d.a,{children:"Update Calendar"}),Object(j.jsx)(d.a,{children:"Delete Calendar"}),Object(j.jsx)(d.a,{children:"Create Calendar"}),Object(j.jsx)(d.a,{children:"User Admin"})]}),Object(j.jsx)(d.c,{children:Object(j.jsx)("div",{children:Object(j.jsx)(o,{username:m})})}),Object(j.jsx)(d.c,{children:Object(j.jsx)("div",{children:Object(j.jsx)(O,{username:m})})}),Object(j.jsx)(d.c,{children:Object(j.jsx)("div",{children:Object(j.jsx)(u,{username:m})})}),Object(j.jsx)(d.c,{children:Object(j.jsx)("div",{children:Object(j.jsx)(b,{username:m})})}),Object(j.jsx)(d.c,{children:Object(j.jsx)("div",{children:Object(j.jsx)(x,{username:m})})})]})})]}),Object(j.jsxs)(p.a,{show:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(j.jsx)(p.a.Header,{children:Object(j.jsx)(p.a.Title,{children:"Log in"})}),Object(j.jsxs)(p.a.Body,{children:[Object(j.jsx)("h6",{children:"Username:"}),Object(j.jsx)("input",{id:"inputUsernameText",type:"text",onChange:function(e){return C(e.target.value)}}),Object(j.jsx)("h6",{children:"Password:"}),Object(j.jsx)("input",{id:"inputPasswordText",type:"text",onChange:function(e){return g(e.target.value)}})]}),Object(j.jsxs)(p.a.Footer,{children:[Object(j.jsx)(h.a,{onClick:function(){return function(){if(""==m||""==f)alert("Please enter username and password");else{var e=new XMLHttpRequest;e.open("POST",y+"login/"+m+"/"+f,!0),e.onload=function(){1==JSON.parse(this.response)?(alert("Log in Successfully!"),n(!1),N(!0)):(alert("Wrong credential!"),N(!1))},e.send()}}()},children:"Log in"}),Object(j.jsx)(h.a,{onClick:function(){n(!1)},children:"Close"})]})]})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),l(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),C()}},[[30,1,2]]]);
//# sourceMappingURL=main.1ce832d1.chunk.js.map