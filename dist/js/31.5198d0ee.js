"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[31],{31:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var s=n(6768);function o(e,t,n,o,r,p){const i=(0,s.g2)("AppOptions");return(0,s.uX)(),(0,s.Wv)(i)}var r=n(5130);const p={class:"console"},i={class:"properties-window container"},a={class:"container alo"};function l(e,t,n,o,l,c){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",p,[t[2]||(t[2]=(0,s.Lk)("div",{class:"console-title container"},[(0,s.Lk)("span",null,"Properties")],-1)),(0,s.Lk)("div",i,[(0,s.bo)((0,s.Lk)("textarea",{name:"properties","onUpdate:modelValue":t[0]||(t[0]=t=>e.properties=t),id:"properties",spellcheck:"false"},null,512),[[r.Jo,e.properties]])])]),(0,s.Lk)("div",a,[t[3]||(t[3]=(0,s.Lk)("br",null,null,-1)),(0,s.Lk)("button",{class:"btn btn-save",onClick:t[1]||(t[1]=(...e)=>c.OnClick&&c.OnClick(...e))},"save")])],64)}const c="http://localhost:3000/api";var u={data:()=>({properties:""}),created(){this.getProperties()},methods:{OnClick(){this.postProperties({data:this.properties})},getProperties(){fetch(c+"/properties").then((e=>e.json())).then((e=>{this.properties=e.data}))},postProperties(e){fetch(c+"/properties",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e)}))}}},d=n(1241);const h=(0,d.A)(u,[["render",l]]);var k=h,v={name:"OptionsView",components:{AppOptions:k}};const f=(0,d.A)(v,[["render",o]]);var b=f}}]);
//# sourceMappingURL=31.5198d0ee.js.map