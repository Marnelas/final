(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),l=a.n(s),c=(a(67),a(2)),o=a(6),i=a(4),m=a(3),u=a(5),h=(a(68),a(27)),d=a.n(h),g=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a,n,r){return t.service.post("/signup",{username:e,password:a,email:n,imageUrl:r}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{email:e,password:a}).then(function(e){return e.data}).catch(function(e){return console.log({err:e})})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.twitch=function(){return t.service.get("/twitch")},this.handleUpload=function(e){return t.service.post("/upload",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.service=d.a.create({baseURL:"".concat("https://game-next.herokuapp.com/","auth"),withCredentials:!0})},v=a(20),p=a(19),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.services.login(n,r).then(function(e){a.setState({email:"",password:""}),a.props.setTheUser(e)}).catch(function(e){return console.log(e.response.data.message)})},a.state={email:"",password:""},a.services=new g,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container twitch-login"},r.a.createElement("h1",null,"Iniciar sesi\xf3n"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.email,type:"email",className:"form-control",id:"email",name:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.password,type:"password",className:"form-control",id:"password",name:"password"})),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"\xa1Acceder")))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(p.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,s=t.email,l=t.imageUrl;a.services.signup(n,r,s,l).then(function(e){a.setState({username:"",password:"",email:"",imageUrl:""}),a.props.setTheUser(e)}).catch(function(e){return console.log({error:e})})},a.handleFileUpload=function(e){var t=new FormData;t.append("imageUrl",e.target.files[0]),a.services.handleUpload(t).then(function(e){a.setState({imageUrl:e.secure_url}),alert("imagen subida")}).catch(function(e){return console.log(e)})},a.state={username:"",password:"",email:"",imageUrl:""},a.services=new g,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container "},r.a.createElement("h1",{className:"signup-title"},"Registrarse"),r.a.createElement("form",{className:"signup",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("label",{htmlFor:"username"},"Usuario"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.username,type:"text",className:"form-control",id:"username",name:"username"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.password,type:"password",className:"form-control",id:"password",required:!0,name:"password"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{onChange:this.handleChange,value:this.state.email,type:"email",className:"form-control",id:"email",name:"email",required:!0})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("label",{htmlFor:"imageUrl"},"URL imagen"),r.a.createElement("input",{onChange:this.handleFileUpload,type:"file",className:"form-control",id:"imageUrl",name:"imageUrl"}))),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Enviar")))}}]),t}(n.Component),b=a(8),S=a(22),N=a.n(S),j=a(9),U=a.n(j),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).logout=function(){a.service.logout().then(function(e){return a.props.setTheUser(null)})},a.service=new g,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.userInSession?r.a.createElement(N.a,{expand:"md",bg:"dark",variant:"dark",className:"justify-content-end navigation"},r.a.createElement(N.a.Toggle,null),r.a.createElement(N.a.Collapse,{className:"justify-content-end navigation"},r.a.createElement(U.a,null,r.a.createElement(U.a.Item,null,r.a.createElement(U.a.Link,{as:"div"},r.a.createElement(b.b,{to:"/profile"},"su perfil"))),r.a.createElement(U.a.Item,null,r.a.createElement(U.a.Link,{as:"div"},r.a.createElement(b.b,{to:"/ranking"},"Ranking"))),r.a.createElement(U.a.Item,null,r.a.createElement(U.a.Link,{as:"div"},r.a.createElement(b.b,{to:"/"},"Inicio"))),r.a.createElement(U.a.Item,null,r.a.createElement(U.a.Link,{as:"div"},r.a.createElement("div",{onClick:this.logout},"Cerrar sesi\xf3n")))))):r.a.createElement(N.a,{expand:"md",bg:"dark",variant:"dark",className:"justify-content-end navigation"},r.a.createElement(N.a.Toggle,null),r.a.createElement(N.a.Collapse,{className:"justify-content-end"},r.a.createElement(U.a,null,r.a.createElement(U.a.Item,{className:"login"},r.a.createElement(U.a.Link,{as:"div"},r.a.createElement(b.b,{to:"/login"},"Iniciar sesi\xf3n"))),r.a.createElement(U.a.Item,{className:"signUp"},r.a.createElement(U.a.Link,{as:"div"},r.a.createElement(b.b,{to:"/signup"},"Registrarse"))))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).getChannel=function(t){return e.service.get("/channel/".concat(t)).then(function(e){return e.data})},e.getStream=function(){return e.service.get("/list").then(function(e){return e.data})},e.searchPeople=function(t){return e.service.get("/search/".concat(t)).then(function(e){return e.data})},e.VoteStream=function(t,a,n){var r={vote:t,streamid:a,userid:n};return e.service.post("/vote",r).then(function(e){return e.data})},e.HasVoted=function(t,a){var n={streamid:t,userid:a};return e.service.post("/hasvoted",n).then(function(e){return e.data})},e.inStream=function(t){return console.log(t),e.service.get("/getStreaming/".concat(t)).then(function(e){return e.data})},e.showStream=function(){return e.service.get("/show").then(function(e){return e.data})},e.getInfo=function(t){return console.log(t,"jfaifjwogwajg"),e.service.get("/getinfo/".concat(t)).then(function(e){return e.data})},e.botCreate=function(t,a,n,r){return e.service.post("/bot",{username:t,message:a,channelUsername:n,command:r}).then(function(e){return e.data})},e.service=d.a.create({baseURL:"".concat("https://game-next.herokuapp.com/","stream"),withCredentials:!0}),e}return Object(u.a)(t,e),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({search:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.services.searchPeople(a.state.search).then(function(e){a.setState({saved:r.a.createElement("h3",null,"Se ha guardado el Streamer ",e.username)})}).catch(function(e){return console.log(e)})},a.services=new k,a.state={channel:{},isStreaming:null,search:"",saved:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.services.getChannel(this.props.match.params.id).then(function(t){return e.setState({channel:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"channel-detail"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Search:",r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"search",value:this.state.search})),r.a.createElement("button",null,"buscar")),this.state.saved,"          ",r.a.createElement("h2",null,"Informaci\xf3n adicional"),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col-md-4"},this.state.channel.description),r.a.createElement("p",{className:"col-md-4"},"tiene ",this.state.channel.followers," seguidores"),r.a.createElement("p",{className:"col-md-4"},"tipo de canal: ",this.state.channel.broadcaster_type)),r.a.createElement("div",{className:"banner"},r.a.createElement("h3",null,"banner del canal"),r.a.createElement("img",{src:this.state.channel.profile_banner,alt:this.state.channel.name})),r.a.createElement("div",{className:"row"},r.a.createElement("h3",null,"informaci\xf3n actual en tu streaming")),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"t\xedtulo actual: ",this.state.channel.status)),r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"Juego actual seleccionado: ",this.state.channel.game," ")),r.a.createElement("div",{className:"row"},r.a.createElement(b.b,{to:"/bot"},"link a la creaci\xf3n de bot"))))}}]),t}(n.Component),O=a(28),I=a.n(O),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleStream=function(e){console.log("entro"),a.services.inStream(e).then(function(e){if(e.stream){var t=e.stream,n=new Date(t.created_at);a.setState({isStreaming:{fps:t.average_fps,broadcast:t.broadcast_platform,game:t.game,quality:t.video_height,started:"el dia ".concat(n.toLocaleDateString()," en la hora ").concat(n.toLocaleTimeString())}})}else a.setState({isStreaming:{}})})},a.componentDidMount=function(){a.services.getStream().then(function(e){console.log("hola mama",e),a.setState({stream:e.data}),a.handleStream(e.data.id)})},a.services=new k,a.state={stream:[],vote:0,isStreaming:{},buttonState:!1,hateState:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.state.stream),r.a.createElement("div",null,r.a.createElement(I.a,{className:"carrousel"},this.state.stream.map(function(e){return r.a.createElement(I.a.Item,{key:e._id},r.a.createElement("img",{className:"d-block w-60 slideImg",src:e.logo,alt:"First slide"}),r.a.createElement(I.a.Caption,null,r.a.createElement("h3",{className:"StreamName"},"Stream de ",e.username,"  "),r.a.createElement("p",{className:"StreamDescription"},e.description)))})))}}]),t}(n.Component),D=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(y,null),r.a.createElement("hr",null),r.a.createElement("div",{className:"infos"},r.a.createElement("div",{className:"usuario"},r.a.createElement("h2",null,"Usuario"),r.a.createElement("p",null,"si te registras como usuario podras descubrir nuestro ranking de Streamers y poder disfrutar de un muy buen rato de risas y diversi\xf3n")),r.a.createElement("div",{className:"streamer"},r.a.createElement("h2",null,"Streamer"),r.a.createElement("p",null,"Como streamer al registrarte tendras acceso a promocionar tu canal a\xf1adiendolo al ranking ademas del acceso a la creaci\xf3n de un bot para tu canal"))))},x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){e.services.showStream().then(function(t){console.log(t);[].push(t.map(function(e){return new Date(e.created_at)})),e.setState({streams:t})})},e.state={streams:[]},e.services=new k,e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.streams,"-----------------------  "),console.log(this.props.loggedUser._id),r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.state.streams.map(function(t,a){return r.a.createElement("div",{key:t.id,className:"col-sm-4 stream"},r.a.createElement(b.b,{className:"StreamLink",to:"/ranking/streamDetails/".concat(t.id,"?userId=").concat(e.props.loggedUser._id)},r.a.createElement("img",{src:t.logo,alt:t.username}),r.a.createElement("p",null,"nombre del Streamer:",t.username),r.a.createElement("p",null,"con ",t.votes," votos a d\xeda de hoy")))}))))}}]),t}(n.Component),_=function(e){var t,a;return console.log(e),e.loggedUser.id?(t=r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:e.loggedUser.logo,alt:"streamer"})),a=r.a.createElement(b.b,{to:"/channel/".concat(e.loggedUser.id)},"info channel")):(a=r.a.createElement("h3",null,"Espero que disfrutes de tu estancia en nuestra aplicaci\xf3n"),t=r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:e.loggedUser.imageUrl,alt:"user"}))),r.a.createElement("div",{className:"row profile"},r.a.createElement(y,null),t,r.a.createElement("div",{className:"col-md-6 text"},r.a.createElement("h1",null,"Usuario conectado ",e.loggedUser.username),r.a.createElement("p",null,"con email ",e.loggedUser.email),a))},L=a(35),A=a(61),T=a.n(A),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handlebutton=function(e){e.preventDefault(),a.state.hateState&&(a.setState({hateState:!1}),a.service.VoteStream(1,a.state.voteInfo._id,a.state.query.userId).then(function(e){a.setState({voteInfo:e})})),a.state.buttonState&&(a.setState({buttonState:!1}),a.service.VoteStream(-1,a.state.voteInfo._id).then(function(e){console.log(e),a.setState({voteInfo:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.state.hateState&&a.setState({hateState:!1}),a.setState({buttonState:!0}),a.service.VoteStream(1,a.state.voteInfo._id,a.state.query.userId).then(function(e){console.log(e),a.setState({voteInfo:e})}).catch(function(e){return console.log(e)})},a.hateSubmit=function(e){a.state.buttonState&&a.setState({buttonState:!1}),e.preventDefault(),a.setState({hateState:!0}),a.service.VoteStream(-1,a.state.voteInfo._id,a.state.query.userId).then(function(e){a.setState({voteInfo:e})}).catch(function(e){return console.log(e)})},a.state={stream:{},AccountData:{},buttonState:!1,hateState:!1,voteInfo:{},voted:!1,query:""},a.service=new k,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({query:T.a.parse(this.props.location.search)}),this.service.inStream(this.props.match.params.id).then(function(t){if(null!=t.stream){var a=new Date(t.stream.created_at),n=Object(L.a)({},t.stream,{started:"el dia ".concat(a.toLocaleDateString()," en la hora ").concat(a.toLocaleTimeString())});e.setState({stream:n})}else e.setState({stream:t.stream})}),this.service.getInfo(this.props.match.params.id).then(function(t){e.setState({voteInfo:t[0]})}),this.service.getChannel(this.props.match.params.id).then(function(t){var a=new Date(t.created_at),n=Object(L.a)({},t,{started:"el dia ".concat(a.toLocaleDateString()," en la hora ").concat(a.toLocaleTimeString())});e.setState({AccountData:n})})}},{key:"render",value:function(){if(this.state.stream){var e={like:"like",hate:"hate",reverselike:"reverse",reversehate:"reverse"};return this.state.buttonState?(e.like="reverse",e.reverselike="disabled"):(e.like="like",e.reverselike="reverse"),this.state.hateState?(e.hate="reverse",e.reversehate="disabled"):(e.hate="hate",e.reversehate="reverse"),r.a.createElement("div",{className:"container infoStream"},r.a.createElement("h1",null,"Streaming de ",this.state.AccountData.name),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 infoImg"},r.a.createElement("img",{src:this.state.AccountData.logo,alt:this.state.stream.name})),r.a.createElement("div",{className:"col-md-6 "},r.a.createElement("h2",null,"actualmente jugando a ",this.state.stream.game),r.a.createElement("p",null,"ha empezado el directo ",this.state.stream.started),r.a.createElement("p",null,"su calidad utilizada es ",this.state.stream.average_fps," ","fps y ",this.state.stream.video_height,"p"),r.a.createElement("p",null,'lenguaje utilizado "',this.state.AccountData.language,'"'),this.state.voteInfo.votes?r.a.createElement("p",null,"este Streaming ha obtenido ya ",this.state.voteInfo.votes,"votos"):null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"si te gusta el streaming pulsa este bot\xf3n:",r.a.createElement("button",{type:"submit",className:e.like,disabled:this.state.buttonState},"I like it"),r.a.createElement("button",{onClick:this.handlebutton,className:e.reverselike},"don't hate"))),r.a.createElement("form",{onSubmit:this.hateSubmit},r.a.createElement("label",null,"si no te gusta el streaming pulsa este bot\xf3n:",r.a.createElement("button",{className:e.hate,disabled:this.state.hateState},"I hate it"),r.a.createElement("button",{onClick:this.handlebutton,className:e.reversehate},"don't hate"))))))}return r.a.createElement("div",{className:"container infoStream"},r.a.createElement("h1",null," Streamer ",this.state.AccountData.name," actualmente offline"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 infoImg"},r.a.createElement("img",{src:this.state.AccountData.logo,alt:this.state.AccountData.name})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h2",null,'Su ultimo Stream fue de "',this.state.AccountData.game,'" con t\xedtulo "',this.state.AccountData.status,'"'),r.a.createElement("p",null,"Lenguaje utilizado ",this.state.AccountData.broadcaster_language),r.a.createElement("p",null,"cre\xf3 el canal ",this.state.AccountData.started," "))))}}]),t}(n.Component),F=function(){return r.a.createElement("div",{className:"random"},r.a.createElement(y,null),r.a.createElement("h1",{className:"title-random"},"Bienvenido a la aplicaci\xf3n"),r.a.createElement("p",{className:"text-random"},"Aqu\xed arriba tienes un Streaming aleatorio, pero Clickando en ranking puedes ir a la lista"))},R=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){console.log(t.target);var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.message,s=a.channelUsername,l=a.command;e.services.botCreate(n,r,s,l).then(function(t){e.setState({username:"",message:"",channelUsername:"",command:""})}).catch(function(e){return console.log({error:e})})},e.state={username:"",message:"",channelUsername:"",command:""},e.services=new k,e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"bot-form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Nombre del Bot:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement("label",null,"mensaje que poner en el bot:"," ",r.a.createElement("input",{name:"message",type:"text",value:this.state.message,onChange:this.handleChange})),r.a.createElement("label",null,"Nombre de tu canal:"," ",r.a.createElement("input",{type:"text",name:"channelUsername",value:this.state.channelUsername,onChange:this.handleChange})),r.a.createElement("label",null,"Comando a colocar precedido de un !:"," ",r.a.createElement("input",{name:"command",type:"text",value:this.state.command,onChange:this.handleChange})," "),r.a.createElement("button",null,"guardar y crear")))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setUser=function(e){return a.setState({loggedInUser:e})},a.fetchUser=function(){null===a.state.loggedInUser&&a.services.loggedin().then(function(e){return a.setState({loggedInUser:e})}).catch(function(e){a.setState({loggedInUser:!1})})},a.setUser=function(e){return a.setState({loggedInUser:e})},a.state={loggedInUser:null,message:"",isDetailed:!0},a.services=new g,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app"},r.a.createElement(w,{userInSession:this.state.loggedInUser,setTheUser:this.setUser}),r.a.createElement("div",{className:"logged-in"},r.a.createElement("div",{className:"container"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/ranking/streamDetails/:id",component:q}),r.a.createElement(v.a,{path:"/profile",exact:!0,render:function(){return r.a.createElement(_,{loggedUser:e.state.loggedInUser})}}),r.a.createElement(v.a,{path:"/bot",exact:!0,component:R}),r.a.createElement(v.a,{path:"/ranking",exact:!0,component:function(){return r.a.createElement(x,{loggedUser:e.state.loggedInUser})}}),r.a.createElement(v.a,{path:"/",exact:!0,component:F}),r.a.createElement(v.a,{path:"/channel/:id",exact:!0,component:C})))))):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"logged-out "},r.a.createElement(w,{userInSession:this.state.loggedInUser,setTheUser:this.setUser}),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/signup",exact:!0,render:function(){return r.a.createElement(E,{setTheUser:e.setUser})}}),r.a.createElement(v.a,{path:"/login",exact:!0,render:function(){return r.a.createElement(f,{setTheUser:e.setUser})}}),r.a.createElement(v.a,{path:"/logout"}),r.a.createElement(v.a,{path:"/",exact:!0,component:D}))))}}]),t}(n.Component);l.a.render(r.a.createElement(b.a,null,r.a.createElement(V,null)),document.getElementById("root"))},62:function(e,t,a){e.exports=a(128)},67:function(e,t,a){},68:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.2e5b8750.chunk.js.map