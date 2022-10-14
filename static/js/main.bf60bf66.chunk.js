(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(16),n(1)),l=[{id:0,title:"Sequence 1",noteCount:32,trackList:[{title:"START_SHADER 1",soundFile:"0x5",onNotes:[]},{title:"SPAWN_SHROOM",soundFile:"4x7",onNotes:[]},{title:"MESH_SMALL_PULSE",soundFile:"5x4",onNotes:[]},{title:"MESH_BIG_PULSE",soundFile:"4x4",onNotes:[]}]}],s={"0x5":"0x5","4x7":"4x7","5x4":"5x4","4x4":"4x4"},u=n(3),_=n(2),d=Object(a.createContext)({sequence:{},toggleNote:function(){},selectSequence:function(){}}),f=function(e,t){switch(t.type){case"SET_SEQUENCE":return Object(_.a)({},l.find(function(e){return e.id===t.value}));case"SET_ON_NOTES":var n=e.trackList.map(function(e,n){return t.trackID===n?Object(_.a)(Object(_.a)({},e),{},{onNotes:t.value}):e});return Object(_.a)(Object(_.a)({},e),{},{trackList:n});default:return e}},h=function(e){var t=e.children,n=Object(a.useReducer)(f,Object(_.a)({},l[0])),i=Object(c.a)(n,2),r=i[0],s=i[1];return o.a.createElement(d.Provider,{value:{sequence:r,toggleNote:function(e){var t,n=e.trackID,a=e.stepID,o=r.trackList[n].onNotes;t=-1===o.indexOf(a)?[].concat(Object(u.a)(o),[a]):o.filter(function(e){return e!==a}),s({type:"SET_ON_NOTES",value:t,trackID:n})},selectSequence:function(e){s({type:"SET_SEQUENCE",value:e})}}},t)},m=(n(17),Object(a.memo)(function(e){var t=e.setStartTime,n=e.setPastLapse,i=e.setBPM,r=e.isSequencePlaying,c=e.startTime,s=e.BPM,u=Object(a.useContext)(d),_=u.sequence.id,f=u.selectSequence;return o.a.createElement("nav",{className:"toolbar"},o.a.createElement("button",{className:"form_element button_stop",onClick:function(){n(0),t(null)},"aria-label":"Stop"},o.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14"},o.a.createElement("rect",{className:"button_icon_path",x:"2",y:"2",width:"10",height:"10"}))),o.a.createElement("button",{className:"form_element button_play_pause",onClick:function(){r?(n(function(e){return e+performance.now()-c}),t(null)):t(performance.now())},"aria-label":"Play / Pause"},o.a.createElement("svg",{width:"14",height:"14",viewBox:"8 8 20 20"},r&&o.a.createElement("path",{className:"button_icon_path",id:"pause-icon","data-state":"playing",d:"M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26"}),!r&&o.a.createElement("path",{className:"button_icon_path",id:"play-icon","data-state":"paused",d:"M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"}))),o.a.createElement("input",{className:"form_element input_bpm",id:"bpm",type:"text",value:s,onChange:function(e){i(e.target.value)}}),o.a.createElement("label",{className:"label_bpm",htmlFor:"bpm"},"BPM"),o.a.createElement("select",{className:"form_element select_sequence",value:_,onChange:function(e){return f(+e.target.value)},"aria-label":"Select sequence"},l.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.title)})))})),p=(n(18),function(e){var t=e.count,n=void 0===t?0:t,a=Object(u.a)(Array(n)).map(function(e,t){return o.a.createElement("div",{className:"step",key:t+1},t+1)});return o.a.createElement("div",{className:"steps"},a)}),b=n(8),g=n(9),v=function(){function e(t){Object(b.a)(this,e);var n=!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter,a=window.AudioContext||window.webkitAudioContext||window.MozAudioContext;this.audioContext=new a,n&&(this.isSafariFixed=!1,this.boundSafariFix=this.safariFix.bind(this),window.addEventListener("click",this.boundSafariFix,!1)),this.loadSound(t)}return Object(g.a)(e,[{key:"safariFix",value:function(){if(this.isSafariFixed)window.removeEventListener("click",this.boundSafariFix,!1);else{var e=this.audioContext.createBuffer(1,1,22050),t=this.audioContext.createBufferSource();t.buffer=e,t.connect(this.audioContext.destination),t.start(0),this.isSafariFixed=!0}}},{key:"loadSound",value:function(e){console.log("Load sound",e),this.recorderNode=this.audioContext.createGain(),this.recorderNode.gain.value=1,this.buffer=null,this.path=e}},{key:"decodeAudioDataAsync",value:function(e,t){return new Promise(function(n,a){e.decodeAudioData(t,function(e){return n(e)},function(e){return a(e)})})}},{key:"play",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];try {console.log("INLINE_HOOK", this.path); vl_sendMidiMatrixEvent(this.path)} catch (ex) {console.error(ex)}}}]),e}(),w=function(e){var t=Object(a.useState)({play:function(){}}),n=Object(c.a)(t,2),o=n[0],i=n[1],r=Object(a.useCallback)(function(){return o.play()},[o]);return Object(a.useEffect)(function(){i(new v(e))},[e]),[r]},x=n(10),E=n.n(x),y=(n(19),Object(a.memo)(function(e){var t=e.trackID,n=e.stepID,i=e.isNoteOn,r=e.isNoteOnCurrentStep,c=e.play,l=Object(a.useContext)(d).toggleNote,s=E()("note",{on:i,playing:i&&r});Object(a.useEffect)(function(){i&&r&&c()},[i,r,c]);return o.a.createElement("div",{className:s,onClick:function(e){e.target.classList.toggle("on"),l({trackID:t,stepID:n})}})})),O=(n(20),Object(a.memo)(function(e){var t=e.trackID,n=e.currentStepID,a=e.title,i=e.noteCount,r=e.onNotes,l=e.soundFilePath,s=w(l),_=Object(c.a)(s,1)[0],d=Object(u.a)(Array(i)).map(function(e,a){var i=-1!==r.indexOf(a),c=n===a,l=a;return o.a.createElement(y,{key:a,trackID:t,stepID:l,isNoteOn:i,isNoteOnCurrentStep:c,play:_})});return o.a.createElement("div",{className:"track"},o.a.createElement("header",{className:"track_title"},a),o.a.createElement("main",{className:"track_notes"},d))})),k=Object(a.memo)(function(e){var t=e.currentStepID,n=Object(a.useContext)(d).sequence,i=n.trackList,r=n.noteCount,c=i.map(function(e,n){var a=e.title,i=e.onNotes,c=e.soundFile,l=s[c];return o.a.createElement(O,{key:a,trackID:+n,currentStepID:t,title:a,noteCount:r,onNotes:i,soundFilePath:l})});return o.a.createElement("div",{className:"track-list"},c)}),S=(n(21),Object(a.memo)(function(e){var t=e.notesAreaWidthInPixels,n=e.timePerSequence,i=e.totalLapsedTime,r=Object(a.useRef)(null);return Object(a.useLayoutEffect)(function(){var e=Math.min(i%n/n,1);r.current.style.transform="translate3d("+(e*t).toFixed(2)+"px, 0, 0px)"},[t,n,i]),o.a.createElement("div",{className:"play_head",ref:r})})),N=function(e){var t=Object(a.useState)(null),n=Object(c.a)(t,2),o=n[0],i=n[1];return Object(a.useLayoutEffect)(function(){if(e){var t=requestAnimationFrame(function(){return i(performance.now())});return function(){return cancelAnimationFrame(t)}}},[e,o]),e?o:null},j={__app_visibility:"visible",__color_bg:"#505050",__color_fg:"#f5f5f5",__color_black:"#000",__color_dark_grey:"#2e2e2e",__color_light_grey:"#5d5d5d",__color_highlight:"#37e147",__base_font_size:12,__number_of_steps:32,__number_of_tracks:4,__grid_unit:2,__play_head_width:2,__form_element_height:30,__input_bpm_width:45,__step_height:32,__track_title_width:120,__note_width:32,__note_height:49,__note_border_size:1,__note_margin_vert:5,__note_margin_horz:4},C=j.__note_width+2*j.__note_margin_horz,L=j.__note_height+2*j.__note_margin_vert,P=function(e){return C*e-j.__play_head_width/2},A=function(e,t){return document.documentElement.style.setProperty(e,t)},I=function(e){return Object(a.useEffect)(function(){!function(e){j.__number_of_steps=e,A("--app-visibility",j.__app_visibility),A("--color-bg",j.__color_bg),A("--color-fg",j.__color_fg),A("--color-black",j.__color_black),A("--color-dark-grey",j.__color_dark_grey),A("--color-light-grey",j.__color_light_grey),A("--color-highlight",j.__color_highlight),A("--base-font-size",j.__base_font_size+"px"),A("--number-of-steps",j.__number_of_steps),A("--play-head-width",j.__play_head_width+"px"),A("--play-head-height",L*j.__number_of_tracks-2*j.__note_margin_vert+"px"),A("--spacer",5*j.__grid_unit+"px"),A("--form-element-height",j.__form_element_height+"px"),A("--button-pause-play-width",j.__form_element_height+"px"),A("--input-bpm-width",j.__input_bpm_width+"px"),A("--step-height",j.__step_height+"px"),A("--track-title-width",j.__track_title_width+"px"),A("--note-border-size",j.__note_border_size+"px"),A("--note-width",j.__note_width+"px"),A("--note-height",j.__note_height+"px"),A("--note-margin-vert",j.__note_margin_vert+"px"),A("--note-margin-horz",j.__note_margin_horz+"px"),A("--note-width-full",C+"px"),A("--left-gutter-size",j.__track_title_width+5*j.__grid_unit*2+"px"),A("--all-note-widths",C*j.__number_of_steps+"px"),A("--app-max-width",j.__track_title_width+5*j.__grid_unit*2+(j.__note_width+2*j.__note_margin_horz)*j.__number_of_steps+"px")}(e)},[e]),[P]};n(22);var F=function(){var e=Object(a.useState)(120),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(null),l=Object(c.a)(r,2),s=l[0],u=l[1],_=Object(a.useState)(0),d=Object(c.a)(_,2),f=d[0],b=d[1],g=Object(a.useState)(null),v=Object(c.a)(g,2),w=v[0],x=v[1],E=I(16),y=(0,Object(c.a)(E,1)[0])(16),O=60/n*1e3*8,j=O/16,C=null!==s,L=N(C),P=f+(C?Math.max(0,L-s):0);Object(a.useEffect)(function(){x(C?Math.floor(P/j)%16:null)},[C,j,P,16]);var A={setStartTime:u,setPastLapse:b,setBPM:i,isSequencePlaying:C,startTime:s,BPM:n},F={notesAreaWidthInPixels:y,timePerSequence:O,totalLapsedTime:P},D={currentStepID:w};return o.a.createElement(h,null,o.a.createElement("main",{className:"app"},o.a.createElement("header",{className:"app_header"},o.a.createElement(m,A)),o.a.createElement(p,{count:16}),o.a.createElement("div",{className:"app_content"},o.a.createElement(S,F),o.a.createElement(k,D))))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");D?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):M(t,e)})}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.bf60bf66.chunk.js.map