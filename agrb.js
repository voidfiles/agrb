(function (){var h=true,i=null,j=false,k,aa="/reader/link-frame";var n=this;function ba(a,b){a=a.split(".");b=b||n;for(var c;c=a.shift();)if(b[c])b=b[c];else return i;return b}function r(){}
function t(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function ca(a){if(a.hasOwnProperty&&a.hasOwnProperty(u))return a[u];a[u]||(a[u]=++da);return a[u]}var u="closure_hashCode_"+Math.floor(Math.random()*2147483648).toString(36),da=0;
function ea(a,b){var c=b||n;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(c,e)}}else return function(){return a.apply(c,arguments)}}function v(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c}
var w=Array.prototype,fa=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=c==i?0:c<0?Math.max(0,a.length+c):c;a=typeof a=="string"?a.split(""):a;for(c=c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function x(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}var ga=/^[a-zA-Z0-9\-_.!~*'()]*$/;function ha(a){a=String(a);if(!ga.test(a))return encodeURIComponent(a);return a}
function y(a,b){if(b)return a.replace(ia,"&amp;").replace(ja,"&lt;").replace(ka,"&gt;").replace(la,"&quot;");else{if(!ma.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(ia,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(ja,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(ka,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(la,"&quot;");return a}}var ia=/&/g,ja=/</g,ka=/>/g,la=/\"/g,ma=/[&<>\"]/;
function na(a){var b=n.document.createElement("a");b.innerHTML=a;b.normalize&&b.normalize();a=b.firstChild.nodeValue;b.innerHTML="";return a}function oa(a){return a.replace(/&([^;]+);/g,function(b,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(c.charAt(0)=="#"){c=Number("0"+c.substr(1));if(!isNaN(c))return String.fromCharCode(c)}return b}})}
function pa(a,b,c){if(c){a=a;a=z(a,"&")?"document"in n&&!z(a,"<")?na(a):oa(a):a}if(a.length>b)a=a.substring(0,b-3)+"...";if(c)a=y(a);return a}function z(a,b){return a.indexOf(b)!=-1}
function A(a,b){var c=0;a=x(String(a)).split(".");b=x(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;c==0&&e<d;e++){var f=a[e]||"",m=b[e]||"",g=new RegExp("(\\d*)(\\D*)","g"),s=new RegExp("(\\d*)(\\D*)","g");do{var l=g.exec(f)||["","",""],o=s.exec(m)||["","",""];if(l[0].length==0&&o[0].length==0)break;c=B(l[1].length==0?0:parseInt(l[1],10),o[1].length==0?0:parseInt(o[1],10))||B(l[2].length==0,o[2].length==0)||B(l[2],o[2])}while(c==0)}return c}
function B(a,b){if(a<b)return-1;else if(a>b)return 1;return 0}(Date.now||function(){return+new Date})();var C,D,E,qa,F;function ra(){return n.navigator?n.navigator.userAgent:i}function G(){return n.navigator}(function(){F=qa=E=D=C=j;var a;if(a=ra()){var b=G();C=a.indexOf("Opera")==0;D=!C&&a.indexOf("MSIE")!=-1;qa=(E=!C&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;F=!C&&!E&&b.product=="Gecko"}})();var sa=C,H=D,ta=F,I=E,J=function(){var a=G();return a&&a.platform||""}();
(function(){z(J,"Mac");z(J,"Win");z(J,"Linux");G()&&z(G().appVersion||"","X11")})();var K=function(){var a="",b;if(sa&&n.opera){a=n.opera.version;a=typeof a=="function"?a():a}else{if(ta)b=/rv\:([^\);]+)(\)|;)/;else if(H)b=/MSIE\s+([^\);]+)(\)|;)/;else if(I)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(ra()))?a[1]:""}return a}(),L={};function M(){}M.prototype.r=j;M.prototype.i=function(){if(!this.r){this.r=h;this.d()}};M.prototype.d=function(){};function N(a,b){this.type=a;this.currentTarget=this.target=b}
v(N,M);N.prototype.d=function(){delete this.type;delete this.target;delete this.currentTarget};N.prototype.n=j;N.prototype.J=h;function O(a,b){a&&this.e(a,b)}v(O,N);k=O.prototype;k.target=i;k.relatedTarget=i;k.offsetX=0;k.offsetY=0;k.clientX=0;k.clientY=0;k.screenX=0;k.screenY=0;k.button=0;k.keyCode=0;k.charCode=0;k.ctrlKey=j;k.altKey=j;k.shiftKey=j;k.metaKey=j;k.s=i;
k.e=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(ta)try{b=b.nodeName&&b}catch(d){}}else if(c=="mouseover")b=a.fromElement;else if(c=="mouseout")b=a.toElement;this.relatedTarget=b;this.offsetX=a.offsetX!==undefined?a.offsetX:a.layerX;this.offsetY=a.offsetY!==undefined?a.offsetY:a.layerY;this.clientX=a.clientX!==undefined?a.clientX:a.pageX;this.clientY=a.clientY!==undefined?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=
a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.s=a;delete this.J;delete this.n};H&&(L["8"]||(L["8"]=A(K,"8")>=0));O.prototype.d=function(){O.B.d.call(this);this.relatedTarget=this.currentTarget=this.target=this.s=i};
function P(a,b){this.u=b;this.b=[];if(a>this.u)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(b=0;b<a;b++)this.b.push(this.a?this.a():{})}v(P,M);P.prototype.a=i;P.prototype.p=i;function ua(a){if(a.b.length)return a.b.pop();return a.a?a.a():{}}function Q(a,b){a.b.length<a.u?a.b.push(b):va(a,b)}function va(a,b){if(a.p)a.p(b);else if(t(b.i)=="function")b.i();else for(var c in b)delete b[c]}
P.prototype.d=function(){P.B.d.call(this);for(var a=this.b;a.length;)va(this,a.pop());delete this.b};var wa,xa;(function(){xa=(wa="ScriptEngine"in n&&n.ScriptEngine()=="JScript")?n.ScriptEngineMajorVersion()+"."+n.ScriptEngineMinorVersion()+"."+n.ScriptEngineBuildVersion():"0"})();var ya=wa,za=xa;function Aa(){}var Ba=0;k=Aa.prototype;k.key=0;k.g=j;k.o=j;
k.e=function(a,b,c,d,e,f){if(t(a)=="function")this.t=h;else if(a&&a.handleEvent&&t(a.handleEvent)=="function")this.t=j;else throw Error("Invalid listener argument");this.m=a;this.w=b;this.src=c;this.type=d;this.capture=!!e;this.H=f;this.o=j;this.key=++Ba;this.g=j};k.handleEvent=function(a){if(this.t)return this.m.call(this.H||this.src,a);return this.m.handleEvent.call(this.m,a)};var R,Ca,S,Da,Ea,Fa,Ga,Ha;
(function(){function a(){return{c:0,f:0}}function b(){return[]}function c(){function p(ab){return m.call(p.src,p.key,ab)}return p}function d(){return new Aa}function e(){return new O}var f=ya&&!(A(za,"5.7")>=0),m;Da=function(p){m=p};if(f){R=function(p){Q(g,p)};Ca=function(){return ua(s)};S=function(p){Q(s,p)};Ea=function(){Q(l,c())};Fa=function(p){Q(o,p)};Ga=function(){return ua(q)};Ha=function(p){Q(q,p)};var g=new P(0,600);g.a=a;var s=new P(0,600);s.a=b;var l=new P(0,600);l.a=c;var o=new P(0,600);
o.a=d;var q=new P(0,600);q.a=e}else{R=r;Ca=b;Fa=Ea=S=r;Ga=e;Ha=r}})();var T={},U={},Ia={},Ja={};function Ka(a){if(!T[a])return j;var b=T[a];if(b.g)return j;var c=b.src,d=b.type,e=b.w,f=b.capture;if(c.removeEventListener){if(c==n||!c.L)c.removeEventListener(d,e,f)}else c.detachEvent&&c.detachEvent(La(d),e);c=ca(c);e=U[d][f][c];if(Ia[c]){var m=Ia[c],g=fa(m,b);g>=0&&w.splice.call(m,g,1).length==1;m.length==0&&delete Ia[c]}b.g=h;e.v=h;Ma(d,f,c,e);delete T[a];return h}
function Ma(a,b,c,d){if(!d.j)if(d.v){for(var e=0,f=0;e<d.length;e++)if(d[e].g){var m=d[e].w;m.src=i;Ea(m);Fa(d[e])}else{if(e!=f)d[f]=d[e];f++}d.length=f;d.v=j;if(f==0){S(d);delete U[a][b][c];U[a][b].c--;if(U[a][b].c==0){R(U[a][b]);delete U[a][b];U[a].c--}if(U[a].c==0){R(U[a]);delete U[a]}}}}function La(a){if(a in Ja)return Ja[a];return Ja[a]="on"+a}
function Na(a,b,c,d,e){var f=1;b=ca(b);if(a[b]){a.f--;a=a[b];if(a.j)a.j++;else a.j=1;try{for(var m=a.length,g=0;g<m;g++){var s=a[g];if(s&&!s.g)f&=Oa(s,e)!==j}}finally{a.j--;Ma(c,d,b,a)}}return Boolean(f)}function Oa(a,b){b=a.handleEvent(b);a.o&&Ka(a.key);return b}
Da(function(a,b){if(!T[a])return h;a=T[a];var c=a.type,d=U;if(!(c in d))return h;d=d[c];var e,f;if(H){e=b||ba("window.event");b=h in d;var m=j in d;if(b){if(e.keyCode<0||e.returnValue!=undefined)return h;a:{var g=j;if(e.keyCode==0)try{e.keyCode=-1;break a}catch(s){g=h}if(g||e.returnValue==undefined)e.returnValue=h}}g=Ga();g.e(e,this);e=h;try{if(b){for(var l=Ca(),o=g.currentTarget;o;o=o.parentNode)l.push(o);f=d[h];f.f=f.c;for(var q=l.length-1;!g.n&&q>=0&&f.f;q--){g.currentTarget=l[q];e&=Na(f,l[q],
c,h,g)}if(m){f=d[j];f.f=f.c;for(q=0;!g.n&&q<l.length&&f.f;q++){g.currentTarget=l[q];e&=Na(f,l[q],c,j,g)}}}else e=Oa(a,g)}finally{if(l){l.length=0;S(l)}g.i();Ha(g)}return e}f=new O(b,this);try{e=Oa(a,f)}finally{f.i()}return e});var Pa=/#|$/;function V(a){return typeof a=="string"?document.getElementById(a):a}I&&(L["522"]||(L["522"]=A(K,"522")>=0));function Qa(a){if(!a)return"";if(a.indexOf("x-")==0)a=a.substring(2);return x(a.split("/")[0]).toLowerCase()}
function Ra(){var a={};if(!window||!window.location||!window.location.href)return a;var b=window.location.href.split("#")[1];if(!b)return a;b=b.split("&");for(var c=0,d;d=b[c];c++){var e=d.indexOf("=");a[d.substring(0,e)]=d.substring(e+1)}return a}function Sa(a,b,c){b=b.split("#")[0]+c;try{a.location.replace(b)}catch(d){a.location=b}}function _finishSignIn(){_LINK_BOOKMARKLET_IS_STANDALONE?window.location.reload(h):Sa(top,_OPENER_URL,"#refresh=1")}function W(){}W.prototype.h=function(){return i};
function Ta(){}v(Ta,W);function Ua(){if(document.selection&&document.selection.createRange)return document.selection.createRange().text?document.selection.createRange().htmlText:"";else if(window.getSelection){var a=window.getSelection();if(a.rangeCount>0){var b=document.createElement("div");b.appendChild(a.getRangeAt(0).cloneContents());return b.innerHTML}}return""}Ta.prototype.h=function(){return Ua(this).replace(/[\r|\n]/g,"")};function Va(){}v(Va,W);
Va.prototype.h=function(){for(var a=document.getElementsByTagName("meta"),b=0,c;c=a[b];b++){var d=c.getAttribute("name");if(d&&d.toUpperCase()=="DESCRIPTION")return c.getAttribute("content")}return i};function Wa(){}v(Wa,W);
Wa.prototype.h=function(){var a=window.location.hostname,b=a.length-11;if(!(b>=0&&a.lastIndexOf("youtube.com",b)==b))return i;if("/watch"!=window.location.pathname)return i;a=document.getElementById("embed_code");b=a.value;b=/^[\s\xa0]*$/.test(b==i?"":String(b))?j:b.toLowerCase().indexOf("<object")==0||b.toLowerCase().indexOf("<embed")==0;if(b)return a.value;a=window.location.search;b=a.search(Pa);var c;c:{for(c=0;(c=a.indexOf("v",c))>=0&&c<b;){var d=a.charCodeAt(c-1);if(d==38||d==63){d=a.charCodeAt(c+
1);if(!d||d==61||d==38||d==35){c=c;break c}}c+=2}c=-1}if(c<0)a=i;else{d=a.indexOf("&",c);if(d<0||d>b)d=b;c+=2;a=decodeURIComponent(a.substr(c,d-c).replace(/\+/g," "))}a=a?"http://i.ytimg.com/vi/"+a+"/0.jpg":i;if(a)return'<a href="'+window.location+'"><img src="'+a+'"></a><br><a href="'+window.location+'">'+window.location+"</a>";return i};var Xa=[new Wa,new Ta,new Va,new W];function Ya(a,b,c){if(a[b]){Sa(window,window.location.href,"#");c()}}
function Za(){return(window.GR________bookmarklet_domain||window.location.protocol+"//"+window.location.host)+aa}function $a(){var a=new X;a.C=document.title;a.D=window.location.href;var b;a:{var c=i;for(b=0;c=Xa[b];b++)if(c=c.h()){b=c;break a}b=""}a.k=b;a.z=window.location.host;a.A=window.location.protocol+"//"+window.location.host+"/";return a}
function bb(a,b){if(!document)return j;var c=document.contentType;if(c&&Qa(c)==a)return h;if(document.body&&document.body.childNodes.length==2&&document.body.firstChild.tagName&&document.body.firstChild.tagName.toLowerCase()==b)return h;return j}function cb(){var a=new X;db(a);a.k='<img src="'+document.location.href+'">';return a}function eb(){var a=new X;db(a);a.k='<a href="'+document.location.href+'">Video</a>';return a}
function fb(){var a=new X;db(a);var b="<pre>"+document.getElementsByTagName("pre")[0].innerHTML+"</pre>";a.k=b;return a}var Y=i;function Z(a,b){this.l=a;this.F=b}Z.prototype.clear=function(a){window.clearInterval(this.I);if(!this.l){var b=V("GR________link_bookmarklet_node");b.innerHTML="";a&&b.parentNode.removeChild(b);Y=i}};function gb(){if(I)return window.frames.GR________link_bookmarklet_frame;var a=V("GR________link_bookmarklet_frame");return a?a.contentWindow:i}
Z.prototype.G=function(){if(this.l||(gb(this)?h:j)){var a=Ra(),b=this;Ya(a,"refresh",function(){b.clear();b.e($a())});Ya(a,"close",ea(b.clear,b,h))}};Z.prototype.e=function(a){this.l?hb(this,a):ib(this,a);this.I=window.setInterval(ea(this.G,this),50)};
function hb(a,b){if(window.open(a.F?jb(b,Za()):"","GR________link_bookmarklet_frame","height=378,width=520"))a.F||kb(a,b);else alert("Grrr! A popup blocker may be preventing Google Reader from opening the page. If you have a popup blocker, try disabling it to open the window.")}
function ib(a,b){if(!(gb(a)?h:j)){V("GR________link_bookmarklet_node").innerHTML='<iframe frameborder="0" id="GR________link_bookmarklet_frame" name="GR________link_bookmarklet_frame" style="width:100%;height:100%;border:0px;padding:0px;margin:0px"></iframe>';kb(a,b)}}function kb(a,b){a=lb(b,Za(),"GR________link_bookmarklet_frame");document.body.appendChild(a);}function X(){}
function db(a){var b=document.location.pathname.split("/");a.C=b[b.length-1];a.D=document.location.href;a.z=window.location.host;a.A=window.location.protocol+"//"+window.location.host+"/"}function mb(a,b){if(a.K)b("srcItemId",a.K);else{b("title",a.C);b("url",a.D);b("srcTitle",a.z);b("srcUrl",a.A);b("snippet",pa(a.k,1E5))}}
function lb(a,b,c){function d(m,g){g&&f.push('<input type="hidden" name="'+y(m)+'" value="'+y(g)+'">')}var e=document.createElement("form");e.id = "GR______FORM";e.method="POST";e.target=c;e.action=b;e.acceptCharset="utf-8";var f=[];mb(a,d);e.innerHTML=f.join("");return e}
function jb(a,b){var c=b;mb(a,function(d,e){if(e){d=[c,"&",d,"=",ha(e)];if(d[1]){e=d[0];var f=e.indexOf("#");if(f>=0){d.push(e.substr(f));d[0]=e=e.substr(0,f)}f=e.indexOf("?");if(f<0)d[1]="?";else if(f==e.length-1)d[1]=undefined}c=d.join("")}});return c}function $(a,b,c){(b=b||H||sa)||nb(a);Y=new Z(b,c);Y.e(a)}
function nb(){document.body.scrollTop=document.documentElement.scrollTop=0;var a=V("GR________link_bookmarklet_node");if(!a){a=document.createElement("div");a.id="GR________link_bookmarklet_node";a.style.position=H&&A(K,"6")==0?"absolute":"fixed";a.style.background="#fff";a.style.border="4px solid red";a.style.top="8px";a.style.right="8px";a.style.width="520px";a.style.height="378px";a.style.zIndex=1E5;document.body.appendChild(a)}}
(function(a,b,c){a=a.split(".");c=c||n;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)if(!a.length&&b!==undefined)c[d]=b;else c=c[d]?c[d]:(c[d]={})})("removeLinkFrame",function(){Y.clear(h)});var ob;var pb=window;try{ob=pb._USER_ID!==undefined&&pb._USER_EMAIL!==undefined}catch(qb){ob=j}if(!ob)if(bb("video","embed"))$(eb(),h,h);else if(bb("image","img"))$(cb(),I?j:h,I?j:h);else bb("","pre")?$(fb(),h,h):$($a());})();


