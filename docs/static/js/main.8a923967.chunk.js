(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},15:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Riandry_PC_Documents_Development_proyects_react_projects_React_projects_for_begginners_CalculatorsReactJS_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_index_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__),_CSS_calculator2_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24),_CSS_calculator2_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_CSS_calculator2_css__WEBPACK_IMPORTED_MODULE_3__);function Calculator2(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_Riandry_PC_Documents_Development_proyects_react_projects_React_projects_for_begginners_CalculatorsReactJS_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_Riandry_PC_Documents_Development_proyects_react_projects_React_projects_for_begginners_CalculatorsReactJS_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["/","*","+","-","."],updateCalc=function updateCalc(value){ops.includes(value)&&""===calc||ops.includes(value)&&ops.includes(calc.slice(-1))||(setCalc(calc+value),ops.includes(value)||setResult(eval(calc+value).toString()))},createDigits=function(){for(var e=[],t=function(t){e.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc(t.toString())},key:t},t))},a=1;a<10;a++)t(a);return e},calculate=function calculate(){setCalc(eval(calc).toString())},deleteLast=function(){if(""!==calc){var e=calc.slice(0,-1);setCalc(e)}};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"title-h1"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Calculator App (Using classes)")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"display"},result?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,result):"","\xa0",calc||"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"operators"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("/")}},"/"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("*")}},"*"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("+")}},"+"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("-")}},"-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:deleteLast},"DEL")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"digits"},createDigits(),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc("0")}},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return updateCalc(".")}},"."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:calculate},"="))))}__webpack_exports__.a=Calculator2},16:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),_=a(4),s=a(0),u=a(10),i=a(5),o=a(6),p=a(8),m=a(7),E=a(9),d=a(14),f=(a(12),a(22),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={scale:1},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state.scale,t=this.node,a=t.parentNode.offsetWidth/t.offsetWidth;e!==a&&(a<1?this.setState({scale:a}):e<1&&this.setState({scale:1}))}},{key:"render",value:function(){var e=this,t=this.state.scale;return r.a.createElement("div",{className:"auto-scaling-text",style:{transform:"scale(".concat(t,",").concat(t,")")},ref:function(t){return e.node=t}},this.props.children)}}]),t}(r.a.Component)),O=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=Object(u.a)(e,["value"]),n=navigator.language||"en-US",l=parseFloat(t).toLocaleString(n,{useGrouping:!0,maximumFractionDigits:6}),c=t.match(/\.\d*?(0*)$/);return c&&(l+=/[1-9]/.test(c[0])?c[1]:c[0]),r.a.createElement("div",Object.assign({},a,{className:"calculator-display"}),r.a.createElement(f,null,l))}}]),t}(r.a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onPress,a=e.className,n=Object(u.a)(e,["onPress","className"]);return r.a.createElement(d.a,{onPoint:t},r.a.createElement("button",Object.assign({className:"calculator-key ".concat(a)},n)))}}]),t}(r.a.Component),v={"/":function(e,t){return e/t},"*":function(e,t){return e*t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"=":function(e,t){return t}},P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:null,displayValue:"0",operator:null,waitingForOperand:!1},a.handleKeyDown=function(e){var t=e.key;"Enter"===t&&(t="="),/\d/.test(t)?(e.preventDefault(),a.inputDigit(parseInt(t,10))):t in v?(e.preventDefault(),a.performOperation(t)):"."===t?(e.preventDefault(),a.inputDot()):"%"===t?(e.preventDefault(),a.inputPercent()):"Backspace"===t?(e.preventDefault(),a.clearLastChar()):"Clear"===t&&(e.preventDefault(),"0"!==a.state.displayValue?a.clearDisplay():a.clearAll())},a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"clearAll",value:function(){this.setState({value:null,displayValue:"0",operator:null,waitingForOperand:!1})}},{key:"clearDisplay",value:function(){this.setState({displayValue:"0"})}},{key:"clearLastChar",value:function(){var e=this.state.displayValue;this.setState({displayValue:e.substring(0,e.length-1)||"0"})}},{key:"toggleSign",value:function(){var e=this.state.displayValue,t=-1*parseFloat(e);this.setState({displayValue:String(t)})}},{key:"inputPercent",value:function(){var e=this.state.displayValue;if(0!==parseFloat(e)){var t=e.replace(/^-?\d*\.?/,""),a=parseFloat(e)/100;this.setState({displayValue:String(a.toFixed(t.length+2))})}}},{key:"inputDot",value:function(){var e=this.state.displayValue;/\./.test(e)||this.setState({displayValue:e+".",waitingForOperand:!1})}},{key:"inputDigit",value:function(e){var t=this.state,a=t.displayValue;t.waitingForOperand?this.setState({displayValue:String(e),waitingForOperand:!1}):this.setState({displayValue:"0"===a?String(e):a+e})}},{key:"performOperation",value:function(e){var t=this.state,a=t.value,n=t.displayValue,r=t.operator,l=parseFloat(n);if(null==a)this.setState({value:l});else if(r){var c=a||0,_=v[r](c,l);this.setState({value:_,displayValue:String(_)})}this.setState({waitingForOperand:!0,operator:e})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state.displayValue,a="0"!==t,n=a?"C":"AC";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-h1"},r.a.createElement("h1",null,"Calculator App (Using classes)")),r.a.createElement("div",{className:"calculator"},r.a.createElement(O,{value:t}),r.a.createElement("div",{className:"calculator-keypad"},r.a.createElement("div",{className:"input-keys"},r.a.createElement("div",{className:"function-keys"},r.a.createElement(D,{className:"key-clear",onPress:function(){return a?e.clearDisplay():e.clearAll()}},n),r.a.createElement(D,{className:"key-sign",onPress:function(){return e.toggleSign()}},"\xb1"),r.a.createElement(D,{className:"key-percent",onPress:function(){return e.inputPercent()}},"%")),r.a.createElement("div",{className:"digit-keys"},r.a.createElement(D,{className:"key-0",onPress:function(){return e.inputDigit(0)}},"0"),r.a.createElement(D,{className:"key-dot",onPress:function(){return e.inputDot()}},"\u25cf"),r.a.createElement(D,{className:"key-1",onPress:function(){return e.inputDigit(1)}},"1"),r.a.createElement(D,{className:"key-2",onPress:function(){return e.inputDigit(2)}},"2"),r.a.createElement(D,{className:"key-3",onPress:function(){return e.inputDigit(3)}},"3"),r.a.createElement(D,{className:"key-4",onPress:function(){return e.inputDigit(4)}},"4"),r.a.createElement(D,{className:"key-5",onPress:function(){return e.inputDigit(5)}},"5"),r.a.createElement(D,{className:"key-6",onPress:function(){return e.inputDigit(6)}},"6"),r.a.createElement(D,{className:"key-7",onPress:function(){return e.inputDigit(7)}},"7"),r.a.createElement(D,{className:"key-8",onPress:function(){return e.inputDigit(8)}},"8"),r.a.createElement(D,{className:"key-9",onPress:function(){return e.inputDigit(9)}},"9"))),r.a.createElement("div",{className:"operator-keys"},r.a.createElement(D,{className:"key-divide",onPress:function(){return e.performOperation("/")}},"\xf7"),r.a.createElement(D,{className:"key-multiply",onPress:function(){return e.performOperation("*")}},"\xd7"),r.a.createElement(D,{className:"key-subtract",onPress:function(){return e.performOperation("-")}},"\u2212"),r.a.createElement(D,{className:"key-add",onPress:function(){return e.performOperation("+")}},"+"),r.a.createElement(D,{className:"key-equals",onPress:function(){return e.performOperation("=")}},"=")))))}}]),t}(r.a.Component),y=a(15),b=(a(26),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(_.b,{className:"nav-link active anim-bottom-blue to-center ","aria-current":"page",to:"/"},"Calculator-1"),r.a.createElement(_.b,{className:"nav-link  anim-bottom-red to-center ",to:"/Calculator2"},"Calculator-2"))))))}),C=function(){return r.a.createElement(_.a,null,r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/Calculator2",element:r.a.createElement(y.a,null)}),r.a.createElement(s.b,{path:"/",element:r.a.createElement(P,null)}),r.a.createElement(s.b,{element:r.a.createElement(s.a,{replace:!0,to:"/"})})))))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.8a923967.chunk.js.map