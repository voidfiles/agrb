(function(){
    function A(a, b) {
        var c = 0;
        a = x(String(a)).split(".");
        b = x(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
            var f = a[e] || "",
            m = b[e] || "",
            g = new RegExp("(\d*)(\D*)", "g"),
            s = new RegExp("(\d*)(\D*)", "g");
            do {
                var l = g.exec(f) || ["", "", ""],
                o = s.exec(m) || ["", "", ""];
                if (l[0].length == 0 && o[0].length == 0) break;
                c = B(l[1].length == 0 ? 0: parseInt(l[1], 10), o[1].length == 0 ? 0: parseInt(o[1], 10)) || B(l[2].length == 0, o[2].length == 0) || B(l[2], o[2]);
            }
            while (c == 0)
        }
        return c;
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
        this.__form.target = this.__iframe.id;
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
    agrb.prototype.submitForm = function(){
        this.__form.submit();
    };
    
    
    
    agrb.prototype.submit = function(){
        this.createForm();
        this.createIframe();
        //this.submitForm();
    };
    
    var in_action = new agrb();
    
    window.in_action = in_action;
    
    in_action.submit();
    
    
})();