(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{44:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(16),s=n.n(r),o=(n(44),n(29)),i=n(7),l=n(2),j=n(3),u=n(20),d=n(21),O={USER_ROLE:"userType",USER_ANSWER:"userAnswer",QUESTION_LIST:"questionList",USER_SCORE:"userScore",USERS:[{userType:"Admin",userName:"Admin",password:"123123"},{userType:"User",userName:"User",password:"123456"}]},b=window.localStorage,p=function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,null,[{key:"isLoggedIn",value:function(){var e=b.getItem(O.USER_ROLE);return null!==e&&!(!e||""===e)}},{key:"doLogout",value:function(){b.removeItem(O.USER_ROLE),window.location.reload(!0)}}]),e}(),m=n(0),h=["component"],x=["component"],f=function(e){var t=e.component,n=Object(j.a)(e,h),a=p.isLoggedIn();return Object(m.jsx)(i.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return a?Object(m.jsx)(t,Object(l.a)({},e)):Object(m.jsx)(i.a,{to:{pathname:"/login"}})}}))},g=function(e){var t=e.component,n=Object(j.a)(e,x),a=p.isLoggedIn();return Object(m.jsx)(i.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return a?Object(m.jsx)(i.a,{to:{pathname:"/"}}):Object(m.jsx)(t,Object(l.a)({},e))}}))},N=n(10),S=n(6),v=n(59),w=n(60),T=n(34),E=n(62),y=n(64),I=function(){var e=Object(a.useState)({userName:"",password:"",isError:!1}),t=Object(S.a)(e,2),n=t[0],c=t[1],r=function(e){var t;c(Object(l.a)(Object(l.a)({},n),{},(t={},Object(N.a)(t,e.target.name,e.target.value),Object(N.a)(t,"isError",!1),t)))};return Object(m.jsxs)(v.a,{children:[Object(m.jsx)(w.a,{className:"justify-content-center",children:Object(m.jsxs)(T.a,{md:6,className:"mt-4 text-align-left",children:[n.isError?Object(m.jsx)("p",{className:"alert alert-danger",children:"Invalid login credentials"}):null,Object(m.jsxs)(E.a,{onSubmit:function(e){e.preventDefault();var t=O.USERS.filter((function(e){return e.userName===n.userName}));t.length>0&&(t[0].password===n.password?(delete t[0].password,window.localStorage.setItem(O.USER_ROLE,JSON.stringify(t[0])),window.location.reload(!0)):c(Object(l.a)(Object(l.a)({},n),{},{isError:!0})))},children:[Object(m.jsx)(E.a.Label,{className:"header-text",children:"Login"}),Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(m.jsx)(E.a.Label,{children:"User Name"}),Object(m.jsx)(E.a.Control,{name:"userName",onChange:r,type:"text",placeholder:"Enter user name",list:"userNameList"})]}),Object(m.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(m.jsx)(E.a.Label,{children:"Password"}),Object(m.jsx)(E.a.Control,{name:"password",onChange:r,type:"password",placeholder:"Password"})]}),Object(m.jsx)("div",{className:"d-flex justify-content-center m-4",children:Object(m.jsx)(y.a,{variant:"primary",type:"submit",children:"Login"})})]})]})}),Object(m.jsxs)("datalist",{id:"userNameList",children:[Object(m.jsx)("option",{value:O.USERS[0].userName}),Object(m.jsx)("option",{value:O.USERS[1].userName})]})]})},C=(n(35),n(26),n(13)),L=n.n(C),R=n(17),q=n(63),U=(n(61),function(){var e=JSON.parse(localStorage.getItem(O.USER_ROLE)),t=e.userType===O.USERS[0].userType;return Object(m.jsxs)("ul",{className:"nav justify-content-center",children:[t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link active",href:"add-question",children:"Add Question"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"/answer",children:"Answer"})})]}):null,Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)("a",{className:"nav-link",href:"/",children:t?"Questions":"Quiz"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)(y.a,{variant:"light",children:["Hi ",e.userName]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(y.a,{variant:"light",onClick:function(){return p.doLogout()},children:"Logout"})})]})}),k=function(){return Object(m.jsx)("div",{className:"d-flex justify-content-center mt-4",children:Object(m.jsx)(q.a,{className:"text-center",style:{width:"20rem"},children:Object(m.jsxs)(q.a.Body,{children:[Object(m.jsx)(q.a.Title,{children:"Access denied"}),Object(m.jsx)(q.a.Text,{children:"You don't have a permission to access this page."})]})})})},_=function(){var e=JSON.parse(localStorage.getItem(O.USER_ROLE)),t={question:"",optionOne:"",optionTwo:"",optionThree:""},n=Object(a.useState)(t),c=Object(S.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)({optionOne:!1,optionTwo:!1,optionThree:!1}),i=Object(S.a)(o,2),j=i[0],u=i[1],d=function(){var e=Object(R.a)(L.a.mark((function e(n){var a,c,o,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(r.question)&&b(r.optionOne)&&b(r.optionTwo)&&b(r.optionThree)&&(j.optionOne||j.optionTwo||j.optionThree)&&(n.preventDefault(),a=window.localStorage.getItem(O.QUESTION_LIST),c=Date.now(),o={id:c,questionText:r.question,options:[{text:r.optionOne,isCorrect:j.optionOne},{text:r.optionTwo,isCorrect:j.optionTwo},{text:r.optionThree,isCorrect:j.optionThree}]},(i=JSON.parse(a)).push(o),localStorage.setItem(O.QUESTION_LIST,JSON.stringify(i)),s(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function b(e){return""!==e&&null!==e&&void 0!==e}return Object(m.jsxs)(v.a,{children:[Object(m.jsx)(U,{}),Object(m.jsx)("div",{className:"text-center m-3, pt-4 pb-4",children:Object(m.jsx)("h5",{children:"You can add a question for users by submit the below form."})}),Object(m.jsx)(w.a,{className:"justify-content-center",children:e.userType===O.USERS[0].userType?Object(m.jsx)(T.a,{md:6,children:Object(m.jsxs)(E.a,{method:"post",children:[Object(m.jsx)(w.a,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(E.a.Label,{htmlFor:"inlineFormInput",children:"Input your question"}),Object(m.jsx)(E.a.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Ex: What is react?",value:r.question||"",required:!0,onChange:function(e){return s({question:e.target.value})}})]})}),Object(m.jsx)("br",{}),Object(m.jsxs)(w.a,{className:"align-items-center",children:[Object(m.jsx)(T.a,{xs:"auto",children:Object(m.jsx)(E.a.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Option one",value:r.optionOne||"",required:!0,onChange:function(e){return s(Object(l.a)(Object(l.a)({},r),{},{optionOne:e.target.value}))}})}),Object(m.jsx)(T.a,{xs:"auto",children:Object(m.jsx)(E.a.Check,{type:"radio",id:"autoSizingCheck",className:"mb-2",label:"Answer",name:"option",onChange:function(){return u({optionOne:!0,optionTwo:!1,optionThree:!1})},required:!0})})]}),Object(m.jsxs)(w.a,{className:"align-items-center",children:[Object(m.jsx)(T.a,{xs:"auto",children:Object(m.jsx)(E.a.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Option two",value:r.optionTwo||"",onChange:function(e){return s(Object(l.a)(Object(l.a)({},r),{},{optionTwo:e.target.value}))},required:!0})}),Object(m.jsx)(T.a,{xs:"auto",children:Object(m.jsx)(E.a.Check,{type:"radio",id:"autoSizingCheck",className:"mb-2",label:"Answer",name:"option",onChange:function(){return u({optionOne:!1,optionTwo:!0,optionThree:!1})},required:!0})})]}),Object(m.jsxs)(w.a,{className:"align-items-center",children:[Object(m.jsx)(T.a,{xs:"auto",children:Object(m.jsx)(E.a.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Option three",value:r.optionThree||"",onChange:function(e){return s(Object(l.a)(Object(l.a)({},r),{},{optionThree:e.target.value}))},required:!0})}),Object(m.jsx)(T.a,{xs:"auto",children:Object(m.jsx)(E.a.Check,{type:"radio",id:"autoSizingCheck",className:"mb-2",label:"Answer",name:"option",onChange:function(){return u({optionOne:!1,optionTwo:!1,optionThree:!0})},required:!0})})]}),Object(m.jsx)("div",{className:"d-flex justify-content-center m-4",children:Object(m.jsx)(y.a,{onClick:d,variant:"primary",type:"submit",children:"Add"})})]})}):Object(m.jsx)(k,{})})]})},A=function(){var e=JSON.parse(localStorage.getItem(O.USER_ROLE)),t=localStorage.getItem(O.USER_ANSWER),n=localStorage.getItem(O.QUESTION_LIST),c=Object(a.useState)([]),r=Object(S.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)([]),l=Object(S.a)(i,2),j=l[0],u=l[1];return Object(a.useEffect)(Object(R.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&o(JSON.parse(n)),t&&u(JSON.parse(t));case 2:case"end":return e.stop()}}),e)}))),[]),Object(m.jsxs)(v.a,{className:"justify-content-left",children:[Object(m.jsx)(U,{}),Object(m.jsx)(w.a,{children:e.userType===O.USERS[0].userType?Object(m.jsx)(T.a,{children:s.length>0&&j.length>0?Object(m.jsx)("form",{children:s.sort((function(e,t){return t.id-e.id})).map((function(e,n){var a=t&&JSON.parse(t),c=void 0;return a&&(c=a.find((function(t){return t.id===e.id}))),Object(m.jsxs)("div",{className:"card m-2 p-4",children:[Object(m.jsx)("div",{className:"d-flex justify-content-between",children:Object(m.jsx)("h2",{children:e.questionText})}),e.options.map((function(t,n){return Object(m.jsxs)("div",{className:"question-option",children:[Object(m.jsx)("input",{type:"radio",id:e.questionText,name:e.questionText,value:"".concat(t.text),disabled:!0,required:!0,defaultChecked:c&&t.text===c.answer.text})," ",t.text]},n)}))]},n)}))}):Object(m.jsx)("h4",{className:"text-center mt-4",children:"No answers found."})}):Object(m.jsx)(k,{})})]})};n(55),n(56);var F=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(i.b,{exact:!0,path:"/",component:I}),Object(m.jsx)(g,{exact:!0,path:"/login",component:I}),Object(m.jsx)(f,{exact:!0,path:"/add-question",component:_}),Object(m.jsx)(f,{exact:!0,path:"/answer",component:A})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),J()}},[[57,1,2]]]);
//# sourceMappingURL=main.6721536a.chunk.js.map