(function(){
    
    var console = window.console, document = window.document;
    // parseUri 1.2.2
    // (c) Steven Levithan <stevenlevithan.com>
    // MIT License

    function parseUri (str) {
        var o   = parseUri.options,
            m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
            uri = {},
            i   = 14;

        while (i--) uri[o.key[i]] = m[i] || "";

        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) uri[o.q.name][$1] = $2;
        });

        return uri;
    };

    parseUri.options = {
        strictMode: false,
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        q:   {
            name:   "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };

    
    if(!console){
        console = function(){
            return true;
        };
        console.log = function(){
            return true;
        };
    }
    
    var shortener = function(long_url){
        this.long_url = long_url;
        this.long_url_escaped = escape(long_url);
    };
    
    shortener.prototype.api_base_url = "http://tskr.us";
    shortener.prototype.api_method = "/api/v1/shorten";
    shortener.prototype.api_key = "fae01a3dbdaba870a0f9c1b8b7039090e2cb7a16";
    
    shortener.prototype.shortner_callback = function(data){
        var json_script = this.jsonp_script;
        json_script.parentNode.removeChild(json_script);
        
        delete this.jsonp_script;
        
        short_url = data;
        view_url  = data.split("/");
        key  = view_url.pop();
        domain  = view_url.pop();
        view_url = "http://" + domain + "/v/"+key;
        data = {
            short_url:short_url,
            view_url:view_url
        };
        this.user_callback(data);
    };
    shortener.prototype.getShortenerUrl = function(){
        this.api_params = {
            api_key:this.api_key,
            callback:"json_callback111111111",
            url:this.long_url_escaped
        };
        
        var url = this.api_base_url + this.api_method + "?";
        var counter = 0;
        for(var i in this.api_params){
            if (counter != 0) {
                url += "&";
            }
            url += i + "=" + this.api_params[i];
            
            counter++;
        }

        
        return url;
        
    };
    shortener.prototype.shorten = function(callback){
        this.user_callback = callback;
        
        this.jsonp_script = document.createElement("script");
        
        this.jsonp_script.src = this.getShortenerUrl();
        
        var our_shortener = this;
        
        window.json_callback111111111 = function(data){
            our_shortener.shortner_callback(data);
        };
        
        document.body.appendChild(this.jsonp_script);
    };
    
    var agrb = function(){
        var b = document.location.pathname.split("/");
        this.formdata = {};
        this.formdata.title    = document.title;
        this.formdata.url      = window.location.href;
        this.formdata.srcTitle = window.location.host;
        this.formdata.srcUrl   = window.location.protocol + "//" + window.location.host + "/";
        
        // Get snippet 
        this.getHtml();
        if (this.formdata.snippet == "") {
            this.getMetaDescription();
        }
        

    };
    agrb.prototype.grLink = "http://www.google.com/reader/link-frame";
    agrb.prototype.grIFrame = "GR________link_bookmarklet_frame";
    agrb.prototype.getHtml = function(){
        if (document.selection && document.selection.createRange) {
            this.formdata.snippet = document.selection.createRange().text ? document.selection.createRange().htmlText: "";
            return true;
        }
        else if (window.getSelection) {
            var a = window.getSelection();
            if (a.rangeCount > 0) {
                var b = document.createElement("div");
                b.appendChild(a.getRangeAt(0).cloneContents());
                this.formdata.snippet = b.innerHTML;
                return true;
            }
        }
        this.formdata.snippet = "";
        return true;
    };
    
    agrb.prototype.getMetaDescription = function(){
        for (var a = document.getElementsByTagName("meta"), b = 0, c; c = a[b]; b++) {
            var d = c.getAttribute("name");
            if (d && d.toUpperCase() == "DESCRIPTION") this.formdata.snippet = c.getAttribute("content");
        }
    };
    agrb.prototype.cleanString = function(a, b){
        var ia = /&/g,
        ja = /</g,
        ka = />/g,
        la = /"/g,
        ma = /[&<>"]/;

        if (b) return a.replace(ia, "&amp;").replace(ja, "&lt;").replace(ka, "&gt;").replace(la, "&quot;");
        else {
            if (!ma.test(a)) return a;
            if (a.indexOf("&") != -1) a = a.replace(ia, "&amp;");
            if (a.indexOf("<") != -1) a = a.replace(ja, "&lt;");
            if (a.indexOf(">") != -1) a = a.replace(ka, "&gt;");
            if (a.indexOf('"') != -1) a = a.replace(la, "&quot;");
            return a;
        }

    };
    
    agrb.prototype.createForm = function(form_id){
        var form_elem;
        if(this.__form){ return true; }
        

        var form_data = [];
        for(var i in this.formdata){
            if(this.formdata[i]) {
                form_data.push('<input type="hidden" name="' + this.cleanString(i) + '" value="' + this.cleanString(this.formdata[i]) + '">');
            }
        }

        if(form_id){
            this.__form = document.getElementById(form_id);
            if(form_elem){
                this.__form.innerHTML = form_data.join("");
                return true;
            }
            
        }
        
        this.__form = document.createElement("form");
        this.__form.method = "POST";
        this.__form.target = this.grIFrame;
        this.__form.action = this.grLink;
        this.__form.acceptCharset = "utf-8";

        this.__form.innerHTML = form_data.join("");
        document.body.appendChild(this.__form);
        return true;
    };
    agrb.prototype.createIframe = function(){
        var a = document.getElementById("GR________link_bookmarklet_node");
        if(a){
            var my_div = document.createElement("div");
            my_div.innerHTML = "alt. GReader bookmarlete more info here <a href='http://alexkessinger.net'>alexkessinger.net</a>";
            

            this.__iframe_div = a;
            
            this.__iframe_div.style.height = "400px";
            this.__iframe_div.appendChild(my_div);
            return true;
        }
        if (typeof(this.__iframe) === "undefined") {
            a = document.createElement("div");
            a.id = "GR________link_bookmarklet_node";
            a.style.position = "fixed";
            a.style.background = "#fff";
            a.style.border = "4px solid red";
            
            a.style.top = "8px";
            a.style.right = "8px";
            a.style.width = "520px";
            a.style.height = "378px";
            a.style.zIndex = 9999;
            this.__iframe_div = a;
            document.body.appendChild(this.__iframe_div);
            this.__iframe_div.innerHTML = '<iframe frameborder="0" id="GR________link_bookmarklet_frame" name="GR________link_bookmarklet_frame" style="width:100%;height:100%;border:0px;padding:0px;margin:0px"></iframe>';
            this.__iframe = document.getElementById("GR________link_bookmarklet_frame");
        };
    };
    agrb.prototype.clear = function(){
        window.location.hash = "";
        window.clearInterval(this.interval);
        var b = document.getElementById("GR________link_bookmarklet_node");
        b.parentNode.removeChild(b);
        delete this;
    };
    agrb.prototype.checkClose = function(){
        var loc_array = window.location.href.split("#");
        for(var b in loc_array){
            if(loc_array[b] == "close=1"){
                this.clear();
            }
        }
        
    };
    agrb.prototype.submitForm = function(){
        this.__form.submit();
        var self = this;
        var closure = function(){
            self.checkClose();
        };
        //this.interval = window.setInterval(closure, 50);
    };
    
    
    agrb.prototype.submitForm = function(){
        this.__form.submit();
        var self = this;
        var closure = function(){
            self.checkClose();
        };
        //this.interval = window.setInterval(closure, 50);
    };
    
    agrb.prototype.fixUrls = function(data){
        // fix all bad img urls
        var cont = document.createElement("div"),
            imgs,
            b,
            img,
            as,
            a,
            a_url;
            
        cont.innerHTML = data;
        imgs = cont.getElementsByTagName("img");
        for(b in imgs){
            img = imgs[b];
            img_url = parseUri(img.src);
            img.src = img_url["source"];
        }
        as = cont.getElementsByTagName("a");
        for(b in as){
            a= as[b];
            a_url = parseUri(a.href);
            a.href = a_url["source"];
        }
        data = cont.innerHTML;
        return data;
    };
    
    agrb.prototype.submit = function(){
        
        
        //this.submitForm();
        // If we want to track the content we should now shorten the URL, and insert tracking code
        var self = this;
        var closure = function(data){
            self.formdata.url = data["short_url"];
            self.formdata.snippet = self.fixUrls(self.formdata.snippet);
            self.formdata.snippet += "<img width=\"1px\" height=\"1px\" src=\""+data["view_url"]+"\"></img>";
            self.createForm("GR______FORM");
            self.createIframe();
            self.submitForm();
        };
        
        var tskr = new shortener(this.formdata.url);
        tskr.shorten(closure);
        
    };
    
    var in_action = new agrb();
    
    
    
    in_action.submit();
    window["removeLinkFrame"] = function(){
        var b = document.getElementById("GR________link_bookmarklet_node");
        b.innerHTML = "";
        b.parentNode.removeChild(b);
    };
    window.in_action = in_action;
    
    
})();