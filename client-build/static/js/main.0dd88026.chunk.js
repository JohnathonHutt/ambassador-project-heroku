(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),i=n.n(r),c=(n(28),n(16)),s=n(17),m=n(21),o=n(18),h=n(3),u=n(22),d=(n(29),n(10)),k=n(6);function f(e){return l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Grow the web with referrals!"),l.a.createElement(p,{onSubmit:e.onSubmit,term:e.term,handleChange:e.handleChange}),l.a.createElement(E,{referralLinks:e.referralLinks,handleLinkClick:e.handleLinkClick,editListItem:e.editListItem,deleteLink:e.deleteLink,editName:e.editName,handleChangeLink:e.handleChangeLink,nameTerm:e.nameTerm,handleChangeClick:e.handleChangeClick,clickTerm:e.clickTerm}))}function p(e){return l.a.createElement("form",{onSubmit:e.onSubmit},l.a.createElement("input",{className:"input-text",value:e.term,onChange:e.handleChange,placeholder:"Add a new link"}),l.a.createElement("button",{className:"add-btn"}))}function E(e){return l.a.createElement("div",{className:"table-wrapper"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Link"),l.a.createElement("th",null,"Clicks"),l.a.createElement("th",null,"Edit"),l.a.createElement("th",null,"Delete"))),l.a.createElement(N,{referralLinks:e.referralLinks,handleLinkClick:e.handleLinkClick,editListItem:e.editListItem,deleteLink:e.deleteLink,editName:e.editName,handleChangeLink:e.handleChangeLink,nameTerm:e.nameTerm,handleChangeClick:e.handleChangeClick,clickTerm:e.clickTerm})))}function N(e){return l.a.createElement("tbody",null,l.a.createElement("tr",{className:"spacer"}),e.referralLinks.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",{className:"link-col"},e.editName===t.name?l.a.createElement("input",{type:"text",value:e.nameTerm,onChange:e.handleChangeLink}):l.a.createElement(d.b,{className:"link",to:"/"+t.name,onClick:function(){return e.handleLinkClick(t.name,t.clickNum)}},t.name)),l.a.createElement("td",{className:"col"},e.editName===t.name?l.a.createElement("input",{type:"text",value:e.clickTerm,onChange:e.handleChangeClick}):t.clickNum),l.a.createElement("td",null,l.a.createElement("div",{className:"switch",onClick:function(){return e.editListItem(t.name,t.clickNum)}},l.a.createElement("div",{className:"outer-slider ".concat(e.editName===t.name?" outer-active":"")},l.a.createElement("div",{className:"inner-slider ".concat(e.editName===t.name?" inner-active":"")})))),l.a.createElement("td",{className:"col delete",onClick:function(){return e.deleteLink(t.name)}},l.a.createElement("span",{className:"delete"},"Delete")))})))}function g(e){return e.currentName||e.resetCurrentName(),l.a.createElement("div",null,l.a.createElement("h1",null,e.currentName," is the best!"),l.a.createElement("h2",{className:"sub-title"},"Join your fellow web-heads on the World Wide Web!"),l.a.createElement("img",{className:"spdImg",src:"./wwwSpiderMan.png",alt:"spiderman hanging from world wide web"}),l.a.createElement(b,null))}function b(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card"},l.a.createElement("h3",{className:"card-title"},"About the Web"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://webfoundation.org/about/vision/history-of-the-web/"},"Histroy of the Web")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://webfoundation.org/about/sir-tim-berners-lee/"},"Sir Tim Berners-Lee (founder)")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://www.w3.org/"},"World Wide Web Consortium")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://en.wikipedia.org/wiki/World_Wide_Web"},"World Wide Web - Wikipedia")))),l.a.createElement("div",{className:"card"},l.a.createElement("h3",{className:"card-title"},"Learn On the Web"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://www.wikipedia.org/"},"Wikipedia: The Free Encycolopedia")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://www.edx.org/"},"edX: Free and Affordable Education")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://www.udemy.com/"},"Udemy: Affordable Online Education")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://developer.mozilla.org/en-US/"},"MDN: Learn About Web Technologies")))),l.a.createElement("div",{className:"card"},l.a.createElement("h3",{className:"card-title"},"Fun On the Web"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://www.youtube.com/"},"YouTube: Watch and Share Videos")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://www.reddit.com/"},"Reddit: The Front Page of The Internet")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://medium.com/"},"Medium: Online Publishing")),l.a.createElement("li",null,l.a.createElement("a",{className:"link",href:"https://twitter.com"},"Twitter: Short Form Conversations With the World")))))}var C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={referralLinks:[],currentName:"",term:"",editName:"",nameTerm:"",clickTerm:""},n.sortByClicks=n.sortByClicks.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.onSubmit=n.onSubmit.bind(Object(h.a)(n)),n.handleLinkClick=n.handleLinkClick.bind(Object(h.a)(n)),n.editListItem=n.editListItem.bind(Object(h.a)(n)),n.deleteLink=n.deleteLink.bind(Object(h.a)(n)),n.handleChangeLink=n.handleChangeLink.bind(Object(h.a)(n)),n.handleChangeClick=n.handleChangeClick.bind(Object(h.a)(n)),n.resetCurrentName=n.resetCurrentName.bind(Object(h.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ambserver.herokuapp.com/reflinks").then((function(e){return e.json()})).then((function(t){var n=[];t.forEach((function(e){n.push({name:e.name,clickNum:e.clickNum,id:e._id})})),console.log(n),e.setState({referralLinks:e.sortByClicks(n)})}))}},{key:"sortByClicks",value:function(e){return e.sort((function(e,t){return t.clickNum-e.clickNum}))}},{key:"resetCurrentName",value:function(){var e=decodeURI(window.location.href).split("/"),t=e[e.length-1];this.setState({currentName:t})}},{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.state.term){var n=!0;if(this.state.referralLinks.forEach((function(e){e.name===t.state.term&&(n=!1)})),n){var a={name:this.state.term};fetch("https://ambserver.herokuapp.com/reflinks",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json"}}).then((function(e){return console.log("Request success: ",e),fetch("https://ambserver.herokuapp.com/reflinks")})).then((function(e){return e.json()})).then((function(e){var n=[];e.forEach((function(e){n.push({name:e.name,clickNum:e.clickNum,id:e._id})})),console.log(n),t.setState({referralLinks:t.sortByClicks(n)})})).catch((function(e){console.log("Request failure: ",e)}))}}this.setState({term:""})}},{key:"handleChange",value:function(e){console.log(e.target),console.log(e.target.value),this.setState({term:e.target.value})}},{key:"handleChangeLink",value:function(e){console.log(e.target),console.log(e.target.value),this.setState({nameTerm:e.target.value})}},{key:"handleChangeClick",value:function(e){console.log(e.target),console.log(e.target.value),this.setState({clickTerm:e.target.value})}},{key:"handleLinkClick",value:function(e,t){var n=this;this.setState({currentName:e});var a={name:e,clickNum:t+=1},l=encodeURI(e);fetch("https://ambserver.herokuapp.com/reflinks/"+l,{method:"PATCH",body:JSON.stringify(a),headers:{"Content-type":"application/json"}}).then((function(e){return console.log("Request success: ",e),fetch("https://ambserver.herokuapp.com/reflinks")})).then((function(e){return e.json()})).then((function(e){var t=[];e.forEach((function(e){t.push({name:e.name,clickNum:e.clickNum,id:e._id})})),console.log(t),n.setState({referralLinks:n.sortByClicks(t)})})).catch((function(e){console.log("Request failure: ",e)}))}},{key:"editListItem",value:function(e,t){var n=this;if(this.state.editName){if(e===this.state.editName){var a,l=this.state.nameTerm;Number(this.state.clickTerm)&&(a=this.state.clickTerm);var r={name:l,clickNum:a},i=encodeURI(e);fetch("https://ambserver.herokuapp.com/reflinks/"+i,{method:"PATCH",body:JSON.stringify(r),headers:{"Content-type":"application/json"}}).then((function(e){return console.log("Request success: ",e),fetch("https://ambserver.herokuapp.com/reflinks")})).then((function(e){return e.json()})).then((function(e){var t=[];e.forEach((function(e){t.push({name:e.name,clickNum:e.clickNum,id:e._id})})),console.log(t),n.setState({referralLinks:n.sortByClicks(t),edit:!1,editName:""})})).catch((function(e){console.log("Request failure: ",e)}))}}else this.setState({editName:e,nameTerm:e,clickTerm:t})}},{key:"deleteLink",value:function(e){var t=this,n=encodeURI(e);console.log(n),fetch("https://ambserver.herokuapp.com/reflinks/"+n,{method:"delete",headers:{"Content-type":"application/json"}}).then((function(e){return console.log("Request success: ",e),fetch("https://ambserver.herokuapp.com/reflinks")})).then((function(e){return e.json()})).then((function(e){var n=[];e.forEach((function(e){n.push({name:e.name,clickNum:e.clickNum,id:e._id})})),console.log(n),t.setState({referralLinks:t.sortByClicks(n)})})).catch((function(e){console.log("Request failure: ",e)}))}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/"},l.a.createElement(f,{onSubmit:this.onSubmit,term:this.state.term,handleChange:this.handleChange,referralLinks:this.state.referralLinks,handleLinkClick:this.handleLinkClick,editListItem:this.editListItem,deleteLink:this.deleteLink,editName:this.state.editName,handleChangeLink:this.handleChangeLink,nameTerm:this.state.nameTerm,handleChangeClick:this.handleChangeClick,clickTerm:this.state.clickTerm})),l.a.createElement(k.a,{path:"/"+this.state.currentName},l.a.createElement(g,{currentName:this.state.currentName,resetCurrentName:this.resetCurrentName}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.0dd88026.chunk.js.map