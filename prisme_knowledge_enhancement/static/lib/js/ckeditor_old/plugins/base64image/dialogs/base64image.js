﻿CKEDITOR.dialog.add("base64imageDialog",function(n){function q(b){if("string"!=typeof b||!b)e.getElement().setHtml("");else{var f=new Image;e.getElement().setHtml(d.loading);f.onload=function(){e.getElement().setHtml("");null==i||null==h?(c.setValueOf("tab-properties","width",this.width),c.setValueOf("tab-properties","height",this.height),j=1,0<this.height&&0<this.width&&(j=this.width/this.height),0>=j&&(j=1)):h=i=null;this.id="previewimage";this.setAttribute("style","max-width:400px;max-height:100px;");
this.setAttribute("alt","");try{var b=e.getElement().$;b&&b.appendChild(this)}catch(f){}};f.onerror=function(){e.getElement().setHtml("")};f.onabort=function(){e.getElement().setHtml("")};f.src=b}}function o(b){e.getElement().setHtml("");if("base64"==b)l&&l.setValue(!1,!0),m&&m.setValue(!1,!0);else if("url"==b)l&&l.setValue(!0,!0),m&&m.setValue(!1,!0),r&&q(r.getValue());else if(s){l&&l.setValue(!1,!0);m&&m.setValue(!0,!0);var f=c.getContentElement("tab-source","file"),b=null;try{b=f.getInputElement().$}catch(a){b=
null}if(b&&("files"in b&&b.files&&0<b.files.length&&b.files[0])&&(!("type"in b.files[0])||b.files[0].type.match("image.*"))&&FileReader)e.getElement().setHtml(d.loading),f=new FileReader,f.onload=function(){return function(b){e.getElement().setHtml("");q(b.target.result)}}(b.files[0]),f.onerror=function(){e.getElement().setHtml("")},f.onabort=function(){e.getElement().setHtml("")},f.readAsDataURL(b.files[0])}}function t(b){var f=c.getContentElement("tab-properties","width").getValue(),a=c.getContentElement("tab-properties",
"height").getValue(),d="px",g="px";0<=f.indexOf("%")&&(d="%");0<=a.indexOf("%")&&(g="%");f=parseInt(f,10);a=parseInt(a,10);isNaN(f)&&(f=0);isNaN(a)&&(a=0);var e="px";"width"==b?("%"==d&&(e="%"),a=Math.round(f/j)):("%"==g&&(e="%"),f=Math.round(a*j));"%"==e&&(f+="%",a+="%");c.getContentElement("tab-properties","width").setValue(f);c.getContentElement("tab-properties","height").setValue(a)}function u(b){var a=b.getValue(),c="";0<=a.indexOf("%")&&(c="%");a=parseInt(a,10);isNaN(a)&&(a=0);b.setValue(a+
c)}var c=null,a=null,d=n.lang.base64image,i=null,h=null,e=null,l=null,r=null,m=null,j=1,p=!0,s=function(){var a=!1,c=null;try{FileReader&&(c=document.createElement("input"))&&"files"in c&&(a=!0)}catch(d){a=!1}return a}(),v=s?[{type:"hbox",widths:["70px"],children:[{type:"checkbox",id:"urlcheckbox",style:"margin-top:5px",label:d.url+":"},{type:"text",id:"url",label:"",onChange:function(){o("url")}}]},{type:"hbox",widths:["70px"],children:[{type:"checkbox",id:"filecheckbox",style:"margin-top:5px",label:d.file+
":"},{type:"file",id:"file",label:"",onChange:function(){o("file")}}]},{type:"html",id:"preview",html:(new CKEDITOR.template('<div style="text-align:center;"></div>')).output()}]:[{type:"text",id:"url",label:d.url,onChange:function(){o("url")}},{type:"html",id:"preview",html:(new CKEDITOR.template('<div style="text-align:center;"></div>')).output()}];return{title:d.title,minWidth:450,minHeight:180,onLoad:function(){s&&(l=this.getContentElement("tab-source","urlcheckbox"),m=this.getContentElement("tab-source",
"filecheckbox"),l.getInputElement().on("click",function(){o("url")}),m.getInputElement().on("click",function(){o("file")}));r=this.getContentElement("tab-source","url");e=this.getContentElement("tab-source","preview");this.getContentElement("tab-properties","lock").getInputElement().on("click",function(){(p=this.getValue()?true:false)&&t("width")},this.getContentElement("tab-properties","lock"));this.getContentElement("tab-properties","width").getInputElement().on("keyup",function(){p&&t("width")});
this.getContentElement("tab-properties","height").getInputElement().on("keyup",function(){p&&t("height")});this.getContentElement("tab-properties","vmargin").getInputElement().on("keyup",function(){u(this)},this.getContentElement("tab-properties","vmargin"));this.getContentElement("tab-properties","hmargin").getInputElement().on("keyup",function(){u(this)},this.getContentElement("tab-properties","hmargin"));this.getContentElement("tab-properties","border").getInputElement().on("keyup",function(){u(this)},
this.getContentElement("tab-properties","border"))},onShow:function(){e.getElement().setHtml("");c=this;h=i=null;j=1;p=!0;a=n.getSelection().getSelectedElement();if(!a||"img"!==a.getName())a=null;c.setValueOf("tab-properties","lock",p);c.setValueOf("tab-properties","vmargin","0");c.setValueOf("tab-properties","hmargin","0");c.setValueOf("tab-properties","border","0");c.setValueOf("tab-properties","align","none");if(a){"string"==typeof a.getAttribute("width")&&(i=a.getAttribute("width"));"string"==
typeof a.getAttribute("height")&&(h=a.getAttribute("height"));if((null==i||null==h)&&a.$)i=a.$.width,h=a.$.height;null!=i&&null!=h&&(c.setValueOf("tab-properties","width",i),c.setValueOf("tab-properties","height",h),i=parseInt(i,10),h=parseInt(h,10),j=1,!isNaN(i)&&(!isNaN(h)&&0<h&&0<i)&&(j=i/h),0>=j&&(j=1));"string"==typeof a.getAttribute("src")&&(0===a.getAttribute("src").indexOf("data:")?(o("base64"),q(a.getAttribute("src"))):c.setValueOf("tab-source","url",a.getAttribute("src")));"string"==typeof a.getAttribute("alt")&&
c.setValueOf("tab-properties","alt",a.getAttribute("alt"));"string"==typeof a.getAttribute("hspace")&&c.setValueOf("tab-properties","hmargin",a.getAttribute("hspace"));"string"==typeof a.getAttribute("vspace")&&c.setValueOf("tab-properties","vmargin",a.getAttribute("vspace"));"string"==typeof a.getAttribute("border")&&c.setValueOf("tab-properties","border",a.getAttribute("border"));if("string"==typeof a.getAttribute("align"))switch(a.getAttribute("align")){case "top":case "text-top":c.setValueOf("tab-properties",
"align","top");break;case "baseline":case "bottom":case "text-bottom":c.setValueOf("tab-properties","align","bottom");break;case "left":c.setValueOf("tab-properties","align","left");break;case "right":c.setValueOf("tab-properties","align","right")}c.selectPage("tab-properties")}},onOk:function(){var b="";try{b=CKEDITOR.document.getById("previewimage").$.src}catch(d){b=""}if(!("string"!=typeof b||null==b||""===b)){var e=a?a:n.document.createElement("img");e.setAttribute("src",b);e.setAttribute("alt",
c.getValueOf("tab-properties","alt").replace(/^\s+/,"").replace(/\s+$/,""));var b={width:["width","width:#;","integer",1],height:["height","height:#;","integer",1],vmargin:["vspace","margin-top:#;margin-bottom:#;","integer",0],hmargin:["hspace","margin-left:#;margin-right:#;","integer",0],align:["align",""],border:["border","border:# solid black;","integer",0]},i=[],g,h,j,k;for(k in b){h=j=g=c.getValueOf("tab-properties",k);unit="px";if("align"==k)switch(g){case "top":case "bottom":b[k][1]="vertical-align:#;";
break;case "left":case "right":b[k][1]="float:#;";break;default:g=null}"integer"==b[k][2]&&(0<=g.indexOf("%")&&(unit="%"),g=parseInt(g,10),isNaN(g)?g=null:g<b[k][3]&&(g=null),null!=g&&("%"==unit?(j=g+"%",h=g+"%"):(j=g,h=g+"px")));null!=g&&(e.setAttribute(b[k][0],j),i.push(b[k][1].replace(/#/g,h)))}0<i.length&&e.setAttribute("style",i.join(""));a||n.insertElement(e);n.plugins.imageresize&&n.plugins.imageresize.resize(n,e,800,800)}},contents:[{id:"tab-source",label:d.tabsource,elements:v},{id:"tab-properties",
label:d.tabprop,elements:[{type:"text",id:"alt",label:d.alt},{type:"hbox",widths:["15%","15%","70%"],children:[{type:"text",width:"45px",id:"width",label:d.width},{type:"text",width:"45px",id:"height",label:d.height},{type:"checkbox",id:"lock",label:d.lock,style:"margin-top:18px;"}]},{type:"hbox",widths:["23%","30%","30%","17%"],style:"margin-top:10px;",children:[{type:"select",id:"align",label:d.align,items:[[d.alignnone,"none"],[d.aligntop,"top"],[d.alignbottom,"bottom"],[d.alignleft,"left"],[d.alignright,
"right"]]},{type:"text",width:"45px",id:"vmargin",label:d.vmargin},{type:"text",width:"45px",id:"hmargin",label:d.hmargin},{type:"text",width:"45px",id:"border",label:d.border}]}]}]}});