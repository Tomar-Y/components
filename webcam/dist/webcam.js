!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("webcam",[],t):"object"==typeof exports?exports.webcam=t():e.webcam=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(a[i])return a[i].exports;var s=a[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),s=a.n(i),r={install:function(e){"undefined"!=typeof window&&window.Vue&&(e=window.Vue),e.prototype.$Webcam=s.a}};t.default=r},function(e,t,a){var i,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(r){function o(){var e=Error.apply(this,arguments);e.name=this.name="FlashError",this.stack=e.stack,this.message=e.message}function h(){var e=Error.apply(this,arguments);e.name=this.name="WebcamError",this.stack=e.stack,this.message=e.message}var l,c=function(){};c.prototype=Error.prototype,o.prototype=new c,h.prototype=new c;var d={version:"1.0.25",protocol:location.protocol.match(/https/i)?"https":"http",loaded:!1,live:!1,userMedia:!0,iOS:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!r.MSStream,params:{width:0,height:0,dest_width:0,dest_height:0,image_format:"jpeg",jpeg_quality:90,enable_flash:!0,force_flash:!1,flip_horiz:!1,fps:30,upload_name:"webcam",constraints:null,swfURL:"",flashNotDetectedText:"ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).",noInterfaceFoundText:"No supported webcam interface found.",unfreeze_snap:!0,iosPlaceholderText:"Click here to open camera.",user_callback:null,user_canvas:null},errors:{FlashError:o,WebcamError:h},hooks:{},init:function(){var e=this;this.mediaDevices=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices:navigator.mozGetUserMedia||navigator.webkitGetUserMedia?{getUserMedia:function(e){return new Promise(function(t,a){(navigator.mozGetUserMedia||navigator.webkitGetUserMedia).call(navigator,e,t,a)})}}:null,r.URL=r.URL||r.webkitURL||r.mozURL||r.msURL,this.userMedia=this.userMedia&&!!this.mediaDevices&&!!r.URL,this.iOS&&(this.userMedia=null),navigator.userAgent.match(/Firefox\D+(\d+)/)&&parseInt(RegExp.$1,10)<21&&(this.userMedia=null),this.userMedia&&r.addEventListener("beforeunload",function(t){e.reset()})},exifOrientation:function(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1))return console.log("Not a valid JPEG file"),0;for(var a=2;a<e.byteLength;){if(255!=t.getUint8(a))return console.log("Not a valid marker at offset "+a+", found: "+t.getUint8(a)),0;if(225==t.getUint8(a+1)){a+=4;var i="";for(n=0;n<4;n++)i+=String.fromCharCode(t.getUint8(a+n));if("Exif"!=i)return console.log("Not valid EXIF data found"),0;a+=6;var s=null;if(18761==t.getUint16(a))s=!1;else{if(19789!=t.getUint16(a))return console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),0;s=!0}if(42!=t.getUint16(a+2,!s))return console.log("Not valid TIFF data! (no 0x002A)"),0;var r=t.getUint32(a+4,!s);if(r<8)return console.log("Not valid TIFF data! (First offset less than 8)",t.getUint32(a+4,!s)),0;for(var o=a+r,h=t.getUint16(o,!s),l=0;l<h;l++){var c=o+12*l+2;if(274==t.getUint16(c,!s)){var d=t.getUint16(c+2,!s),p=t.getUint32(c+4,!s);if(3!=d&&1!=p)return console.log("Invalid EXIF orientation value type ("+d+") or count ("+p+")"),0;var m=t.getUint16(c+8,!s);return m<1||m>8?(console.log("Invalid EXIF orientation value ("+m+")"),0):m}}}else a+=2+t.getUint16(a+2)}return 0},fixOrientation:function(e,t,a){var i=new Image;i.addEventListener("load",function(e){var s=document.createElement("canvas"),r=s.getContext("2d");switch(t<5?(s.width=i.width,s.height=i.height):(s.width=i.height,s.height=i.width),t){case 2:r.transform(-1,0,0,1,i.width,0);break;case 3:r.transform(-1,0,0,-1,i.width,i.height);break;case 4:r.transform(1,0,0,-1,0,i.height);break;case 5:r.transform(0,1,1,0,0,0);break;case 6:r.transform(0,1,-1,0,i.height,0);break;case 7:r.transform(0,-1,-1,0,i.height,i.width);break;case 8:r.transform(0,-1,1,0,0,i.width)}r.drawImage(i,0,0),a.src=s.toDataURL()},!1),i.src=e},attach:function(e){if("string"==typeof e&&(e=document.getElementById(e)||document.querySelector(e)),!e)return this.dispatch("error",new h("Could not locate DOM element to attach to."));this.container=e,e.innerHTML="";var t=document.createElement("div");if(e.appendChild(t),this.peg=t,this.params.width||(this.params.width=e.offsetWidth),this.params.height||(this.params.height=e.offsetHeight),!this.params.width||!this.params.height)return this.dispatch("error",new h("No width and/or height for webcam.  Please call set() first, or attach to a visible element."));this.params.dest_width||(this.params.dest_width=this.params.width),this.params.dest_height||(this.params.dest_height=this.params.height),this.userMedia=void 0===l?this.userMedia:l,this.params.force_flash&&(l=this.userMedia,this.userMedia=null),"number"!=typeof this.params.fps&&(this.params.fps=30);var a=this.params.width/this.params.dest_width,i=this.params.height/this.params.dest_height;if(this.userMedia){var s=document.createElement("video");s.setAttribute("autoplay","autoplay"),s.style.width=this.params.dest_width+"px",s.style.height=this.params.dest_height+"px",1==a&&1==i||(e.style.overflow="hidden",s.style.webkitTransformOrigin="0px 0px",s.style.mozTransformOrigin="0px 0px",s.style.msTransformOrigin="0px 0px",s.style.oTransformOrigin="0px 0px",s.style.transformOrigin="0px 0px",s.style.webkitTransform="scaleX("+a+") scaleY("+i+")",s.style.mozTransform="scaleX("+a+") scaleY("+i+")",s.style.msTransform="scaleX("+a+") scaleY("+i+")",s.style.oTransform="scaleX("+a+") scaleY("+i+")",s.style.transform="scaleX("+a+") scaleY("+i+")"),e.appendChild(s),this.video=s;var o=this;this.mediaDevices.getUserMedia({audio:!1,video:this.params.constraints||{mandatory:{minWidth:this.params.dest_width,minHeight:this.params.dest_height}}}).then(function(e){s.onloadedmetadata=function(t){o.stream=e,o.loaded=!0,o.live=!0,o.dispatch("load"),o.dispatch("live"),o.flip()},"srcObject"in s?s.srcObject=e:s.src=r.URL.createObjectURL(e)}).catch(function(t){o.params.enable_flash&&o.detectFlash()?setTimeout(function(){o.params.force_flash=1,o.attach(e)},1):o.dispatch("error",t)})}else if(this.iOS){var n=document.createElement("div");n.id=this.container.id+"-ios_div",n.className="webcamjs-ios-placeholder",n.style.width=this.params.width+"px",n.style.height=this.params.height+"px",n.style.textAlign="center",n.style.display="table-cell",n.style.verticalAlign="middle",n.style.backgroundRepeat="no-repeat",n.style.backgroundSize="contain",n.style.backgroundPosition="center";var c=document.createElement("span");c.className="webcamjs-ios-text",c.innerHTML=this.params.iosPlaceholderText,n.appendChild(c);var p=document.createElement("img");p.id=this.container.id+"-ios_img",p.style.width=this.params.dest_width+"px",p.style.height=this.params.dest_height+"px",p.style.display="none",n.appendChild(p);var m=document.createElement("input");m.id=this.container.id+"-ios_input",m.setAttribute("type","file"),m.setAttribute("accept","image/*"),m.setAttribute("capture","camera");var o=this,f=this.params;m.addEventListener("change",function(e){if(e.target.files.length>0&&0==e.target.files[0].type.indexOf("image/")){var t=URL.createObjectURL(e.target.files[0]),a=new Image;a.addEventListener("load",function(e){var t=document.createElement("canvas");t.width=f.dest_width,t.height=f.dest_height;var i=t.getContext("2d");ratio=Math.min(a.width/f.dest_width,a.height/f.dest_height);var s=f.dest_width*ratio,r=f.dest_height*ratio,o=(a.width-s)/2,h=(a.height-r)/2;i.drawImage(a,o,h,s,r,0,0,f.dest_width,f.dest_height);var l=t.toDataURL();p.src=l,n.style.backgroundImage="url('"+l+"')"},!1);var i=new FileReader;i.addEventListener("load",function(e){var i=o.exifOrientation(e.target.result);i>1?o.fixOrientation(t,i,a):a.src=t},!1);var s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType="blob",s.onload=function(e){200!=this.status&&0!==this.status||i.readAsArrayBuffer(this.response)},s.send()}},!1),m.style.display="none",e.appendChild(m),n.addEventListener("click",function(e){f.user_callback?o.snap(f.user_callback,f.user_canvas):(m.style.display="block",m.focus(),m.click(),m.style.display="none")},!1),e.appendChild(n),this.loaded=!0,this.live=!0}else if(this.params.enable_flash&&this.detectFlash()){r.Webcam=d;var n=document.createElement("div");n.innerHTML=this.getSWFHTML(),e.appendChild(n)}else this.dispatch("error",new h(this.params.noInterfaceFoundText));if(this.params.crop_width&&this.params.crop_height){var u=Math.floor(this.params.crop_width*a),g=Math.floor(this.params.crop_height*i);e.style.width=u+"px",e.style.height=g+"px",e.style.overflow="hidden",e.scrollLeft=Math.floor(this.params.width/2-u/2),e.scrollTop=Math.floor(this.params.height/2-g/2)}else e.style.width=this.params.width+"px",e.style.height=this.params.height+"px"},reset:function(){if(this.preview_active&&this.unfreeze(),this.unflip(),this.userMedia){if(this.stream)if(this.stream.getVideoTracks){var e=this.stream.getVideoTracks();e&&e[0]&&e[0].stop&&e[0].stop()}else this.stream.stop&&this.stream.stop();delete this.stream,delete this.video}if(!0!==this.userMedia&&this.loaded&&!this.iOS){var t=this.getMovie();t&&t._releaseCamera&&t._releaseCamera()}this.container&&(this.container.innerHTML="",delete this.container),this.loaded=!1,this.live=!1},set:function(){if(1==arguments.length)for(var e in arguments[0])this.params[e]=arguments[0][e];else this.params[arguments[0]]=arguments[1]},on:function(e,t){e=e.replace(/^on/i,"").toLowerCase(),this.hooks[e]||(this.hooks[e]=[]),this.hooks[e].push(t)},off:function(e,t){if(e=e.replace(/^on/i,"").toLowerCase(),this.hooks[e])if(t){var a=this.hooks[e].indexOf(t);a>-1&&this.hooks[e].splice(a,1)}else this.hooks[e]=[]},dispatch:function(){var e=arguments[0].replace(/^on/i,"").toLowerCase(),t=Array.prototype.slice.call(arguments,1);if(this.hooks[e]&&this.hooks[e].length){for(var a=0,i=this.hooks[e].length;a<i;a++){var n=this.hooks[e][a];"function"==typeof n?n.apply(this,t):"object"==(void 0===n?"undefined":s(n))&&2==n.length?n[0][n[1]].apply(n[0],t):r[n]&&r[n].apply(r,t)}return!0}if("error"==e){var l;l=t[0]instanceof o||t[0]instanceof h?t[0].message:"Could not access webcam: "+t[0].name+": "+t[0].message+" "+t[0].toString(),alert("Webcam.js Error: "+l)}return!1},setSWFLocation:function(e){this.set("swfURL",e)},detectFlash:function(){var e=r,t=navigator,a=!1;if(void 0!==t.plugins&&"object"===s(t.plugins["Shockwave Flash"])){t.plugins["Shockwave Flash"].description&&void 0!==t.mimeTypes&&t.mimeTypes["application/x-shockwave-flash"]&&t.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=!0)}else if(void 0!==e.ActiveXObject)try{var i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(i){var o=i.GetVariable("$version");o&&(a=!0)}}catch(e){}return a},getSWFHTML:function(){var e="",t=this.params.swfURL;if(location.protocol.match(/file/))return this.dispatch("error",new o("Flash does not work from local disk.  Please run from a web server.")),'<h3 style="color:red">ERROR: the Webcam.js Flash fallback does not work from local disk.  Please run it from a web server.</h3>';if(!this.detectFlash())return this.dispatch("error",new o("Adobe Flash Player not found.  Please install from get.adobe.com/flashplayer and try again.")),'<h3 style="color:red">'+this.params.flashNotDetectedText+"</h3>";if(!t){for(var a="",i=document.getElementsByTagName("script"),s=0,n=i.length;s<n;s++){var h=i[s].getAttribute("src");h&&h.match(/\/webcam(\.min)?\.js/)&&(a=h.replace(/\/webcam(\.min)?\.js.*$/,""),s=n)}t=a?a+"/webcam.swf":"webcam.swf"}r.localStorage&&!localStorage.getItem("visited")&&(this.params.new_user=1,localStorage.setItem("visited",1));var l="";for(var c in this.params)l&&(l+="&"),l+=c+"="+escape(this.params[c]);return e+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="'+this.protocol+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+this.params.width+'" height="'+this.params.height+'" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+t+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+l+'"/><embed id="webcam_movie_embed" src="'+t+'" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+this.params.width+'" height="'+this.params.height+'" name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+l+'"></embed></object>'},getMovie:function(){if(!this.loaded)return this.dispatch("error",new o("Flash Movie is not loaded yet"));var e=document.getElementById("webcam_movie_obj");return e&&e._snap||(e=document.getElementById("webcam_movie_embed")),e||this.dispatch("error",new o("Cannot locate Flash movie in DOM")),e},freeze:function(){var e=this,t=this.params;this.preview_active&&this.unfreeze();var a=this.params.width/this.params.dest_width,i=this.params.height/this.params.dest_height;this.unflip();var s=t.crop_width||t.dest_width,r=t.crop_height||t.dest_height,o=document.createElement("canvas");o.width=s,o.height=r;var n=o.getContext("2d");this.preview_canvas=o,this.preview_context=n,1==a&&1==i||(o.style.webkitTransformOrigin="0px 0px",o.style.mozTransformOrigin="0px 0px",o.style.msTransformOrigin="0px 0px",o.style.oTransformOrigin="0px 0px",o.style.transformOrigin="0px 0px",o.style.webkitTransform="scaleX("+a+") scaleY("+i+")",o.style.mozTransform="scaleX("+a+") scaleY("+i+")",o.style.msTransform="scaleX("+a+") scaleY("+i+")",o.style.oTransform="scaleX("+a+") scaleY("+i+")",o.style.transform="scaleX("+a+") scaleY("+i+")"),this.snap(function(){o.style.position="relative",o.style.left=e.container.scrollLeft+"px",o.style.top=e.container.scrollTop+"px",e.container.insertBefore(o,e.peg),e.container.style.overflow="hidden",e.preview_active=!0},o)},unfreeze:function(){this.preview_active&&(this.container.removeChild(this.preview_canvas),delete this.preview_context,delete this.preview_canvas,this.preview_active=!1,this.flip())},flip:function(){if(this.params.flip_horiz){var e=this.container.style;e.webkitTransform="scaleX(-1)",e.mozTransform="scaleX(-1)",e.msTransform="scaleX(-1)",e.oTransform="scaleX(-1)",e.transform="scaleX(-1)",e.filter="FlipH",e.msFilter="FlipH"}},unflip:function(){if(this.params.flip_horiz){var e=this.container.style;e.webkitTransform="scaleX(1)",e.mozTransform="scaleX(1)",e.msTransform="scaleX(1)",e.oTransform="scaleX(1)",e.transform="scaleX(1)",e.filter="",e.msFilter=""}},savePreview:function(e,t){var a=this.params,i=this.preview_canvas,s=this.preview_context;if(t){t.getContext("2d").drawImage(i,0,0)}e(t?null:i.toDataURL("image/"+a.image_format,a.jpeg_quality/100),i,s),this.params.unfreeze_snap&&this.unfreeze()},snap:function(e,t){e||(e=this.params.user_callback),t||(t=this.params.user_canvas);var a=this.params;if(!this.loaded)return this.dispatch("error",new h("Webcam is not loaded yet"));if(!e)return this.dispatch("error",new h("Please provide a callback function or canvas to snap()"));if(this.preview_active)return this.savePreview(e,t),null;var i=document.createElement("canvas");i.width=this.params.dest_width,i.height=this.params.dest_height;var s=i.getContext("2d");this.params.flip_horiz&&(s.translate(a.dest_width,0),s.scale(-1,1));var r=function(){if(this.src&&this.width&&this.height&&s.drawImage(this,0,0,a.dest_width,a.dest_height),a.crop_width&&a.crop_height){var r=document.createElement("canvas");r.width=a.crop_width,r.height=a.crop_height;var o=r.getContext("2d");o.drawImage(i,Math.floor(a.dest_width/2-a.crop_width/2),Math.floor(a.dest_height/2-a.crop_height/2),a.crop_width,a.crop_height,0,0,a.crop_width,a.crop_height),s=o,i=r}if(t){t.getContext("2d").drawImage(i,0,0)}e(t?null:i.toDataURL("image/"+a.image_format,a.jpeg_quality/100),i,s)};if(this.userMedia)s.drawImage(this.video,0,0,this.params.dest_width,this.params.dest_height),r();else if(this.iOS){var o=document.getElementById(this.container.id+"-ios_div"),n=document.getElementById(this.container.id+"-ios_img"),l=document.getElementById(this.container.id+"-ios_input");iFunc=function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){r.call(n),n.removeEventListener("load",iFunc),o.style.backgroundImage="none",n.removeAttribute("src"),l.value=null}),l.value?iFunc(null):(n.addEventListener("load",iFunc),l.style.display="block",l.focus(),l.click(),l.style.display="none")}else{var c=this.getMovie()._snap(),n=new Image;n.onload=r,n.src="data:image/"+this.params.image_format+";base64,"+c}return null},configure:function(e){e||(e="camera"),this.getMovie()._configure(e)},flashNotify:function(e,t){switch(e){case"flashLoadComplete":this.loaded=!0,this.dispatch("load");break;case"cameraLive":this.live=!0,this.dispatch("live");break;case"error":this.dispatch("error",new o(t))}},b64ToUint6:function(e){return e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:43===e?62:47===e?63:0},base64DecToArr:function(e,t){for(var a,i,s=e.replace(/[^A-Za-z0-9\+\/]/g,""),r=s.length,o=t?Math.ceil((3*r+1>>2)/t)*t:3*r+1>>2,n=new Uint8Array(o),h=0,l=0,c=0;c<r;c++)if(i=3&c,h|=this.b64ToUint6(s.charCodeAt(c))<<18-6*i,3===i||r-c==1){for(a=0;a<3&&l<o;a++,l++)n[l]=h>>>(16>>>a&24)&255;h=0}return n},upload:function(e,t,a){var i=this.params.upload_name||"webcam",s="";if(!e.match(/^data\:image\/(\w+)/))throw"Cannot locate image format in Data URI";s=RegExp.$1;var r=e.replace(/^data\:image\/\w+\;base64\,/,""),o=new XMLHttpRequest;o.open("POST",t,!0),o.upload&&o.upload.addEventListener&&o.upload.addEventListener("progress",function(e){if(e.lengthComputable){var t=e.loaded/e.total;d.dispatch("uploadProgress",t,e)}},!1);var n=this;o.onload=function(){a&&a.apply(n,[o.status,o.responseText,o.statusText]),d.dispatch("uploadComplete",o.status,o.responseText,o.statusText)};var h=new Blob([this.base64DecToArr(r)],{type:"image/"+s}),l=new FormData;l.append(i,h,i+"."+s.replace(/e/,"")),o.send(l)}};d.init(),void 0!==(i=function(){return d}.call(t,a,t,e))&&(e.exports=i)}(window)}])});
//# sourceMappingURL=webcam.js.map