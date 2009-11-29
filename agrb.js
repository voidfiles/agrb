(function(){
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
                f.push('<input type="hidden" name="' + this.cleanString(i) + '" value="' + this.cleanString(this.formdata[i]) + '">');
            }
        }

        
        this.__form = document.createElement("form");
        this.__form.method = "POST";
        this.__form.target = this.__iframe.id;
        this.__form.action = this.grLink;
        this.__form.acceptCharset = "utf-8";

        this.__form.innerHTML = form_data.join("");
        document.body.appendChild(this.__form);
        return true;
    };
    agrb.prototype.createIframe = function(){
        var a = document.getElementsById("GR________link_bookmarklet_node");
        if (!a) {
            a = document.createElement("div");
            a.id = "GR________link_bookmarklet_node";
            a.style.position = H && A(K, "6") == 0 ? "absolute": "fixed";
            a.style.background = "#fff";
            a.style.border = "4px solid red";
            a.style.top = "8px";
            a.style.right = "8px";
            a.style.width = "520px";
            a.style.height = "378px";
            a.style.zIndex = 1E5;
            this.__iframe = a;
            document.body.appendChild(this.__iframe);
        };
    };
    agrb.prototype.submitForm = function(){
        this.__form.submit();
    };
    
    
    
    agrb.prototype.submit = function(){
        this.createForm();
        this.createIframe();
        //this.submitForm();
    };
    
    var in_action = new agrb();
    
    in_action.submit();
    
    
})();