(this["webpackJsonpwork-boy"]=this["webpackJsonpwork-boy"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),l=a(9),d=a.n(l),c=(a(14),a(7)),i=a(2),r=a(3),o=a(5),b=a(4),h=(a(15),[{ID:1,name:"ARS",level:1,date:"2021-12-26"},{ID:2,name:"AMC",level:0,date:"2021-12-26"},{ID:3,name:"AMX",level:2,date:"2021-12-26"},{ID:4,name:"PSG",level:1,date:"2021-12-26"}]),m=a(0),j=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).handleDelete=function(){e.props.handleDelete(e.props.idItem)},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",className:"btn btn-primary m-3","data-bs-toggle":"modal","data-bs-target":"#delete"+this.props.idItem,children:Object(m.jsx)("i",{class:"fa-solid fa-trash"})}),Object(m.jsx)("div",{className:"modal fade",id:"delete"+this.props.idItem,tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Mission "+this.props.idItem}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsx)("div",{className:"modal-body",children:"Are you sure to complete this mission ?"}),Object(m.jsxs)("div",{className:"modal-footer",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.handleDelete,"data-bs-dismiss":"modal",children:"Save changes"})]})]})})})]})}}]),a}(s.Component),p=a(6),u=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t=e.target.name,a=e.target.value;s.setState(Object(p.a)({},t,a)),console.log(s.state)},s.handleSave=function(){s.props.handleEdit({ID:s.props.tv.ID,name:s.state.name,level:s.state.level,date:s.state.date})},s.state={name:"",level:0,date:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({name:this.props.tv.name,level:this.props.tv.level,date:this.props.tv.date})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",className:"btn btn-primary m-3","data-bs-toggle":"modal","data-bs-target":"#change"+this.props.tv.ID,children:Object(m.jsx)("i",{className:"fas fa-tools"})}),Object(m.jsx)("div",{className:"modal fade",id:"change"+this.props.tv.ID,tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Change Item"+this.props.tv.ID}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsxs)("div",{className:"modal-body",children:[Object(m.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(m.jsx)("span",{className:"input-group-text",id:"addon-wrapping",children:"@"}),Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"addon-wrapping",value:this.state.name,name:"name",onChange:this.handleChange})]}),Object(m.jsxs)("select",{className:"form-select","aria-label":" select example",value:this.state.level,name:"level",onChange:this.handleChange,children:[Object(m.jsx)("option",{value:1,children:"Small"}),Object(m.jsx)("option",{value:2,children:"Medium"}),Object(m.jsx)("option",{value:3,children:"High"})]}),Object(m.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(m.jsx)("span",{className:"input-group-text",id:"addon-wrapping",children:"@"}),Object(m.jsx)("input",{type:"date",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"addon-wrapping",value:this.state.date,name:"date",onChange:this.handleChange})]})]}),Object(m.jsxs)("div",{className:"modal-footer",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.handleSave,"data-bs-dismiss":"modal",children:"Save changes"})]})]})})})]})}}]),a}(s.Component),v=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"box text-center m-4 col-xl-3",children:[Object(m.jsxs)("span",{className:"ID",children:["ID: ",Object(m.jsx)("span",{children:this.props.tv.ID})," "]}),Object(m.jsxs)("h3",{className:"title",children:[" ",this.props.tv.name," "]}),Object(m.jsxs)("h4",{className:"level",children:["level: ",Object(m.jsx)("span",{children:0===this.props.tv.level?"Small":1===this.props.tv.level?"Medium":"High"})]}),Object(m.jsxs)("h4",{className:"date",children:["date: ",Object(m.jsx)("span",{children:this.props.tv.date})]}),Object(m.jsxs)("div",{className:"btn d-flex ms-4",children:[Object(m.jsx)(u,{tv:this.props.tv,handleEdit:this.props.handleEdit}),Object(m.jsx)(j,{idItem:this.props.tv.ID,handleDelete:this.props.handleDelete})]})]})}}]),a}(s.Component),O=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"p-5  row",children:this.props.danhsach.map((function(t,a){return Object(m.jsx)(v,{tv:t,handleDelete:e.props.handleDelete,handleEdit:e.props.handleEdit},a)}))})}}]),a}(s.Component),x=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleChange=function(e){console.log(e.target);var t=e.target.name,a=e.target.value;s.setState(Object(p.a)({},t,a))},s.handleSave=function(){console.log("nh\u1ea5n r\u1ed3i n\xe8");var e={name:s.state.name,level:s.state.level,date:s.state.date};s.props.handleAdd(e),s.setState({name:"",level:0,date:""})},s.state={name:"",level:1,date:"2001-9-9"},s}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#addnew",children:"ADD"}),Object(m.jsx)("div",{className:"modal fade",id:"addnew",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsxs)("div",{className:"modal-header",children:[Object(m.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"New Target"}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(m.jsxs)("div",{className:"modal-body m-3 d-flex flex-column",children:[Object(m.jsxs)("div",{className:"input-group flex-nowrap m-auto",children:[Object(m.jsx)("span",{className:"input-group-text",id:"addon-wrapping",children:"Name:"}),Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"addon-wrapping",onChange:this.handleChange,name:"name",value:this.state.name})]}),Object(m.jsxs)("select",{className:"form-select ","aria-label":"Default select example",onChange:this.handleChange,name:"level",value:this.state.level,children:[Object(m.jsx)("option",{defaultValue:1,children:"One"}),Object(m.jsx)("option",{value:2,children:"Two"}),Object(m.jsx)("option",{value:3,children:"Three"})]}),Object(m.jsxs)("div",{className:"input-group flex-nowrap m-auto",children:[Object(m.jsx)("span",{className:"input-group-text",id:"addon-wrapping",children:"Date: "}),Object(m.jsx)("input",{type:"date",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"addon-wrapping",onChange:this.handleChange,name:"date",value:this.state.date})]})]}),Object(m.jsxs)("div",{className:"modal-footer",children:[Object(m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.handleSave,"data-bs-dismiss":"modal",children:"ADD New"})]})]})})})]})}}]),a}(s.Component),g=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleAdd=function(e){var t=Object(c.a)(s.state.ds);t.push({ID:s.state.AutoIncrease,name:e.name,level:e.level,date:e.date}),console.log(t),console.log(e),s.setState({ds:t,AutoIncrease:s.state.AutoIncrease+1})},s.handleDelete=function(e){var t=Object(c.a)(s.state.ds).filter((function(t){return t.ID!==e}));s.setState({ds:t})},s.handleEdit=function(e){var t=Object(c.a)(s.state.ds),a=t.findIndex((function(t){return t.ID===e.ID}));t[a]=e,s.setState({ds:t}),console.log(t)},s.onSetstate=function(){console.log("\u0111\xe3 b\u1ea5m"),s.setState({isActive:!s.state.isActive})},s.state={ds:h,AutoIncrease:5,isActive:!0},s}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"header text-center",children:[Object(m.jsx)("h1",{className:"title",children:"Ch\xe0o b\u1ea1n"}),Object(m.jsx)(x,{handleAdd:this.handleAdd})]}),Object(m.jsx)(O,{danhsach:this.state.ds,handleDelete:this.handleDelete,handleEdit:this.handleEdit})]})})}}]),a}(s.Component),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,d=t.getTTFB;a(e),s(e),n(e),l(e),d(e)}))};d.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.12c67ab9.chunk.js.map