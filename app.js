console.log("START FROM GIT 011");

    // Create styles for form
    if (location.pathname == "/landing-test/form-test") {

        // Create styles for form
        var styDiv = document.createElement('div');
        styDiv.innerHTML = '<style>div#formOverlayBGContainer{display:none;background:rgba(0,0,0,.5);position:fixed!important;z-index:9000;left:0;top:0;bottom:0;right:0;width:100%;transition:background .7s cubic-bezier(.55,.085,.68,.53)}div#formOverlayContainer{top:4.5rem;height:fit-content;position:absolute!important;z-index:9001;background:#fff;background:hsla(0,0%,100%,.9);bottom:18px;bottom:1.5rem;left:0;margin:auto;overflow:auto;right:0;top:72px;-ms-transform:translateX(10%);transform:translateX(10%);width:90%;transition:transform .7s cubic-bezier(.55,.085,.68,.53),opacity .7s cubic-bezier(.55,.085,.68,.53);margin-top:auto;opacity:1;-ms-transform:translateX(0);transform:translateX(0);transition:transform .5s cubic-bezier(.55,.085,.68,.53),opacity .7s cubic-bezier(.55,.085,.68,.53),background .7s cubic-bezier(.55,.085,.68,.53)}</style>';
        document.body.appendChild(styDiv);

        // Create form Button for form
        var div = document.createElement('div');
        div.className = 'formTstMsg';
        div.id = 'formTstMsg';
        div.style.cssText = 'position: fixed; z-index: 99999999; height: 36px; width: 280px; bottom:20px; font-size: xx-large !important;';
        div.innerHTML = '<button class="button--connect js--module-overlayLink js--moduleLoader--loaded">FORM TEST BUTTON</button>';
        document.body.appendChild(div);
        document.getElementById("formTstMsg").addEventListener("click", function () {
            if (document.getElementById("formOverlayBGContainer").style.display == "none") {
                document.getElementById("formOverlayBGContainer").style.display = "block";
            } else {
                document.getElementById("formOverlayBGContainer").style.display = "none";
            }
        });

        // Create form Overlay BG Container for form
        var formOverlayBGContainer = document.createElement('div');
        formOverlayBGContainer.className = 'formOverlayBGContainer';
        formOverlayBGContainer.id = 'formOverlayBGContainer';
        formOverlayBGContainer.innerHTML = '<div id="formOverlayContainer" class="form"><p class="message">Please tell us what you would like to know about.<br></p></div>';
        document.body.appendChild(formOverlayBGContainer);


        // Create a form dynamically
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("id", "form1913");
        form.setAttribute("class", "form js--module-formSniff js--module-formDefault  js--moduleLoader--loaded");
        form.setAttribute("name", "copyOf2021USELQUVSRTLForm-1645212545248");
        form.setAttribute("action", "https://s651376838.t.eloqua.com/e/f2");


        var br = document.createElement("br");
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("firstName", "First Name", "text", ""));
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("lastName", "Last Name", "text", ""));
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("emailAddress", "Email Address", "text", ""));
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("title", "Title", "text", ""));
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("company", "Company", "text", ""));
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("busPhone", "Business Phone", "text", ""));
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("city", "City", "text", ""));
        form.appendChild(br.cloneNode());
        form.appendChild(createFormEl("zipPostal", "Zip Code", "text", ""));
        form.appendChild(br.cloneNode());
        
        /* 
            values will be one of the following:
                - ["Ready Now", "Within Next Month", "1-3 Months", "3+ Months"]
                    - Visit Eloqua Landing Page
                    - Visit High Value Website Page 
                        - Contact Us
                    - Visit Website
                        - Blog, Solutions, Canada, UVS Browse Inventory, Rental Promo
                        - Rental Reservations
                        - Canada UVS Browse
                - ["Ready Now", "Within Next Month", "1-3 Months", "3+ Months"]
        */
                form.appendChild(createFormDdl("DecisionTime", ["Ready Now", "Within Next Month", "1-3 Months", "3+ Months"]));
        form.appendChild(br.cloneNode());

        var subBtn = document.createElement("input");
        subBtn.setAttribute("type", "submit");
        subBtn.setAttribute("value", "Submit");
        form.appendChild(subBtn);
        form.appendChild(br.cloneNode());
        document.getElementById("formOverlayContainer").appendChild(form);

        form.appendChild(createFormEl("elqFormName", "elqFormName", "hidden", "copyOf2021USELQUVSRTLForm-1645212545248"));
        form.appendChild(createFormEl("elqSiteId", "elqSiteId", "hidden", "651376838"));
        form.appendChild(createFormEl("elqCampaignId", "elqCampaignId", "hidden", ""));
        form.appendChild(createFormEl("ILANDPAGE", "", "hidden", ""));
        form.appendChild(createFormEl("IREFERRER", "IREFERRER", "hidden", ""));
        form.appendChild(createFormEl("LREFERRER", "LREFERRER", "hidden", ""));

        /* 
            values will be one of the following:
                - ContactMe
                - Promo
                - Event Attendee
                - Event
                - Download
                - Blog
        */
        form.appendChild(createFormEl("EngagementType", "", "hidden", "ContactMe"));
        form.appendChild(createFormEl("LPID", "LPID", "hidden", ""));
        form.appendChild(createFormEl("LoB", "LoB", "hidden", ""));
        form.appendChild(createFormEl("source", "source", "hidden", ""));
        form.appendChild(createFormEl("VehicleID", "VehicleID", "hidden", ""));
        form.appendChild(createFormEl("FormpageURL", "FormpageURL", "hidden", ""));
        form.appendChild(createFormEl("UBRIANTEST", "UBRIANTEST", "hidden", ""));

        document.getElementById("EngagementType").value = document.location.pathname.split("/")[2];
        document.getElementById("LoB").value = document.location.pathname.split("/")[1];
        document.getElementById("ILANDPAGE").value = getCookie("_uc_initial_landing_page");
        document.getElementById("IREFERRER").value = getCookie("__lotl");
        document.getElementById("LREFERRER").value = getCookie("_uc_last_referrer");
        document.getElementById("FormpageURL").value = location.pathname;
        document.getElementById("UDEVICE").value = deviceInfo();

    }

    function createFormEl(nameVar, placeholderVar, typeVar, valueVar) {
        var x = document.createElement("input");
        x.setAttribute("type", typeVar);
        x.setAttribute("name", nameVar);
        x.setAttribute("id", nameVar);
        x.setAttribute("value", valueVar);
        if (typeVar !== "hidden") {
            x.setAttribute("placeholder", placeholderVar);
        }
        // x.setAttribute("maxlength", 50);
        // x.setAttribute("required", true);
        return x;
    }

    function createFormDdl(a, b) {
        var values = b;
        var select = document.createElement("select");
        select.name = a;
        select.id = a;
        for (var x = 0; x < 3; x++) {
            var option = document.createElement("option");
            option.value = values[x];
            option.text = values[x].charAt(0).toUpperCase() + values[x].slice(1);
            select.appendChild(option);
        }
        return select;
    }
    document.querySelectorAll('a').forEach(function (element) {
        var href = element.getAttribute("href");
        var arr = ["ryder.com", "ryder-drivers.jobs", "usedtrucks.ryder.com", "investors.ryder.com", "reservations.ryder.com"];
        // console.log(href);
        if (href.indexOf("/") === 0 || arr.indexOf(href) > -1) { //this may need to be revised, not sure if this is the intention
            element.setAttribute("href", href + "?" + location.search.substring(1));
        }
    });
    // console.log("      - LOADED PARMS TO LINKS SCRIPTS");


    // console.log("LOAD FORM ACTION TO SUBMIT LINK");

    document.querySelectorAll('form').forEach(function (element) {
        var action = element.getAttribute("action");
        var arr = ["ryder.com", "ryder-drivers.jobs", "usedtrucks.ryder.com", "investors.ryder.com", "reservations.ryder.com"];
        // console.log(action);
        // if (action.indexOf("/") === 0 || arr.indexOf(action) > -1) { //this may need to be revised, not sure if this is the intention
        element.setAttribute("action", action + "?" + location.search.substring(1));
        //}
    });

    // URL PARAMETERS GRAB
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var source = urlParams.get('source');
    if (source != null) {
        document.getElementById("fe28237").value = source;
    }
    var sfid = urlParams.get('sfid');
    if (sfid != null) {
        document.getElementById("fe27666").value = sfid;
    } else {
        getsfid();
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if ((c.indexOf(name)) == 0) { return c.substr(name.length); }
        }
        return null;
    }

    // Logic for Warehouse Gated
    function getsfid() {
        var sfid_gdn = "7014X000002P58iQAC";
        var sfid_psearch = "7014X000002P59MQAS";
        var sfid_linkedin = "7014X000002P5A0QAK";
        var sfid_facebook = "7014X000002P58jQAC";
        var sfid_email = "7014X000002P592QAC";
        if (source == "gdn") {
            document.getElementById("fe27666").value = sfid_gdn;
        } else if (source == "psearch") {
            document.getElementById("fe27666").value = sfid_psearch;
        } else if (source == "linkedin") {
            document.getElementById("fe27666").value = sfid_linkedin;
        } else if (source == "facebook") {
            document.getElementById("fe27666").value = sfid_facebook;
        } else if (source == "email") {
            document.getElementById("fe27666").value = sfid_email;
        } else {
            document.getElementById("fe27666").value = " "
        }
    }

    var timerId = null, timeout = 5;

    function WaitUntilCustomerGUIDIsRetrieved() {
        if (!!(timerId)) {
            if (timeout == 0) {
                return;
            }
            if (typeof this.GetElqCustomerGUID === 'function') {
                document.forms["copyOf2021USELQUVSRTLForm-1645212545248"].elements["elqCustomerGUID"].value = GetElqCustomerGUID();
                return;
            }
            timeout -= 1;
        }
        timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
        return;
    }
    window.onload = WaitUntilCustomerGUIDIsRetrieved;
    _elqQ.push(['elqGetCustomerGUID']);

    function deviceInfo() {
        if (window.navigator.userAgent.match(/Mobile/i)
            || window.navigator.userAgent.match(/iPhone/i)
            || window.navigator.userAgent.match(/iPod/i)
            || window.navigator.userAgent.match(/IEMobile/i)
            || window.navigator.userAgent.match(/Windows Phone/i)
            || window.navigator.userAgent.match(/Android/i)
            || window.navigator.userAgent.match(/BlackBerry/i)
            || window.navigator.userAgent.match(/webOS/i)) {
            return ('Mobile - ' + navigator.userAgent);
        } else if (window.navigator.userAgent.match(/Tablet/i)
            || window.navigator.userAgent.match(/iPad/i)
            || window.navigator.userAgent.match(/Nexus 7/i)
            || window.navigator.userAgent.match(/Nexus 10/i)
            || window.navigator.userAgent.match(/KFAPWI/i)) {
            return ('Tablet - ' + navigator.userAgent);
        } else {
            return ('Desktop - ' + navigator.userAgent);
        }
    }


console.log("END FROM GIT 011");
