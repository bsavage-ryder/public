console.log("START FROM GIT 6");

    // Create styles for form
    if (location.pathname == "/landing-test/form-test") {

        // Create styles for form
        var styDiv = document.createElement('div');
        styDiv.innerHTML = '<style>div#formOverlayBGContainer{background:rgba(0,0,0,.5);position:fixed!important;z-index:9000;left:0;top:0;bottom:0;right:0;width:100%;transition:background .7s cubic-bezier(.55,.085,.68,.53)}div#formOverlayContainer{top:4.5rem;height:fit-content;position:absolute!important;z-index:9001;background:#fff;background:hsla(0,0%,100%,.9);bottom:18px;bottom:1.5rem;left:0;margin:auto;overflow:auto;right:0;top:72px;-ms-transform:translateX(10%);transform:translateX(10%);width:90%;transition:transform .7s cubic-bezier(.55,.085,.68,.53),opacity .7s cubic-bezier(.55,.085,.68,.53);margin-top:auto;opacity:1;-ms-transform:translateX(0);transform:translateX(0);transition:transform .5s cubic-bezier(.55,.085,.68,.53),opacity .7s cubic-bezier(.55,.085,.68,.53),background .7s cubic-bezier(.55,.085,.68,.53)}</style>';
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
        formOverlayBGContainer.innerHTML = `
        <div id="formOverlayContainer" class="form">
        <p class="message">Please tell us what you would like to know about.<br></p>
        <form novalidate="" method="POST" class="form js--module-formSniff js--module-formDefault  js--moduleLoader--loaded" action="/api/forms/eloqua" id="lease_maintenance" data="">

    <div class="max-width">

            <h2 class="heading-2 form__heading">Let Us Know How We Can Help</h2>


        <ul class="message errors-list hidden">
        </ul>

        <div class="message success hidden">
        </div>

<div class="form__copy col-xs-12">
  <p>Every business is unique and we would love to talk about how we can help yours. Please tell us a little about yourself so we can make sure the right person gives you a call.</p>
</div>
<fieldset class="form-group col-xs-12 ">

    <legend class="legend visuallyhidden">Tell us about yourself</legend>

<div class="form__input col-xs-12 col-md-6 ">
    <label for="firstName" class="visuallyhidden">first-name</label>
    <input type="text" class="form-control " id="firstName" name="firstName" placeholder="First name *" title="'first-name'" required="" aria-required="'true'" data-help-text="" minlength="0" maxlength="200" pattern="[a-zA-Z]+(?:(?:\. |, |[' -])[a-zA-Z]+)*(\.)?" data-error-div="firstName-error" data-required-error-text="" data-pattern-error-text="" value="" autocomplete="on">

        <div id="firstName-error" class="form__validation" role="alert" aria-live="assertive" style="display:none">
            <i class="form__arrow_before"></i>
            <i class="form__arrow_after"></i>
            <p></p>
        </div>
    <label class="form-field-help" for="firstName"></label>
</div><div class="form__input col-xs-12 col-md-6 ">
    <label for="lastName" class="visuallyhidden">last-name</label>
    <input type="text" class="form-control " id="lastName" name="lastName" placeholder="Last name *" title="'last-name'" required="" aria-required="'true'" data-help-text="" minlength="0" maxlength="200" pattern="[a-zA-Z]+(?:(?:\. |, |[' -])[a-zA-Z]+)*(\.)?" data-error-div="lastName-error" data-required-error-text="" data-pattern-error-text="" value="" autocomplete="on">

        <div id="lastName-error" class="form__validation" role="alert" aria-live="assertive" style="display:none">
            <i class="form__arrow_before"></i>
            <i class="form__arrow_after"></i>
            <p></p>
        </div>
    <label class="form-field-help" for="lastName"></label>
</div><div class="form__input col-xs-12 col-md-6 ">
    <label for="emailAddress" class="visuallyhidden">Email</label>
    <input type="text" class="form-control " id="emailAddress" name="emailAddress" placeholder="Email *" title="'Email'" required="" aria-required="'true'" data-help-text="" minlength="0" maxlength="200" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" data-error-div="emailAddress-error" data-required-error-text="" data-pattern-error-text="" value="" autocomplete="on">

        <div id="emailAddress-error" class="form__validation" role="alert" aria-live="assertive" style="display:none">
            <i class="form__arrow_before"></i>
            <i class="form__arrow_after"></i>
            <p></p>
        </div>
    <label class="form-field-help" for="emailAddress"></label>
</div><div class="form__input col-xs-12  col-md-3">
    <label for="busPhone" class="visuallyhidden">phone</label>
    <input type="text" class="form-control " id="busPhone" name="busPhone" placeholder="Phone *" title="'phone'" required="" aria-required="'true'" data-help-text="" minlength="0" maxlength="200" pattern="(\d{1}[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}" data-error-div="busPhone-error" data-required-error-text="Please format your phone number, ex. 1112223333" data-pattern-error-text="10-digit phone required. Please format your phone number, ex. 1112223333" value="" autocomplete="off">

        <div id="busPhone-error" class="form__validation" role="alert" aria-live="assertive" style="display:none">
            <i class="form__arrow_before"></i>
            <i class="form__arrow_after"></i>
            <p></p>
        </div>
    <label class="form-field-help" for="busPhone"></label>
</div><div class="form__input col-xs-12  col-md-3">
    <label for="zipPostal" class="visuallyhidden">zip</label>
    <input type="text" class="form-control " id="zipPostal" name="zipPostal" placeholder="Zip *" title="'zip'" required="" aria-required="'true'" data-help-text="" minlength="0" maxlength="200" pattern="((?!(0))[0-9]{5})" data-error-div="zipPostal-error" data-required-error-text="Please use 5-digit ZIP Code, ex. 12345" data-pattern-error-text="5-digit ZIP Code is required." value="" autocomplete="on">

        <div id="zipPostal-error" class="form__validation" role="alert" aria-live="assertive" style="display:none">
            <i class="form__arrow_before"></i>
            <i class="form__arrow_after"></i>
            <p></p>
        </div>
    <label class="form-field-help" for="zipPostal"></label>
</div><div class="form__input col-xs-12 col-md-6 ">
    <label for="company" class="visuallyhidden">company</label>
    <input type="text" class="form-control " id="company" name="company" placeholder="Company *" title="'company'" required="" aria-required="'true'" data-help-text="" minlength="0" maxlength="200" pattern="[a-zA-Z0-9-,.!&amp;'/?\s]+" data-error-div="company-error" data-required-error-text="" data-pattern-error-text="" value="" autocomplete="on">

        <div id="company-error" class="form__validation" role="alert" aria-live="assertive" style="display:none">
            <i class="form__arrow_before"></i>
            <i class="form__arrow_after"></i>
            <p></p>
        </div>
    <label class="form-field-help" for="company"></label>
</div><div class="form__input col-xs-12 col-md-6 ">
    <label for="title" class="visuallyhidden">title</label>
    <input type="text" class="form-control " id="title" name="title" placeholder="Title*" title="'title'" data-help-text="" minlength="0" maxlength="200" pattern="[a-zA-Z0-9-,.!&amp;'/?\s]+" data-error-div="title-error" data-required-error-text="" data-pattern-error-text="" value="" autocomplete="on">

    <label class="form-field-help" for="title"></label>
</div>    

<input type="hidden" name="formPageUrl" value="/landing-test/form-test"></fieldset>
<fieldset class="form-group col-xs-12 ">

    <legend class="legend "></legend>

<input name="sfid" type="hidden" value="7014X000002P5n6QAC">
<input name="USOURCE" type="hidden" value="">
<input name="UMEDIUM" type="hidden" value="">
<input name="UCAMPAIGN" type="hidden" value="">
<input name="UCONTENT" type="hidden" value="">
<input name="gclid" type="hidden" value="">
<input name="atsuserid" type="hidden" value="">
<input name="MemberStatus" type="hidden" value="">
<input name="VISITS" type="hidden" value="">
<input name="ILANDPAGE" type="hidden" value="">
<input name="IREFERRER" type="hidden" value="">
<input name="LREFERRER" type="hidden" value="">
<input name="EngagementType" type="hidden" value="">
<input name="formPageUrl" type="hidden" value="">
<input name="UTERM" type="hidden" value="">
<input name="" type="hidden" value="">
    

<input type="hidden" name="formPageUrl" value="/landing-test/form-test"></fieldset>
<fieldset class="form-group col-xs-12 col-md-6">

    <legend class="legend ">How soon are you ready?</legend>

<div class="radio-group c-inputs-stacked stacked">
<label class="c-input c-radio" for="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-15E003B20ACF4B6D9DCAECF4F4BB97B9">
    <input onkeydown="debugger;[37, 38, 39, 40].includes(event.keyCode) &amp;&amp; event.preventDefault(); ((event.keyCode == '38' &amp;&amp; this.parentElement.previousElementSibling.children[0].focus()) || (event.keyCode == '40' &amp;&amp; this.parentElement.nextElementSibling.children[0].focus()));" type="radio" name="DecisionTime" value="Ready Now" id="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-15E003B20ACF4B6D9DCAECF4F4BB97B9">
    <span class="c-indicator"></span>
    Ready Now
</label>
<label class="c-input c-radio" for="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-BC637C26C1BE49D59CE2E5F32AA099E3">
    <input onkeydown="debugger;[37, 38, 39, 40].includes(event.keyCode) &amp;&amp; event.preventDefault(); ((event.keyCode == '38' &amp;&amp; this.parentElement.previousElementSibling.children[0].focus()) || (event.keyCode == '40' &amp;&amp; this.parentElement.nextElementSibling.children[0].focus()));" type="radio" name="DecisionTime" value="Within Next Month" id="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-BC637C26C1BE49D59CE2E5F32AA099E3">
    <span class="c-indicator"></span>
    Within Next Month
</label>
<label class="c-input c-radio" for="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-6690D55722B945F9961AA1A1ADC5B3AF">
    <input onkeydown="debugger;[37, 38, 39, 40].includes(event.keyCode) &amp;&amp; event.preventDefault(); ((event.keyCode == '38' &amp;&amp; this.parentElement.previousElementSibling.children[0].focus()) || (event.keyCode == '40' &amp;&amp; this.parentElement.nextElementSibling.children[0].focus()));" type="radio" name="DecisionTime" value="1-3 Months" id="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-6690D55722B945F9961AA1A1ADC5B3AF">
    <span class="c-indicator"></span>
    1-3 Months
</label>
<label class="c-input c-radio" for="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-2FD82F8E6A1E417084CFCE0874C09625">
    <input onkeydown="debugger;[37, 38, 39, 40].includes(event.keyCode) &amp;&amp; event.preventDefault(); ((event.keyCode == '38' &amp;&amp; this.parentElement.previousElementSibling.children[0].focus()) || (event.keyCode == '40' &amp;&amp; this.parentElement.nextElementSibling.children[0].focus()));" type="radio" name="DecisionTime" value="3+ Months" id="3BE8B3B24D354AC88C7D3A9F3BA9BF7D-DecisionTime-2FD82F8E6A1E417084CFCE0874C09625">
    <span class="c-indicator"></span>
    3+ Months
</label>
</div>    

<input type="hidden" name="formPageUrl" value="/landing-test/form-test"></fieldset>
<div class="form__copy col-xs-12">
  <p><em>All fields marked with an asterisk (*) are required.</em></p>
</div>
<div class="form__copy col-xs-12">
  <style>
.disclaimer {
    margin-top: 20px;
}
</style>
<div class="disclaimer">
<p style="margin: 0in 0in 0.0001pt; text-align: right;"><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">We may use the information you provide to contact you about Ryder System, Inc.<br>
We do not share/sell your data. To learn more, view our <a href="https://ryder.com/privacy-policy" target="_blank" style="color:blue; text-decoration:underline">privacy policy</a>.</span></span></p>
</div>

</div>
            <div id="A682F5E48653423AAD5512DF796936BD-cptch-48" class="g-recaptcha-ctnr"></div>
    <button id="A682F5E48653423AAD5512DF796936BD" role="button" class="button " type="submit" data-text="submit"> submit</button>

            <input type="hidden" name="hostedPageUrl" value="/connect">
            <input type="hidden" name="form-id" value="{3D740B23-4C8D-4118-BC77-5AFF26990776}">
            <input type="hidden" name="apply-recaptcha" value="true">
            <input type="hidden" name="LREFERRER" id="lreferrer" value="">
            <input type="hidden" name="IREFERRER" id="ireferrer" value="">
            <input type="hidden" name="ILANDPAGE" id="ilandpage" value="">

    </div>
<div class="loader loader-invisible"><div class="loading"></div></div><input type="hidden" name="USOURCE" value="google"><input type="hidden" name="UMEDIUM" value="cpc"><input type="hidden" name="UCAMPAIGN" value="2021_UVS_Paid_Search_Brand_NO_PMT_59_days_AH_GoogleBing_LeadGen"><input type="hidden" name="UCONTENT" value="usedtrucks"><input type="hidden" name="UTERM" value="C"><input type="hidden" name="UDEVICE" value="ipohone_12"><input type="hidden" name="VISITS" value="3"></form>
        </div>`;
        document.body.appendChild(formOverlayBGContainer);

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


console.log("END FROM GIT 6");
