"use strict";(self.webpackChunkflowhero=self.webpackChunkflowhero||[]).push([[789],{63789:function(e,t,a){a.d(t,{Z:function(){return M}});var n=a(70885),l=a(20086),o=a(89293),r="UserOverviewModal_topContainer__SfY2a",i="UserOverviewModal_avatarContainer__qWrM5",s="UserOverviewModal_name__i+epl",c="UserOverviewModal_position__8Heb9",d=a(1413),u=a(67861),m="PageSubtitle_host__1jvVf",p="PageSubtitle_pageSubtitleHost__vDvTj",v="PageSubtitle_pageSubtitleChild__s3-5p",f=function(e){var t=e.subtitleImage,a=e.subtitleText,n=e.style,l=e.smallerSubtitle;return u.createElement("div",{className:m},u.createElement("div",{className:p,style:(0,d.Z)({},n)},t&&u.createElement("img",{src:t,className:"grey-svg-image-filter",alt:""}),u.createElement("p",null,a)),l&&u.createElement("div",{className:v},u.createElement("p",null,l)))},h=a(50981),g=a.n(h),k=a(51481),_=a(10103),E=a(11577),y=a(72864),T=a(87462),b=a(90369),S=a(62589),w="TasksTable_tasksTableHost__msAp6";var Z=function(e){var t=e.historyData,a=e.currentPage,o=e.lastPage,r=e.setPage,i=e.loading,s=e.setLoading,c=e.columns,d=e.data,m=(0,u.useState)(!1),p=(0,n.Z)(m,2),v=p[0],f=p[1],h=(0,u.useState)(""),g=(0,n.Z)(h,2),k=g[0],_=g[1],E=(0,u.useState)(""),y=(0,n.Z)(E,2),Z=y[0],C=y[1],x=(0,u.useState)(""),M=(0,n.Z)(x,2),N=M[0],Y=M[1],D=(0,u.useState)(""),P=(0,n.Z)(D,2),O=P[0],R=P[1],A=(0,u.useState)(""),I=(0,n.Z)(A,2),H=I[0],j=I[1],U=(0,u.useState)(""),B=(0,n.Z)(U,2),L=B[0],q=B[1],V=(0,u.useState)(""),W=(0,n.Z)(V,2),F=W[0],$=W[1],z=(0,u.useState)(""),G=(0,n.Z)(z,2),J=G[0],X=G[1],Q=(0,b.useTable)({columns:c,data:d}),K=Q.getTableProps,ee=Q.getTableBodyProps,te=Q.headerGroups,ae=Q.rows,ne=Q.prepareRow;return u.createElement("div",{className:w},u.createElement("table",K(),u.createElement("thead",null,te.map((function(e,t){return u.createElement("tr",(0,T.Z)({key:t},e.getHeaderGroupProps(),{className:"header-row"}),e.headers.map((function(e,t){return u.createElement("th",(0,T.Z)({key:t},e.getHeaderProps()),e.render("Header"))})))}))),u.createElement("tbody",ee(),ae.map((function(e,a){return ne(e),u.createElement("tr",(0,T.Z)({key:a},e.getRowProps(),{onClick:function(){return e=t[a],X(e),f(!v),_(e.taskName),C(e.createdAt),Y(e.completedOn),R(e.duration),j(e.taskCreator),q(e.taskAssignee),void $(null===e||void 0===e?void 0:e.process);var e},style:{cursor:"pointer"}}),e.cells.map((function(e,t){return u.createElement("td",(0,T.Z)({key:t},e.getCellProps()),e.render("Cell"))})))})))),0==d.length&&u.createElement("p",null,"No Tasks Found"),u.createElement("div",{style:{textAlign:"center",marginTop:"20px",paddingBottom:"50px"}},a!==o&&d.length>0&&u.createElement(l.nw,{loadMorePressed:function(){s(!i),r(a+1)},apiRequest:i})),u.createElement(S.Z,{openedTask:J,createdAt:Z,taskName:k,completedOn:N,duration:O,taskCreator:H,taskAssignee:L,process:F,modalVisible:v,modalClosed:function(){return f(!v)},hasTutorial:!0,blured:!0,childrenWrapperStyle:{alignItems:"center"},onCancel:function(){return f(!v)}}))},C=a(23280),x=a(73500),M=function(e){var t,a,d,m,p=e.isVisible,v=e.activeItem,h=e.handleClose,T=(e.isAdmin,v.first_name),b=v.last_name,S=v.id,w=(0,u.useState)([]),M=(0,n.Z)(w,2),N=M[0],Y=M[1],D=(0,u.useState)([]),P=(0,n.Z)(D,2),O=P[0],R=P[1],A=(0,u.useState)([]),I=(0,n.Z)(A,2),H=I[0],j=I[1],U=(0,u.useState)(!1),B=(0,n.Z)(U,2),L=B[0],q=B[1],V=(0,u.useState)(!1),W=(0,n.Z)(V,2),F=W[0],$=W[1],z=(0,u.useState)({laterTasks:[],todayTasks:[],overdueTasks:[]}),G=(0,n.Z)(z,2),J=G[0],X=G[1],Q=(0,u.useState)(1),K=(0,n.Z)(Q,2),ee=K[0],te=K[1],ae=(null===O||void 0===O?void 0:O.meta)||{},ne=ae.current_page,le=ae.from,oe=O.data&&(null===O||void 0===O||null===(t=O.data)||void 0===t?void 0:t.map((function(e){return e}))),re=function(e){return q(e)},ie=function(e){return $(e)};(0,C.s0)();(0,u.useEffect)((function(){return ue()}),[O.data]),(0,u.useEffect)((function(){return se()}),[N]),(0,u.useEffect)((function(){re(!0),(0,k.km)(S,!0).pipe((0,_.q)(1)).subscribe({next:function(e){Y(e),re(!1)},error:function(){re(!1)},complete:function(){re(!1)}})}),[]),(0,u.useEffect)((function(){ie(!0),(0,k.qp)(ee,S,!0).pipe((0,E.P)()).subscribe({next:function(e){R(e),ie(!1)}})}),[ee]);var se=(0,u.useCallback)((function(){var e=[],t=[],a=[];0!==(null===N||void 0===N?void 0:N.length)&&(N.map((function(n){var l=g()(new Date).format("YYYY-MM-DD");return g()(n.due_date,"YYYY-MM-DD").isSame(l)?t.push(n):g()(n.due_date,"YYYY-MM-DD").isAfter(l)?a.push(n):e.push(n)})),X({laterTasks:a,todayTasks:t,overdueTasks:e}))}),[N]),ce=function(e){return e.length>0&&e.map((function(e,t){return u.createElement("div",{key:t},u.createElement(y.Z,{task:e,taskId:e.id}))}))},de=u.useMemo((function(){return[{Header:function(){return u.createElement("span",null,"Task Name")},accessor:"taskName"},{Header:function(){return u.createElement("span",null,"Completed On")},accessor:"completedOn"}]}),[]),ue=(0,u.useCallback)((function(){var e,t,a=[];0!==(null===O||void 0===O||null===(e=O.data)||void 0===e?void 0:e.length)&&(null===O||void 0===O||null===(t=O.data)||void 0===t||t.map((function(e){var t;return a.push({taskName:e.name,process:null===e||void 0===e||null===(t=e.process)||void 0===t?void 0:t.name,completedOn:g()(e.completed_at).format("DD of MMMM YYYY hh:mm"),duration:e.duration})})),j(a))}),[O]);return u.createElement(l.U7,{isOpen:p,modalWrapperStyle:{margin:0},shadowedContainerStyle:{width:x.tq?"100%":"50%"},onClose:function(){return h()},scrollable:!0,blured:!0},u.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},u.createElement(l.zx,{title:"Close",clicked:h,style:{width:"100px"}})),u.createElement("div",{style:{padding:"20px"}},u.createElement("div",{style:{display:"flex",flexDirection:"column"}},u.createElement("div",{className:r},u.createElement("div",{className:i},(null===v||void 0===v||null===(a=v.photo)||void 0===a?void 0:a.length)>0&&u.createElement("img",{alt:"lg",src:(0,o.oY)(v.photo)}))),u.createElement("div",{style:{padding:"30px"}},u.createElement("p",{className:s},T+" "+b),(null===v||void 0===v||null===(d=v.positions)||void 0===d?void 0:d.length)>0&&(null===v||void 0===v||null===(m=v.positions)||void 0===m?void 0:m.map((function(e,t){return u.createElement("div",{key:t},u.createElement("p",{className:c},null===e||void 0===e?void 0:e.name))}))))),u.createElement("div",{style:{display:"none",flexDirection:"row",justifyContent:"initial"}},u.createElement("div",{style:{marginRight:"20px",width:"33%"}},u.createElement(l.SO,{cardTitle:"Overdue"},L?u.createElement(l.$j,{type:"BallTriangle",color:"var(--app-color-gray-light)",height:30,width:"".concat(30,"px")}):ce(J.overdueTasks))),u.createElement("div",{style:{marginRight:"20px",width:"33%"}},u.createElement(l.SO,{cardTitle:"Today"},L?u.createElement(l.$j,{type:"BallTriangle",color:"var(--app-color-gray-light)",height:30,width:"".concat(30,"px")}):ce(J.todayTasks))),u.createElement("div",{style:{width:"33%"}},u.createElement(l.SO,{cardTitle:"Upcoming"},L?u.createElement(l.$j,{type:"BallTriangle",color:"var(--app-color-gray-light)",height:30,width:"".concat(30,"px")}):ce(J.laterTasks)))),u.createElement("div",{style:{display:"flex",flexDirection:"column"}},u.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"5px",paddingLeft:"5px"}},u.createElement(f,{subtitleText:"Tasks History"})),F?u.createElement(l.$j,{type:"BallTriangle",color:"var(--app-color-gray-light)",height:30,width:"".concat(30,"px")}):u.createElement(Z,{loading:F,currentPage:ne,lastPage:le,setLoading:$,historyData:oe,page:ee,setPage:te,columns:de,data:H}))))}},62589:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(1413),l=a(67861),o=(a(83381),a(39518)),r=a(88374),i=a(20086),s="InfoTaskModal_savedDescription__4uzvj",c="InfoTaskModal_contentWrapper__gt+iR",d="InfoTaskModal_contentContainer__DoP5Z",u="InfoTaskModal_content__42cL+",m="InfoTaskModal_backIconContainer__eM6Vt",p="InfoTaskModal_fieldHistoryTitle__z8Foi",v=a(50981),f=a.n(v),h=a(73500);var g=function(e){var t=e.title,a=e.content;return l.createElement("div",null,l.createElement("p",{className:p},t),l.createElement("p",{className:s},a),e.children)},k=(0,o.$j)((function(e){var t=e.flowReducer;return{inviteColleguesList:t.inviteColleguesList,companyData:t.companyData}}),(function(e){return{onSetCompanyDataField:function(t){return e((0,r.QK)(t))}}}))((function(e){var t=e.modalVisible,a=e.childrenWrapperStyle,o=e.modalClosed,r=e.openedTask,s=r.name,p=r.created_at,v=r.completed_on,k=r.duration,_=(r.process,r.creator),E=r.assignee;return r.components,t?l.createElement("div",null,l.createElement(i.U7,{backdropStyle:{height:"900px"},marginTop:"500px",onClose:o,shadowedContainerStyle:{width:h.tq?"100%":"40%"},position:"fixed",scrollable:!0,backdropColor:!0,blured:!0,width:"90%",isOpen:t},l.createElement("div",{className:m},l.createElement(i.zx,{title:"Close",clicked:o})),l.createElement("div",{className:c,style:(0,n.Z)({},a)},l.createElement("div",{className:d},l.createElement("div",{className:u},l.createElement(g,{title:"Task Name",content:s}),l.createElement(g,{title:"Task Created On",content:f()(p).format("DD of MMMM YYYY hh:mm")}),l.createElement(g,{title:"Completed On",content:f()(v).format("DD of MMMM YYYY hh:mm")}),l.createElement(g,{title:"Time on this Task",content:k}),l.createElement(g,{title:"Task Creator",content:_.first_name+" "+_.last_name}),l.createElement(g,{title:"Assignee",content:E.first_name+" "+E.last_name})))))):null}))},72864:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(50981),l=a.n(n),o=a(67861),r=a(41771),i=a(20086),s="TaskCard_task-card__8sPmS",c="TaskCard_task-card-container__rHG31",d="TaskCard_clickLabel__A3ARk";var u=function(e){var t=e.task,a=e.openModal,n=void 0===a?function(){}:a,u=e.setTaskToEdit,m=void 0===u?function(){}:u,p=e.clicked,v=void 0===p?function(){}:p,f=e.isEditable,h=e.priority,g=t.name,k=t.process,_=t.status;return t.add_info,o.createElement("div",{className:s},t.completed_at?o.createElement("div",{className:c,style:{flex:1},onClick:function(){n(),m()}},o.createElement("p",{className:d},"".concat(void 0!==h?"".concat(h):"","  ").concat(g)),o.createElement("p",{className:d},l()(t.completed_at).format("DD of MMMM YYYY"))):o.createElement("div",{className:c},!k&&o.createElement(i.XZ,{label:"".concat(void 0!==h?"".concat(h):""," ").concat(g," ").concat(null!==_?"  (".concat(_,")"):""),onChange:v}),k&&o.createElement("p",{className:d,onClick:v}," ".concat(void 0!==h?"".concat(h):""," ").concat(g," ").concat(null!==_?"(".concat(_,")"):"")),f&&o.createElement("img",{alt:"",style:{cursor:"pointer"},src:r.ePH,onClick:function(){n(),m()}})))}},51481:function(e,t,a){a.d(t,{_5:function(){return v},km:function(){return m},lV:function(){return h},qp:function(){return p},vr:function(){return f},xJ:function(){return g},yW:function(){return u}});var n=a(1413),l=a(50981),o=a.n(l),r=a(95256),i=a(88374),s=a(88827),c=a(30994),d=a(96332),u=function(e){var t=s.h.getState().authReducer.sessionSettings.last_access_token,a=(0,n.Z)((0,n.Z)({},c.ns.tasks.getTaskById(t,e)),{},{handlerEnabled:!0});return new r.y((function(e){(0,d.b)(a).then((function(t){var a,n;200===(null===t||void 0===t?void 0:t.status)&&null!==t&&void 0!==t&&t.data&&null!==t&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data&&(e.next(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data),e.complete())})).catch((function(t){e.error(t)}))}))},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=s.h.getState().authReducer.sessionSettings.last_access_token,u=s.h.getState().flowReducer,m=u.lastUpdates,p=u.allTasks,v=(0,n.Z)((0,n.Z)({},c.ns.tasks.getAllTasks(a,e)),{},{handlerEnabled:!0});return new r.y((function(e){t||o()((0,l.now)()).diff(o()(m.tasks),"minutes")>10||0===p.length?(0,d.b)(v).then((function(t){var a;if(200===(null===t||void 0===t?void 0:t.status)&&null!==t&&void 0!==t&&t.data&&null!==t&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data){var o,r=null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.data;s.h.dispatch((0,i.rh)(r)),s.h.dispatch((0,i.C2)((0,n.Z)((0,n.Z)({},m),{},{tasks:(0,l.now)()}))),e.next(r),e.complete()}})).catch((function(t){e.error(t)})):e.complete()}))},p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=s.h.getState().authReducer.sessionSettings.last_access_token,m=(0,n.Z)((0,n.Z)({},c.ns.tasks.getAllCompletedTasks(u,e,t)),{},{handlerEnabled:!0}),p=s.h.getState().flowReducer,v=p.lastUpdates,f=p.allCompletedTasks;return new r.y((function(t){a||o()((0,l.now)()).diff(o()(v.allCompletedTasks),"minutes")>10||0===f.data.length?(0,d.b)(m).then((function(a){var n;if(200===(null===a||void 0===a?void 0:a.status)&&null!==a&&void 0!==a&&a.data&&null!==a&&void 0!==a&&null!==(n=a.data)&&void 0!==n&&n.data){var l=null===a||void 0===a?void 0:a.data;s.h.dispatch((0,i.cL)(l,e)),t.next(l),t.complete()}})).catch((function(e){t.error(e)})):t.complete()}))},v=function(e){var t=s.h.getState().authReducer.sessionSettings.last_access_token,a=new FormData,l=(0,n.Z)({},c.ns.tasks.deleteTask(t,e)),o=(0,n.Z)((0,n.Z)({},l),{},{headers:(0,n.Z)({},l.headers),data:a,handlerEnabled:!0});return new r.y((function(t){return(0,d.b)(o).then((function(a){200===(null===a||void 0===a?void 0:a.status)&&null!==a&&void 0!==a&&a.data&&(s.h.dispatch((0,i.Xc)({show:!0,message:"You have successfully deleted the task",color:"red"})),s.h.dispatch((0,i.OQ)(e)),t.next(a.data),t.complete())})).catch((function(e){t.error(e)}))}))},f=function(e){var t=s.h.getState().authReducer.sessionSettings.last_access_token,a=new FormData;a.append("name",e.taskName),a.append("description",e.taskDescription),a.append("due_date",e.dueDate),a.append("assignee_id",e.newAssignee.assignee_id),e.taskProcess&&a.append("procedure_id",e.taskProcess.procedure_id),e.add_info&&a.append("add_info",JSON.stringify(e.add_info));var l=(0,n.Z)((0,n.Z)({},c.ns.tasks.createTask(t)),{},{data:a,handlerEnabled:!0});return new r.y((function(e){return(0,d.b)(l).then((function(t){var a;if(null!==t&&void 0!==t&&t.data&&null!==t&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data){var n,l=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data;s.h.dispatch((0,i.Pb)(l)),s.h.dispatch((0,i.N5)(l,!1)),s.h.dispatch((0,i.Xc)({show:!0,message:"You have successfully created a new task"})),e.next(l),e.complete()}})).catch((function(t){e.error(t)}))}))},h=function(e){var t=s.h.getState().authReducer.sessionSettings.last_access_token,a=(0,n.Z)((0,n.Z)({},c.ns.tasks.startTaskById(t,e)),{},{data:e,handlerEnabled:!0,forwardAllErrors:!0});return new r.y((function(e){return(0,d.b)(a).then((function(t){var a,n;null!==t&&void 0!==t&&t.data&&null!==t&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data&&(s.h.dispatch((0,i.eT)(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data)),e.next(),e.complete())})).catch((function(t){e.error(t)}))}))},g=function(e,t){var a,l=s.h.getState().authReducer.sessionSettings.last_access_token,o={name:e.name,description:e.description,due_date:e.due_date,assignee_id:e.assignee_id,status:null!==(a=null===e||void 0===e?void 0:e.status)&&void 0!==a?a:""};e.add_info&&(o.add_info=JSON.stringify(e.add_info));var u=(0,n.Z)((0,n.Z)({},c.ns.tasks.editTask(l,t)),{},{data:o,forwardAllErrors:!0});return new r.y((function(e){return(0,d.b)(u).then((function(t){var a;if(null!==t&&void 0!==t&&t.data&&null!==t&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.data){var n,l=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data;s.h.dispatch((0,i.eT)(l)),e.next(l),e.complete()}})).catch((function(t){e.error(t)}))}))}}}]);
//# sourceMappingURL=789.b85e6b42.chunk.js.map