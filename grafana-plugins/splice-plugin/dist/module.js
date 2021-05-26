/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/runtime","@grafana/data","@grafana/ui","rxjs","lodash","emotion"],(function(e,t,r,n,a,o,u){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t,r){"use strict";r.r(t);var n=r(2),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t,r,n){return new(r||(r=Promise))((function(a,o){function u(e){try{s(n.next(e))}catch(e){o(e)}}function i(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,i)}s((n=n.apply(e,t||[])).next())}))}function s(e,t){var r,n,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)u.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return u}var f=r(1),d=r(4);function p(e,t,r,a){return new d.Observable((function(o){var i="signal-"+t.panelId+"-"+e.refId,s=t.intervalMs,c=t.requestId,d=t.range,p=s||5e3,m=t.maxDataPoints||750,h=new n.CircularDataFrame({append:"tail",capacity:m});h.refId=e.refId,h.name=e.alias||"Fetch "+e.refId,h.addField({name:"time",type:n.FieldType.time}),h.addField({name:"value",type:n.FieldType.number});var y=null,v=0,g=0,b=!0,w=function(t,o){var i=[],s={from:Object(n.toUtc)(t),to:Object(n.toUtc)(o)};i.push(u(u({},e),{maxDataPoints:m,speed:p,totime:o}));var d={queries:i};d.range=s,d.from=s.from.valueOf().toString(),d.to=s.to.valueOf().toString(),Object(f.getBackendSrv)().datasourceRequest({url:a+"/query",method:"POST",data:d,headers:r,requestId:c}).then((function(e){var t,r;if(e.data&&e.data[0])try{for(var n=l(e.data[0].rows),a=n.next();!a.done;a=n.next()){var o=a.value;h.fields[0].values.add(o[0]),h.fields[1].values.add(o[1])}}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}})).catch((function(e){e.isHandled=!0})),b=!0,v=o},x=Date.now()-m*p,O=Date.now();d&&(x=d.from.valueOf(),O=d.to.valueOf(),g=Date.now()-O),b=!1,w(x,O);return setTimeout((function e(){b&&(b=!1,w(v,Date.now()-g),o.next({data:[h],key:i})),y=setTimeout(e,p)}),p),function(){console.log("unsubscribing to stream "+i),clearTimeout(y)}}))}var m,h=r(5),y=r.n(h),v=function(){function e(){}return e.prototype.parseMetricFindQueryResult=function(e){var t=e.columns,r=e.rows;if(!e||0===t.length)return[];var n=this.findColIndex(t,"__text"),a=this.findColIndex(t,"__value");return 2===t.length&&-1!==n&&-1!==a?this.transformToKeyValueList(r,n,a):this.transformToSimpleList(r)},e.prototype.transformToKeyValueList=function(e,t,r){for(var n=[],a=0;a<e.length;a++)this.containsKey(n,e[a][t])||n.push({text:e[a][t],value:e[a][r]});return n},e.prototype.transformToSimpleList=function(e){for(var t=[],r=0;r<e.length;r++)for(var n=0;n<e[r].length;n++){var a=e[r][n];-1===t.indexOf(a)&&t.push(a)}return y.a.map(t,(function(e){return{text:e}}))},e.prototype.findColIndex=function(e,t){for(var r=0;r<e.length;r++)if(e[r].text===t)return r;return-1},e.prototype.containsKey=function(e,t){for(var r=0;r<e.length;r++)if(e[r].text===t)return!0;return!1},e}(),g=function(e){function t(t){var r,n,a=e.call(this,t)||this;return a.type="splicemachinedb",a.url=null!=(r=t.url)?r:"",a.username=null!=(n=t.username)?n:"",a.name=t.name,a.database=t.database,a.basicAuth=t.basicAuth,a.withCredentials=t.withCredentials,a.headers=t.jsonData,a.responseParser=new v,a}return o(t,e),t.prototype.interpolateVariable=function(e,t){return"string"==typeof e?t.multi||t.includeAll?"'"+e.replace(/'/g,"''")+"'":e:"number"==typeof e?e:Object(h.map)(e,(function(t){return"number"==typeof e?e:"'"+t.replace(/'/g,"''")+"'"})).join(",")},t.prototype.testDatasource=function(){return i(this,void 0,void 0,(function(){return s(this,(function(e){return[2,Object(f.getBackendSrv)().datasourceRequest({url:this.url+"/",method:"GET",headers:this.headers}).then((function(e){return 200===e.status?{status:"success",message:"Data source is working",title:"Success"}:{status:"fail",message:e.message}}))]}))}))},t.prototype.query=function(e){var t,r,a=this,o=e.intervalMs,i=e.maxDataPoints,s=e.range,m=e.requestId,h=f.config.bootData.user.orgId,y=[],v=[],g=e.targets;this.filterQuery&&(g=g.filter((function(e){return a.filterQuery(e)})));try{for(var b=l(g),w=b.next();!w.done;w=b.next()){var x=w.value;if("stream"===x.format)y.push(p(this.myapplyTemplateVariables(x,e.scopedVars),e,this.headers,this.url));else{var O=this.id;if("__expr__"===x.datasource)v.push(u(u({},x),{datasourceId:O,orgId:h}));else{if(x.datasource){var T="default"===x.datasource?f.config.defaultDatasource:x.datasource,S=f.config.datasources[T];if(!S)throw new Error("Unknown Datasource: "+x.datasource);O=S.id}v.push(u(u({},this.myapplyTemplateVariables(x,e.scopedVars)),{datasourceId:O,intervalMs:o,maxDataPoints:i,orgId:h}))}}}}catch(e){t={error:e}}finally{try{w&&!w.done&&(r=b.return)&&r.call(b)}finally{if(t)throw t.error}}if(v.length){var q={queries:v};s&&(q.range=s,q.from=s.from.valueOf().toString(),q.to=s.to.valueOf().toString());var E=Object(f.getBackendSrv)().datasourceRequest({url:this.url+"/query",method:"POST",data:q,headers:this.headers,requestId:m}).then((function(e){return{data:e.data,state:n.LoadingState.Done}})).catch((function(e){e.isHandled=!0;var t=Object(f.toDataQueryResponse)(e);return a.processResponse?a.processResponse(t):t}));y.push(Object(d.from)(E))}return d.merge.apply(void 0,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}(y))},t.prototype.variableQuery=function(e){var t=this,r=f.config.bootData.user.orgId,a=this.id,o={sqlstmt:u(u({},e),{datasourceId:a,orgId:r})},i=Object(f.getBackendSrv)().datasourceRequest({url:this.url+"/variablequery",method:"POST",data:o,headers:this.headers}).then((function(e){return{data:e.data,state:n.LoadingState.Done}})).catch((function(e){e.isHandled=!0;var r=Object(f.toDataQueryResponse)(e);return t.processResponse?t.processResponse(r):r}));return Object(d.from)(i)},t.prototype.myapplyTemplateVariables=function(e,t){var r;return u(u({},e),{queryText:Object(f.getTemplateSrv)().replace((r=e.queryText,null!=r?r:""),t)})},t.prototype.metricFindQuery=function(e,t){return i(this,void 0,void 0,(function(){var t,r,n;return s(this,(function(a){switch(a.label){case 0:return e?(t=Object(f.getTemplateSrv)().replace(e,{},this.interpolateVariable),[4,this.variableQuery({rawQueryText:t,queryText:t,timeColumns:[]}).toPromise()]):[2,[]];case 1:if((r=a.sent()).error)throw new Error(r.error.message);return n=r.data,[2,this.responseParser.parseMetricFindQueryResult(n)]}}))}))},t}(f.DataSourceWithBackend),b=r(0),w=r.n(b),x=r(6),O=r(3),T=O.LegacyForms.Input,S=O.LegacyForms.FormField,q=O.LegacyForms.SecretFormField,E=function(e){var t,r,n=e.defaultUrl,a=e.dataSourceConfig,o=e.onChange,i=a.secureJsonData?a.secureJsonData.basicAuthPassword:"";void 0!==a.url&&null!==a.url&&""!==a.url||(a.url=n);var s=Object(O.useTheme)(),l=Object(b.useCallback)((function(e){o(u(u({},a),e))}),[a]);r=w.a.createElement(w.a.Fragment,null,"Your access method is ",w.a.createElement("em",null,"Server"),", this means the URL needs to be accessible from the grafana backend/server.");var c,f,d=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(a.url),p=Object(x.css)(m||(c=["\n    box-shadow: inset 0 0px 5px ",";\n  "],f=["\n    box-shadow: inset 0 0px 5px ",";\n  "],Object.defineProperty?Object.defineProperty(c,"raw",{value:f}):c.raw=f,m=c),s.palette.red),h=Object(x.cx)(((t={})["width-20"]=!0,t[p]=!d,t)),y=w.a.createElement(T,{className:h,placeholder:n,value:a.url,onChange:function(e){return l({url:e.currentTarget.value})}});return w.a.createElement("div",{className:"gf-form-group"},w.a.createElement(w.a.Fragment,null,w.a.createElement("h3",{className:"page-heading"},"HTTP"),w.a.createElement("div",{className:"gf-form-group"},w.a.createElement("div",{className:"gf-form"},w.a.createElement(S,{label:"URL",labelWidth:11,tooltip:r,inputEl:y})),w.a.createElement("div",{className:"gf-form"},w.a.createElement(S,{label:"User",labelWidth:10,inputWidth:18,placeholder:"user",value:a.basicAuthUser,onChange:function(e){o(u(u({},a),{basicAuth:!0,withCredentials:!0,basicAuthUser:e.currentTarget.value,jsonData:u(u({},a.jsonData),{user:e.currentTarget.value})}))}})),w.a.createElement("div",{className:"gf-form"},w.a.createElement(q,{isConfigured:!1,value:i||"",inputWidth:18,labelWidth:10,onReset:function(){o(u(u({},a),{basicAuthPassword:"",secureJsonData:u(u({},a.secureJsonData),{basicAuthPassword:""}),secureJsonFields:u(u({},a.secureJsonFields),{basicAuthPassword:!1})}))},onChange:function(e){o(u(u({},a),{basicAuth:!0,withCredentials:!0,basicAuthPassword:e.currentTarget.value,secureJsonData:u(u({},a.secureJsonData),{basicAuthPassword:e.currentTarget.value}),jsonData:u(u({},a.jsonData),{password:e.currentTarget.value})}))}})))))},j=[{label:"Time series",value:"time_series"},{label:"Table",value:"table"},{label:"Stream",value:"stream"}],D="SELECT\n    <time_column> as time,\n    <value_column> as value\n  FROM\n    <table name>\n  WHERE\n    $__timeFilter(time_column)\n  ORDER BY\n    <time_column> ASC",C=function(e){function t(t){var r=e.call(this,t)||this;r.onFormatChange=function(e){r.query.format=e.value,"table"===r.query.format&&r.query.queryText===D?r.query.queryText="":("time_series"===r.query.format&&""===r.query.queryText||"stream"===r.query.format&&""===r.query.queryText)&&(r.query.queryText=D),r.setState({formatOption:e},r.onRunQuery)},r.onQueryTextChange=function(e){var t=r.props,n=t.onChange,a=t.query;r.query.queryText=e.target.value,n(u(u({},a),{queryText:e.target.value}))},r.onQueryTextKeyDown=function(e){var t=e;if(13===t.keyCode&&t.shiftKey||"Tab"===t.key)return t.preventDefault(),void r.onRunQuery()},r.onRunQuery=function(){var e=r.query;r.props.onChange(e),r.props.onRunQuery()};var n={format:"time_series",queryText:D},a=Object.assign({},n,t.query);return r.query=a,r.state={formatOption:j.find((function(e){return e.value===a.format}))||j[0]},r.props.onChange(a),r}return o(t,e),t.prototype.render=function(){var e=this.state.formatOption;return w.a.createElement("div",{className:"gf-form-group"},w.a.createElement("div",{className:"gf-form-inline"},w.a.createElement("div",{className:"gf-form gf-form--grow"},w.a.createElement("textarea",{rows:9,className:"gf-form-input",placeholder:"Enter a splice machine query (run with Shift+Enter)","data-min-length":0,"data-items":100,value:this.query.queryText,onKeyDown:this.onQueryTextKeyDown,onChange:this.onQueryTextChange,spellCheck:!1}))),w.a.createElement("div",{className:"gf-form-inline"},w.a.createElement("div",{className:"gf-form"},w.a.createElement("div",{className:"gf-form-label width-7"},"Format"),w.a.createElement(O.Select,{width:16,isSearchable:!1,options:j,onChange:this.onFormatChange,value:e}))))},t}(b.PureComponent);r.d(t,"plugin",(function(){return P}));var P=new n.DataSourcePlugin(g).setConfigEditor((function(e){var t=e.options,r=e.onOptionsChange;return w.a.createElement(w.a.Fragment,null,w.a.createElement(E,{defaultUrl:"http://splicedb-splice-http.<NAMESPACE>.svc.cluster.local:1111/",dataSourceConfig:t,showAccessOptions:!0,onChange:r}))})).setQueryEditor(C)}])}));
//# sourceMappingURL=module.js.map