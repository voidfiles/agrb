(function(){
    
    var console = window.console, document = window.document;
    console.log(document);
    console.log("its running");
    
    var shortener = function(long_url){
        this.long_url = long_url;
    };
    
    shortener.prototype.api_base_url = "http://tskr.us";
    shortener.prototype.api_method = "/api/v1/shorten";
    shortener.prototype.api_key = "fae01a3dbdaba870a0f9c1b8b7039090e2cb7a16";
    
    shortener.prototype.shortner_callback = function(data){
        var json_script = this.jsonp_script;
        json_script.parentNode.removeChild(json_script);
        
        delete this.jsonp_script;
        
        console.log(data);
        this.user_callback(data);
    };
    shortener.prototype.getShortenerUrl = function(){
        this.api_params = {
            api_key:this.api_key,
            callback:"json_callback111111111",
            url:this.long_url
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
    
    agrb.prototype.createForm = function(){
        if(this.__form){ return true; }
        var form_data = [];
        for(var i in this.formdata){
            if(this.formdata[i]) {
                form_data.push('<input type="hidden" name="' + this.cleanString(i) + '" value="' + this.cleanString(this.formdata[i]) + '">');
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
        //var a = document.getElementById("GR________link_bookmarklet_node");
        console.log("iframe",this.__iframe);
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
        var b = document.getElementById("GR________link_bookmarklet_node");
        b.parentNode.removeChild(b);
        delete this;
    };
    agrb.prototype.checkClose = function(){
        var loc_array = window.location.href.split("#");
        for(var b in loc_array){
            if(loc_array[b] == "close-1"){
                this.clear();
            }
        }
        
    };
    agrb.prototype.submitForm = function(data){
        console.log(data);
        this.__form.submit();
        window.setInterval(this.checkClose, 50);
    };
    
    
    
    agrb.prototype.submit = function(){
        
        this.createForm();
        this.createIframe();
        //this.submitForm();
        // If we want to track the content we should now shorten the URL, and insert tracking code
        var tskr = new shortener(this.formdata.url);
        
        var self = this;
        var closure = function(data){
            self.submitForm(data);
        };
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