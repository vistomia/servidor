"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[219],{9219:function(t,o,e){e.r(o),e.d(o,{default:function(){return v}});var s=e(6768);function n(t,o,e,n,l,a){const c=(0,s.g2)("AppConsole");return(0,s.uX)(),(0,s.Wv)(c)}var l=e(4232),a=e(5130);const c={class:"console"},r={class:"console-window container"},i={class:"container"};function m(t,o,e,n,m,h){return(0,s.uX)(),(0,s.CE)("div",c,[o[5]||(o[5]=(0,s.Lk)("div",{class:"console-title container"},[(0,s.Lk)("span",null,"Console")],-1)),(0,s.Lk)("div",r,[(0,s.Lk)("div",{id:"data-container",class:"font-monospace scrollable-div",onWheel:o[0]||(o[0]=(...t)=>h.alo&&h.alo(...t))},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(m.logs,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.timestamp},[(0,s.Lk)("span",null,(0,l.v_)(t.message),1)])))),128))],32),(0,s.Lk)("div",i,[o[3]||(o[3]=(0,s.Lk)("span",null,"/",-1)),o[4]||(o[4]=(0,s.eW)()),(0,s.bo)((0,s.Lk)("input",{onKeydown:o[1]||(o[1]=(...t)=>h.keyListener&&h.keyListener(...t)),"onUpdate:modelValue":o[2]||(o[2]=t=>m.command=t),id:"command",type:"text",ref:"commandInput"},null,544),[[a.Jo,m.command]])])])])}e(4114),e(8992),e(7550);const h="http://localhost:3000/api";var u={data(){return{command:"",logs:[],buffer:[],autoScroll:!0}},mounted(){this.$nextTick((()=>{this.$refs.commandInput.focus()})),this.getLogs(),setInterval((()=>this.displayData()),1e3)},methods:{alo(t){console.log(t.currentTarget.scrollHeight-t.currentTarget.clientHeight,t.currentTarget.scrollTop),this.autoScroll=t.deltaY>0&&t.currentTarget.scrollTop===t.currentTarget.scrollHeight-t.currentTarget.clientHeight},keyListener(t){"Enter"===t.key&&(this.logs.push({message:this.command,timestamp:Date.now()}),this.scrollToBottom(),fetch(h+"/stdin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:this.command})}).then((t=>t.json())).then((t=>{console.log(t)})),this.command="")},postCommand(){console.log("Command: "+this.command)},getLogs(){fetch(h+"/stdout").then((t=>t.json())).then((t=>{this.buffer=t.logs}))},async displayData(){await this.getLogs();let t=this.buffer;for(let o=0;o<t.length;o++)this.logs.some((e=>e.message===t[o]))||(this.logs.push({message:t[o],timestamp:Date.now()}),this.logs.length>100&&this.logs.shift());this.autoScroll&&this.scrollToBottom()},scrollToBottom(){const t=this.$el.querySelector("#data-container");t.scrollTop=t.scrollHeight}}},d=e(1241);const p=(0,d.A)(u,[["render",m]]);var g=p,f={name:"ConsoleView",components:{AppConsole:g}};const k=(0,d.A)(f,[["render",n]]);var v=k}}]);
//# sourceMappingURL=219.7027432a.js.map