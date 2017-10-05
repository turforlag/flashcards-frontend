var PlayButtonAltText = "L&aelig;s markeret tekst [Alt+L]";
var HelpButtonAltText = "Hj&aelig;lp [Alt+J]";
var StopButtonAltText = "Stop opl&aelig;sning [Alt+S]";
var ConfigButtonAltText = "Indstillinger [Alt+I]";
var notextError = "Ingen tekst er markeret";
var noPopUpError = "Der er desv&aelig;rre opst&aring;et en fejl";
var SpeedHeader = "Tale hastighed";
var SpeedLevel1 = "H&oslash;j";
var SpeedLevel2 = "Normal";
var SpeedLevel3 = "Lav";
var SpeedLevel4 = "Middel h&oslash;j";
var SpeedLevel5 = "Middel lav";
var PitchHeader = "Toneh&oslash;jde";
var PitchLevel1 = "Lys stemme";
var PitchLevel2 = "Normal stemme";
var PitchLevel3 = "Dyb stemme";
var SCModeHeader = "Min internet forbindelse";
var TitleSCMode1 = 'God';
var TitleSCMode2 = 'Middel';
var TitleSCMode3 = 'D&aring;rlig';
var CloseDialog = "Luk";
var dialogheader = "Du har klikket p&aring; et dokument link";
var dialogtext = "Du har mulighed for at f&aring; dette dokument vist som HTML, og dermed mulighed for opl&aelig;sning.<br><br>&Oslash;nsker du dokumentet &aring;bnet som:";
var ashtmlbtn = "HTML";
var asorgbtn = "Originalt dokument";
var htmlviewerheader = "l&aelig;seWEB 2.0 HTML viser";
var vFact_topoffset = 0;
var vFact_leftoffset = 0;
var vFact_left_org = 0;
var sp1 = "1";
var sp2 = "2";
var sp3 = "3";
var sp4 = "4";
var sp5 = "5";
var pitch_mode_value1 = "1";
var pitch_mode_value2 = "2";
var pitch_mode_value3 = "3";
var SCMODE1 = 0;
var SCMODE2 = 1;
var SCMODE3 = 2;
var LANGUAGES = "dk";
var LICCODE = "gylir66fj7slp2kkvx9v";
var posrelativeto = "leseweb";
var olddata;
var yesnoheight = "385";
var yesnowidth = "354";
var showingdialog = false;
var indexcount = 0;
var opacity = 10;
var htmlviewerheight = "550";
var htmlviewerwidth = "750";
var ConfigWindowHeight = 65;
var ConfigWindowWidth = 140;
var const_pafplayerscmode = 'pafplayerscmode';
var const_pafplayerspeed = 'pafplayerspeed';
var OptionSearchInFrames = 1;
var OptionUsePopupWindow = 1;
var pafplaystatus;
var themp3file;
var PAFhelpurl = "http://help.leseweb.dk/?id=dk";
var PAFpitch;
var PAFspeed;
var PAFlicense;
var PAFPlayer = null;
var textToRead = "";
var iframe, iframeDocument;
var iframeID = "MyHiddenIFrame";
var extendedplayer = false;
var usedesign = 0;
var iswindows = true;
var PlayerSpeed;
var eventFunction = '';
var PopupWindowInstance;
var lesewebactive = true;
var olddok;
var textencoding = "";
var vFact_active = true;
var vFact_usedefaultacticon = false;
var vFact_usedefaultdacticon = false;
var vFact_acticon = "";
var vFact_dacticon = "";
var vFact_empty = "";
var vFact_emptyplay = "";
var vFact_minilic = "";
var vFact_UseLang = false;
var vFact_AlwaysShowConverter = false;
var vFact_ClearAllForms = true;
var vFact_fixedpos = true;
var vFact_FirefoxPos = "fixed";
var vFact_cookie = true;
var Vfact_DefaultGender = "M";
var vFact_GenderTitle = "Mand/kvinde stemme";
var vFact_LanguageTitle = "Benyt sprog";
var vFact_ConvertTitle = "Konverter altid dokumenter til <br>opl&aelig;sbart format";
var vFact_MaleValue = "M";
var vFact_FemaleValue = "K";
var vFact_Configheader = "Mine indstillinger";
var vFact_Configtext = "Denne dialog giver dig mulighed for at indstille dine egne pr&aelig;ferencer for opl&aelig;sning";
var vFact_Current_Speedsetting = "";
var vFact_Current_Pitchsetting = "";
var vFact_Current_InternetSetting = "";
var vFact_Current_GenderSetting = "";
var vFact_Current_LanguageSetting = "";
var vFact_Current_ConvMode = "";
var vFact_AllowConv = false;
var vFact_SettingsLoaded = 0;
if (vFact_fixedpos) {
    vFact_FirefoxPos = "absolute";
}
var vfact_playkey = "l";
var vfact_stopkey = "s";
var vfact_helpkey = "j";
var vfact_settingskey = "i";
var vFact_AllowHighLight = true;
var vFact_HighLight_title = "Ord markering farve";
var vFact_HighLightColor = "#0041a2";
var vFact_SentenceColor = "#FF3";
var vFact_HighlightMode = 3;
var vFact_HighlightselectTitle = "Fremh&aelig;vning";
var vFact_AllowAutoplay = false;
var Vfact_DefaultAutoplay = false;
var vFact_Current_AutoplaySetting = "";
var vFact_AllowAutoscroll = true;
var vFact_AutoPlayDisabled = "Peg og lyt deaktiveret";
var vFact_AutoPlayEnabled = "Peg og lyt aktiveret";
var vFact_AutoplayTitle = "Peg og lyt";
var vFact_AllowReadImgAltText = false;
/** listDomains is a list of "domain, weight"-items * i.e. ["domain1", 25, "domain2", 50, "domain3", 100] * This list is created dynamically on the server side. * Main Server replaces http to https in http://speech.leseweb.dk, * so we need to substitute correct protocol to all generated urls. * Converter uses default main server always. * * @return: randomly selected domain name with taken into account its weight * */
function vFact_selectTargetMainServer(listDomains, defaultDomain) {
    if (listDomains.length !== 0) {
        try {
            var max = Number(listDomains[listDomains.length - 1]);
            var value = Math.random() * max;
            for (var i = 0; i < listDomains.length / 2; ++i) {
                if (value < listDomains[i * 2 + 1]) {
                    return defaultDomain.split(':')[0] + "://" + listDomains[i * 2] + "/";
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
    return defaultDomain;
}
var vFactServer = vFact_selectTargetMainServer(["speech1.leseweb.dk", 30, "speech2.leseweb.dk", 60, "speech3.leseweb.dk", 100], "https://speech2.leseweb.dk/");
var vFactRawFiles = vFactServer + "rawfiles/";
var vFactGetWmm = vFactServer + "player/mediaplayer.vf";
var vFactGetFlash = vFactServer + "player/mediaplayer.flash";
var vFactConverter = "https://speech2.leseweb.dk/".split(':')[0] + "://" + "converter.leseweb.dk/converter/convert.vf";
var actdefault = vFactRawFiles + 'sound_on.gif';
var dactdefault = vFactRawFiles + 'sound_off.gif';
var regHeadings = /<\/h[1-3]>/gi;
var regExp = /<\/?[^>]+>/gi;
var regScript = /<script[^>]*?>[\s\S]*?<\/script>/gi;
var regStyle = /<style[^>]*?>[\s\S]*?<\/style>/gi;
var generatedpadid = "";
var vFact_Forcelanguage = "";
var vFact_extisplaying = false;
var vFact_isdoubleclick = false;
/***********************************************************************************************************/
/*TODO: move all not-HTML5 internal functions here*/
(function(vFactInternal, undefined) {
    "use strict";
    function formcode(atext) {
        if (vFact_Current_LanguageSetting != "auto") {
            vFact_Forcelanguage = vFact_Current_LanguageSetting
        }
        /*else {vFact_Forcelanguage=""}*/
        var code = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\">";
        code = code + "<html><head><META HTTP-EQUIV=\"Content-Type\" content=\"text/html; charset=UTF-8\"></head><body>";
        code = code + "<form id=startplay name=test action=\"" + vFactGetPlayer() + "\" method=post>";
        code = code + "<input type=hidden name=text ID=\"text\" value=\"" + atext + "\">";
        code = code + "<input type=hidden name=speechmode ID=\"speechmode\" value=\"" + vFact_Current_Speedsetting + "\">";
        code = code + "<input type=hidden name=pitchmode ID=\"pitchmode\" value=\"" + vFact_Current_Pitchsetting + "\">";
        code = code + "<input type=hidden name=lic VALUE=\"" + LICCODE + "\" ID=\"lic\">";
        code = code + "<input type=hidden name=conmode ID=\"conmode\" value=\"" + vFact_Current_InternetSetting + "\">";
        code = code + "<input type=hidden name=voices ID=\"voices\" value=\"dk\">";
        code = code + "<input type=hidden value=\"" + document.location.href + "\" name=domain>";
        code = code + "<input type=hidden value=\"" + vFact_Current_GenderSetting + "\" name=gender>";
        code = code + "<input type=hidden value=\"" + vFact_Current_AutoplaySetting + "\" name=autoplay>";
        generatedpadid = "";
        var vfplay = vFact_GetBestplayer();
        if (vfplay == 'WMP') {
            if (vFact_checkOS() != "Win") {
                code = code + "<input type=hidden value=\"xml\" name=listtype>";
            } else {
                if (Vfact_IsFirefox()) {
                    code = code + "<input type=hidden value=\"xml\" name=listtype>";
                } else {
                    code = code + "<input type=hidden value=\"asx\" name=listtype>";
                }
            }
        } else {
            generatedpadid = vFact_makeid();
            code = code + "<input type=hidden value=\"pad\" name=listtype>";
            code = code + "<input type=hidden value=\"" + generatedpadid + "\" name=padid>"
        }
        if (vFact_UseLang || (vFact_Forcelanguage != "")) {
            if (vFact_UseLang) {
                code = code + "<input type=hidden value=\"" + vFact_GetLanguageTag() + "\" name=uselangtag>";
            } else {
                code = code + "<input type=hidden value=\"" + vFact_Forcelanguage + "\" name=uselangtag>";
            }
        }
        code = code + "</form></body></html>";
        vFact_Forcelanguage = "";
        return code;
    }
    function addIframe(textdata) {
        var fw = "1";
        var fh = "1";
        var fb = "0";
        vFact_removeiframe();
        if (document.createElement) {
            try {
                var tempIFrame = document.createElement('iframe');
                tempIFrame.setAttribute('id', iframeID);
                tempIFrame.setAttribute('title', 'leseWEB player');
                tempIFrame.style.border = fb + 'px';
                tempIFrame.style.width = fw + 'px';
                tempIFrame.style.height = fh + 'px';
                if (document.body.appendChild) {
                    iframe = document.body.appendChild(tempIFrame);
                }
                if (document.documentElement.appendChild) {
                    iframe = document.documentElement.appendChild(tempIFrame);
                }
                if (document.frames) {
                    iframe = document.frames[iframeID];
                }
            } catch (ex) {
                var iframeHTML = '\<iframe title="leseWEB player" id="' + iframeID + '"';
                iframeHTML += ' style="border:' + fb + 'px; width:' + fw + 'px; height:' + fh + 'px;';
                iframeHTML += '"><\/iframe>';
                document.body.innerHTML += iframeHTML;
                iframe = new Object();
                iframe.document = new Object();
                iframe.document.location = new Object();
                iframe.document.location.iframe = document.getElementById(iframeID);
                iframe.document.location.replace = function(location) {
                    this.iframe.src = location;
                }
            }
            try {
                if (vFact_isopera()) {
                    vFact_pause(200);
                    frames[iframeID].document.writeln(textdata);
                    frames[iframeID].document.getElementById('startplay').submit();
                } else {
                    if (iframe.contentDocument) {
                        iframeDocument = iframe.contentDocument;
                    } else if (iframe.contentWindow) {
                        iframeDocument = iframe.contentWindow.document;
                    } else if (iframe.document) {
                        iframeDocument = iframe.document;
                    }
                    iframeDocument.writeln(textdata);
                    iframeDocument.getElementById('startplay').submit();
                    var is_IE9 = (navigator.userAgent.indexOf("MSIE") != -1);
                    if (!is_IE9) {
                        /*#t22: IE9 could hang here*/
                        iframeDocument.close();
                    }
                }
            } catch (e) {
                alert("fejl");
            }
        }
    }
    /** play using not html5 player */
    function startplay(afile) {
        vFact_pause(1000);
        loadPlayer(afile);
        /*vFact_audioPlayer.play();*/
        document.getElementById('vfactAudioPlayer').play();
    }
    vFactInternal.showPlayerPopup = function(textdata) {
        try {
            var tempdata = textdata;
            var pcode = formcode(escape(tempdata));
            addIframe(pcode);
            if (generatedpadid != "") {
                var afile = vFactServer + 'pad/' + generatedpadid + '.mp3';
                startplay(afile);
            }
        } catch (e) {
            alert(noPopUpError)
        }
    }
    ;
    vFactInternal.getAltText = function() {
        var thetext;
        if (vFact_emptyplay != "") {
            var ids = vFact_emptyplay.split(",");
            var vFact_IdLength = ids.length;
            thetext = "";
            for (var i = 0; i <= vFact_IdLength - 1; i++) {
                try {
                    if (document.getElementById(ids[i])) {
                        thetext = thetext + vFact_Create_Selection(document.getElementById(ids[i]));
                    }
                } catch (e) {}
            }
            return thetext;
        } else if (document.getElementById('vfactAltText')) {
            thetext = document.getElementById('vfactAltText').innerHTML;
            return thetext;
        } else
            return "";
    }
    ;
}(window.vFactInternal = window.vFactInternal || {}));
/***********************************************************************************************************/
/*TODO: move all HTML5 internal functions here*/
(function(vFactInternalHtml5, undefined) {
    "use strict";
    vFactInternalHtml5.getPlayingOptions = function() {
        return {
            Lang: vFact_Forcelanguage != "" ? vFact_Forcelanguage : vFact_UseLang ? vFact_GetLanguageTag() : "",
            ColorWords: vFact_AllowHighLight && (vFact_HighlightMode == 1 || vFact_HighlightMode == 3) ? vFact_HighLightColor : null,
            ColorSentences: vFact_AllowHighLight && (vFact_HighlightMode == 2 || vFact_HighlightMode == 3) ? vFact_SentenceColor : null,
            ColorDots: vFact_HighlightMode === 0 ? null : vFact_HighLightColor
        };
    }
    ;
    /** if ids is null then play selected text * if ids is not null, play all items with specified id * return false if arrayIds are defined, but there no item from arrayIds can be found on the page. * */
    vFactInternalHtml5.showPlayerPopupHtml5 = function(arrayIds) {
        try {
            var options = vFactInternalHtml5.getPlayingOptions();
            var txt;
            if (arrayIds === undefined) {
                txt = vFact_HTML5Player.getSelectedText();
            } else {
                txt = vFact_HTML5Player.getTextForSpecifiedItems(arrayIds);
                if (txt === null) {
                    /* we can't find any item from arrayIds */
                    return false;
                }
            }
            if (txt) {
                vFact_HTML5Player.Play(escape(txt), options.Lang, vFact_Current_Speedsetting, vFact_Current_InternetSetting, vFact_Current_GenderSetting, LICCODE, document.location.href, options.ColorWords, options.ColorSentences, vFact_Current_Pitchsetting, vFact_AllowAutoscroll, options.ColorDots);
            }
        } catch (e) {
            alert(noPopUpError)
        }
        return true;
    }
    ;
}(window.vFactInternalHtml5 = window.vFactInternalHtml5 || {}));
/******************************************************************************************************************/
/*public api: Will read the text in the specified element or read selected text*/
function vFact_playsectionEXT(id) {
    if (vFact_isdoubleclick) {} else {
        if (vFact_extisplaying) {
            vFact_removeiframe();
            vFact_extisplaying = false;
            vFact_isdoubleclick = false;
        } else {
            try {
                vFact_removeiframe();
                vFact_isdoubleclick = true;
                setTimeout("vFact_isdoubleclick=false;", 3000);
                vFact_extisplaying = true;
                setTimeout("vFact_extisplaying=false;", 12000);
                pafplaystatus = "0";
                var thetext = vFact_getSel();
                if (thetext == "") {
                    thetext = vFact_PlayThis(id);
                }
                if (thetext == "") {
                    alert(notextError);
                } else {
                    if (vFact_HTML5Player.detectHTML5Audio()) {
                        vFactInternalHtml5.showPlayerPopupHtml5();
                    } else {
                        vFactInternal.showPlayerPopup(thetext);
                    }
                }
            } catch (e) {/* */
            }
        }
    }
}
/* public api: Will read the specified element*/
function vFact_playsection(id) {
    try {
        pafplaystatus = "0";
        extendedplayer = false;
        /*it's declared in vars*/
        var thetext = vFact_PlayThis(id);
        if (thetext == "") {
            alert(notextError);
        } else {
            if (vFact_HTML5Player.detectHTML5Audio()) {
                vFactInternalHtml5.showPlayerPopupHtml5();
            } else {
                vFactInternal.showPlayerPopup(thetext);
            }
        }
    } catch (e) {/* */
    }
    extendedplayer = true;
    /*it's declared in vars*/
}
/* public api: Will read selected text or the default text element set in the control panel*/
function vFact_doplay() {
    try {
        pafplaystatus = "0";
        var thetext = vFact_getSel();
        if (thetext == "") {
            if (vFact_HTML5Player.detectHTML5Audio()) {
                var array_ids = vFact_emptyplay ? vFact_emptyplay.split(/[,;]/) : [];
                if (array_ids.length === 0 || !vFactInternalHtml5.showPlayerPopupHtml5(array_ids)) {
                    alert(notextError);
                }
            } else {
                thetext = vFactInternal.getAltText();
                if (thetext == "") {
                    alert(notextError);
                } else {
                    vFactInternal.showPlayerPopup(thetext);
                }
            }
        } else {
            if (vFact_HTML5Player.detectHTML5Audio()) {
                vFactInternalHtml5.showPlayerPopupHtml5();
            } else {
                vFactInternal.showPlayerPopup(thetext);
            }
        }
    } catch (e) {/* */
    }
}
/* public api: Will stop the reading aloud*/
function vFact_dostop() {
    vFact_removeiframe();
    if (vFact_AudioPlayer.detectHTML5Audio()) {
        /* if (vFact_GetBestplayer()=='HTML5'){ */
        /* vFact_removeElement("vfactAudioPlayer"); */
        vFact_HTML5Player.Stop();
    }
}
/* public api: Will show the help text as set in the control panel*/
function vFact_dohelp() {
    window.open(PAFhelpurl, 'helpwin');
}
/* public api: Will set custom parameters for a single read * SP(Reading speed) takes values: 1,2,3,4,5 * G(Gender) takes values: M, F * Q(quality/internetspeed) takes values: 0, 1, 2 * pitchMode (pitch mode) takes values: 1, 2, 3 * */
function vfact_SetCustomParams(SP, G, Q, pitchMode) {
    extendedplayer = true;
    vFact_Current_Speedsetting = SP;
    vFact_Current_InternetSetting = Q;
    vFact_Current_GenderSetting = G;
    vFact_Current_Pitchsetting = pitchMode;
}
/******************************************************************************************************************/
function ReplaceTags(xStr) {
    xStr = xStr.replace(regHeadings, ". ");
    xStr = xStr.replace(regScript, "");
    xStr = xStr.replace(regExp, "");
    xStr = xStr.replace(regStyle, "");
    return xStr;
}
function vFact_Create_Selection(elem) {
    return vFact_encode_to_utf8(ReplaceTags(elem.innerHTML));
}
function vFact_GetLanguageTag() {
    var nameAttribute;
    var metaCollection = document.getElementsByTagName('meta');
    for (var i = 0; i < metaCollection.length; i++) {
        nameAttribute = metaCollection[i].httpEquiv.search(/language/);
        if (nameAttribute != -1) {
            return metaCollection[i].content;
        }
    }
}
function vFact_findPos(obj) {
    var curleft = 0;
    var curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
        while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
    }
    return [curleft, curtop];
}
function vFact_closedialogs() {
    vFact_removeiframe();
    document.location.reload(true);
}
function vFact_getSel() {
    try {
        vFactclearForms();
        var s = vFact_getSel2();
        return vFact_encode_to_utf8(s);
    } catch (e) {
        return ""
    }
}
function vFactclearForms() {
    if (vFact_ClearAllForms) {
        var i;
        for (i = 0; (i < document.forms.length); i++) {
            document.forms[i].reset();
        }
    }
}
/*TODO: use function from utils?? Take a look on OptionSearchInFrames, utils function doesn't implement it */
function vFact_getSel2() {
    var txt = '';
    if (window.getSelection) {
        txt = window.getSelection();
        if (txt != '')
            return txt;
    }
    if (document.getSelection) {
        txt = document.getSelection();
        if (txt != '')
            return txt;
    }
    if (document.selection) {
        txt = document.selection.createRange().text;
        if (txt != '')
            return txt;
    }
    if (OptionSearchInFrames) {
        var topmost_parent = window.parent;
        while (window.parent) {
            if (topmost_parent.parent == topmost_parent || topmost_parent.parent == null)
                break;
            topmost_parent = topmost_parent.parent;
        }
        if (topmost_parent.window.frames) {
            return vFact_get_selected_text_from_frames(topmost_parent.window.frames);
        }
    }
    return txt;
}
function vFact_GetTheSelectedText(aWindow) {
    try {
        var selection = vFact_getSel(aWindow);
        if (selection != "")
            return selection;
        var forms = aWindow.frames;
        if (forms) {
            for (var i = 0; ((i < forms.length)); i++) {
                selection = vFact_GetTheSelectedText(forms[i]);
                if (selection != "")
                    return selection;
            }
        }
    } catch (e) {
        alert("Selectfejl")
    } finally {}
    return "";
}
function vFact_getText() {
    textToRead = vFact_getSel(window.top);
}
function vFact_getthetop() {
    if (window.pageYOffset)
        return window.pageYOffset;
    else if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    else if (document.body)
        return document.body.scrollTop;
}
function getColorCookie(list, vari) {
    var data = "";
    for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf(vari) != -1) {
            var tdata = list[i].split("=");
            if (tdata.length == 2) {
                data = tdata[1]
            } else {
                data = "#3FF"
            }
        }
    }
    return data;
}
function getLanguageCookie(list) {
    var data = "";
    for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf("language") != -1) {
            var tdata = list[i].split("=");
            if (tdata.length == 2) {
                data = tdata[1]
            } else {
                data = "auto"
            }
        }
    }
    return data;
}
function getConvModeCookie(list) {
    var data = "";
    for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf("convmode") != -1) {
            var tdata = list[i].split("=");
            if (tdata.length == 2) {
                data = tdata[1]
            } else {
                data = "2"
            }
        }
    }
    return data;
}
function vFact_ReadSettingCookie() {
    if (vFact_SettingsLoaded == 0) {
        vFact_Current_Speedsetting = "";
        vFact_Current_GenderSetting = "";
        vFact_Current_InternetSetting = "";
        vFact_Current_LanguageSetting = "";
        vFact_Current_AutoplaySetting = "";
        vFact_Current_Pitchsetting = "";
        var list_cookies = document.cookie.split("; ");
        for (var i = 0; i < list_cookies.length; i++) {
            var cook = list_cookies[i];
            if (cook == "speed=sp1") {
                vFact_Current_Speedsetting = sp1
            } else if (cook == "speed=sp2") {
                vFact_Current_Speedsetting = sp2
            } else if (cook == "speed=sp3") {
                vFact_Current_Speedsetting = sp3
            } else if (cook == "speed=sp4") {
                vFact_Current_Speedsetting = sp4
            } else if (cook == "speed=sp5") {
                vFact_Current_Speedsetting = sp5
            } else if (cook == "scmode=SCMODE1") {
                vFact_Current_InternetSetting = SCMODE1
            } else if (cook == "scmode=SCMODE2") {
                vFact_Current_InternetSetting = SCMODE2
            } else if (cook == "scmode=SCMODE3") {
                vFact_Current_InternetSetting = SCMODE3
            } else if (cook == "gender=M") {
                vFact_Current_GenderSetting = "M"
            } else if (cook == "gender=F") {
                vFact_Current_GenderSetting = "F"
            } else if (cook == "autoplay=1") {
                vFact_Current_AutoplaySetting = "1"
            } else if (cook == "autoplay=0") {
                vFact_Current_AutoplaySetting = "0"
            } else if (cook == "pitchmode=pitch_mode_value1") {
                vFact_Current_Pitchsetting = pitch_mode_value1;
            } else if (cook == "pitchmode=pitch_mode_value2") {
                vFact_Current_Pitchsetting = pitch_mode_value2;
            } else if (cook == "pitchmode=pitch_mode_value3") {
                vFact_Current_Pitchsetting = pitch_mode_value3;
            }
        }
        vFact_Current_LanguageSetting = getLanguageCookie(list_cookies);
        vFact_Current_ConvMode = getConvModeCookie(list_cookies);
        var thecolor = getColorCookie(list_cookies, "highlightcolor");
        if (thecolor == "") {} else {
            vFact_HighLightColor = thecolor
        }
        thecolor = getColorCookie(list_cookies, "sentencecolor");
        if (thecolor == "") {} else {
            vFact_SentenceColor = thecolor
        }
        thecolor = getColorCookie(list_cookies, "highlightmode");
        if (thecolor == "") {} else {
            vFact_HighlightMode = thecolor
        }
        if (vFact_Current_Speedsetting == "") {
            vFact_Current_Speedsetting = sp2
        }
        if (vFact_Current_GenderSetting == "") {
            vFact_Current_GenderSetting = Vfact_DefaultGender
        }
        if (vFact_Current_AutoplaySetting == "") {
            vFact_Current_AutoplaySetting = Vfact_DefaultAutoplay
        }
        if (vFact_Current_InternetSetting == "") {
            vFact_Current_InternetSetting = SCMODE1
        }
        if (vFact_Current_Pitchsetting == "") {
            vFact_Current_Pitchsetting = pitch_mode_value2;
        }
        vFact_SettingsLoaded = 1;
    }
}
function WritevFactSettingsCookie(Speed, ScMode, Gender, language, convmode, autoplay, pitchMode) {
    if (vFact_cookie) {
        var sdate = "expires=Fri, 27 Jul 2050 02:47:11 UTC;";
        if (Speed == sp1) {
            document.cookie = "speed=sp1;" + sdate + "path=/"
        } else if (Speed == sp2) {
            document.cookie = "speed=sp2;" + sdate + "path=/"
        } else if (Speed == sp3) {
            document.cookie = "speed=sp3;" + sdate + "path=/"
        } else if (Speed == sp4) {
            document.cookie = "speed=sp4;" + sdate + "path=/"
        } else if (Speed == sp5) {
            document.cookie = "speed=sp5;" + sdate + "path=/"
        }
        if (ScMode == SCMODE1) {
            document.cookie = "scmode=SCMODE1;" + sdate + "path=/"
        }
        if (ScMode == SCMODE2) {
            document.cookie = "scmode=SCMODE2;" + sdate + "path=/"
        }
        if (ScMode == SCMODE3) {
            document.cookie = "scmode=SCMODE3;" + sdate + "path=/"
        }
        if (Gender == "M") {
            document.cookie = "gender=M;" + sdate + "path=/"
        } else if (Gender == "F") {
            document.cookie = "gender=F;" + sdate + "path=/"
        }
        if (autoplay == "1") {
            document.cookie = "autoplay=1;" + sdate + "path=/";
            vFact_start_setAutoPlayMode_with_current_settings();
        } else if (autoplay == "0") {
            document.cookie = "autoplay=0;" + sdate + "path=/";
            vFact_HTML5Player.disableAutoPlayMode();
        }
        if (pitchMode == pitch_mode_value1) {
            document.cookie = "pitchmode=pitch_mode_value1;" + sdate + "path=/"
        } else if (pitchMode == pitch_mode_value2) {
            document.cookie = "pitchmode=pitch_mode_value2;" + sdate + "path=/"
        } else if (pitchMode == pitch_mode_value3) {
            document.cookie = "pitchmode=pitch_mode_value3;" + sdate + "path=/"
        }
        document.cookie = "language=" + language + ";" + sdate + "path=/";
        document.cookie = "convmode=" + convmode + ";" + sdate + "path=/";
        document.cookie = "highlightcolor=" + vFact_HighLightColor + ";" + sdate + "path=/";
        document.cookie = "sentencecolor=" + vFact_SentenceColor + ";" + sdate + "path=/";
        document.cookie = "highlightmode=" + vFact_HighlightMode + ";" + sdate + "path=/";
    }
}
function vFact_checktoolbar() {
    if (vFact_isie() && lesewebactive) {
        if (!vFact_fixedpos) {
            var theTop = vFact_getthetop();
            theTop = theTop + vFact_topoffset;
            document.getElementById('PAFTOOLBAR').style.top = theTop + 'px';
        }
    }
    if (posrelativeto != "") {
        try {
            var thisone = document.getElementById(posrelativeto);
            var therelplace = vFact_findPos(thisone);
            var theleft = vFact_left_org + therelplace[0];
            document.getElementById('PAFTOOLBAR').style.left = theleft + 'px';
        } catch (e) {}
    }
    setTimeout("vFact_checktoolbar()", 5);
}
function vFact_checkviewtoolbar() {
    if (vFact_isie()) {
        var theTop = vFact_getthetop();
        theTop = theTop + vFact_topoffset;
        document.getElementById('PAFTOOLBARA').style.top = theTop + 'px';
        setTimeout("vFact_checkviewtoolbar()", 10);
    }
}
function writeActcookie(value) {
    if (vFact_cookie) {
        var sdate = "expires=Fri, 27 Jul 2050 02:47:11 UTC;";
        try {
            document.cookie = "leseactive=" + value + ";" + sdate + "path=/";
        } catch (e) {}
    }
}
function readActCookie() {
    var list_cookies = document.cookie.split("; ");
    var vFact_active = false;
    for (var i = 0; i < list_cookies.length; i++) {
        var cook = list_cookies[i];
        if (cook == "leseactive=true") {
            vFact_active = true
        }
    }
    return vFact_active;
}
function vFact_removeleseweb() {
    writeActcookie('false');
    var test = document.location.href;
    document.location.href = test;
}
function vFact_addHTMLToPage(html) {
    if (document.all)
        document.body.insertAdjacentHTML('beforeEnd', html);
    else if (document.createRange) {
        var range = document.createRange();
        range.setStartAfter(document.body.lastChild);
        var cFrag = range.createContextualFragment(html);
        document.body.appendChild(cFrag);
    } else if (document.layers) {
        var X = new Layer(window.innerWidth);
        X.document.open();
        X.document.write(html);
        X.document.close();
        X.top = document.height;
        document.height += X.document.height;
        X.visibility = 'show';
    }
}
function vFact_insertleseweb() {
    var code;
    if (vFact_isie()) {
        code = ietoolbarcode1();
    } else if (vFact_isopera()) {
        code = operatoolbarcode1();
    } else {
        code = notietoolbarcode1();
    }
    vFact_addHTMLToPage(code);
    vFact_checktoolbar();
    writeActcookie('true');
}
function vFact_leseAct() {
    if (vFact_active) {
        vFact_active = false;
        vFact_removeleseweb();
        if (vFact_empty != "") {
            vFact_activatetoolbar(document.getElementById(vFact_empty));
        }
    } else {
        vFact_active = true;
        vFact_insertleseweb();
        if (vFact_empty != "") {
            vFact_activatetoolbar(document.getElementById(vFact_empty));
        }
    }
}
function vFact_leseWebAct() {
    if (vFact_active) {
        vFact_active = false;
        vFact_removeleseweb();
    } else {
        vFact_active = true;
        vFact_insertleseweb();
    }
}
function vFact_activatetoolbar(place) {
    if (place != null) {
        if (vFact_active) {
            if (vFact_usedefaultdacticon) {
                place.innerHTML = '<span onclick="vFact_leseAct()" style="cursor:pointer;WIDTH:30px;HEIGHT:30px" title=""><img src="' + dactdefault + '" alt="" border=0></span>';
            } else {
                place.innerHTML = '<span onclick="vFact_leseAct()" style="cursor:pointer" title=""><img src="' + vFact_dacticon + '" alt="" border=0></span>';
            }
        } else {
            if (vFact_usedefaultacticon) {
                place.innerHTML = '<span onclick="vFact_leseAct()" style="cursor:pointer;WIDTH:30px;HEIGHT:30px" title=""><img alt="" src="' + actdefault + '" border=0></span>';
            } else {
                place.innerHTML = '<span onclick="vFact_leseAct()" style="cursor:pointer" title=""><img src="' + vFact_acticon + '" alt="" border=0></span>';
            }
        }
    }
}
/*!TODO: use function from utils*/
function vFact_MakeSelection(id) {
    var range = document.createRange();
    range.selectNodeContents(document.getElementById(id));
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
/*!TODO: use function from utils*/
/* http://stackoverflow.com/questions/6186844/clear-a-selection-in-firefox/6187098#6187098 */
function vFact_ClearSelection() {
    if (window.getSelection) {
        if (window.getSelection().empty) {
            /* Chrome */
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {
            /* Firefox */
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) {
        /* All browsers */
        document.selection.empty();
    }
}
function vFact_PlayThis(id) {
    if (vFact_HTML5Player.detectHTML5Audio()) {
        vFact_MakeSelection(id);
        return "found";
    } else {
        var thetext = vFact_Create_Selection(document.getElementById(id));
        return thetext;
    }
}
function vFact_openWin(fileName, windowName) {
    return window.open(fileName, windowName, 'width=320,height=100,directories=no,location=no,menubar=no,scrollbars=no,status=no,toolbar=no,resizable=no');
}
try {
    var vFact_audioPlayer = new Audio();
} catch (e) {/* */
}
function loadPlayer(afile) {
    vFact_audioPlayer.id = "vfactAudioPlayer";
    /*audioPlayer.controls="con";*/
    vFact_audioPlayer.src = afile;
    /*document.getElementById("PAFTOOLBAR").appendChild(vFact_audioPlayer);*/
    document.getElementsByTagName('body')[0].appendChild(vFact_audioPlayer);
}
function vFactGetPlayer() {
    if ((vFact_checkOS() != "Win") || (Vfact_IsFirefox())) {
        return vFactGetFlash;
    } else {
        return vFactGetWmm;
    }
}
function vFact_iframecodes() {
    var code = "<iframe name=\"pafiframe\" id=\"pafiframe\" style=\"WIDTH:100px;HEIGHT:100px;BORDER:5px\"></iframe>";
    return code;
}
function close_configuration_window() {
    document.getElementById('configpage').style.visibility = 'hidden';
    if (OptionUsePopupWindow) {
        if (PopupWindowInstance) {
            PopupWindowInstance.close();
        }
    }
}
/* this function receives callback from detect.js when it's loaded This function should call SetAutoPlayMode in vFact_HTML5Player with needed params, cookie is already loaded at this point.*/
function vFact_globalfunctions_AutoPlayInitalization() {
    /*console.log('vFact_globalfunctions_AutoPlayInitalization', vFact_AllowAutoplay, vFact_Current_AutoplaySetting);*/
    if (vFact_AllowAutoplay && (vFact_Current_AutoplaySetting == "1")) {
        vFact_start_setAutoPlayMode_with_current_settings();
    }
}
function vFact_start_setAutoPlayMode_with_current_settings() {
    /*console.log('vFact_start_setAutoPlayMode_with_current_settings');*/
    var alang = vFact_Forcelanguage != "" ? vFact_Forcelanguage : vFact_UseLang ? vFact_GetLanguageTag() : "";
    var color1 = vFact_AllowHighLight && (vFact_HighlightMode == 1 || vFact_HighlightMode == 3) ? vFact_HighLightColor : null;
    var color2 = vFact_AllowHighLight && (vFact_HighlightMode == 2 || vFact_HighlightMode == 3) ? vFact_SentenceColor : null;
    vFact_AudioPlayer.setAutoPlayMode(alang, vFact_Current_Speedsetting, vFact_Current_InternetSetting, vFact_Current_GenderSetting, LICCODE, document.location.href, color1, color2, vFact_Current_Pitchsetting, vFact_AllowAutoscroll)
}
vFact_AudioPlayer = {
    player: '',
    player_id: 'vFact_AudioplayerID',
    CanPlay: false,
    iFrameID: 'vFact_audioFrame',
    iframe: '',
    HProtocol: '',
    FileRoot: '//' + (function extract_hostname(url) {
        if (url.indexOf("://") > -1) {
            return url.split('/')[2];
        } else {
            return url;
        }
    }(vFactServer)) + '/rawfiles/',
    htmlbase: '',
    highlight_color: '',
    init: function(protocol, highlight_color) {
        this.highlight_color = highlight_color;
        this.htmlbase = protocol + this.FileRoot;
        this.HProtocol = protocol;
        this.insertFrame();
    },
    vFact_encode_to_utf8: function(SrcStr) {
        return unescape(encodeURIComponent(SrcStr));
    },
    detectHTML5Audio: function() {
		var frame = document.getElementById(this.iFrameID);
		if (frame != undefined){
			return document.getElementById(this.iFrameID).contentWindow.vFactDetect2.vFact_detectHTML5Audio();
		}
		console.warn("HTML5 Audio Fail to load");
        return false;
    },
    frameData: function() {
        var code = "<!DOCTYPE html>";
        code = code + "<html><head><META HTTP-EQUIV=\"Content-Type\" content=\"text/html; charset=UTF-8\">";
        code = code + "<script type='text/javascript' src='" + this.htmlbase + "extern2.js'></script>";
        code = code + "<script type='text/javascript' src='" + this.htmlbase + "vfact2.js'></script>";
        code = code + "</head><body><audio id=vfact_testaudio controls> not supported</audio>";
        code = code + "<h1>Her er framen</h1></body></html>";
        return code;
    },
    insertFrame: function() {
        var fw = "0";
        var fh = "0";
        var fb = "0";
        if (document.createElement) {
            try {
                var tempIFrame = document.createElement('iframe');
                tempIFrame.setAttribute('id', this.iFrameID);
                tempIFrame.setAttribute('title', 'leseWEB_player');
                tempIFrame.style.border = fb + 'px';
                tempIFrame.style.width = fw + 'px';
                tempIFrame.style.height = fh + 'px';
                if (document.body.appendChild) {
                    iframe = document.body.appendChild(tempIFrame);
                } else if (document.documentElement.appendChild) {
                    iframe = document.documentElement.appendChild(tempIFrame);
                } else if (document.frames) {
                    iframe = document.frames[this.iFrameID];
                }
            } catch (ex) {
                var iframeHTML = '\<iframe title="leseWEB_player" id="' + this.iFrameID + '"';
                iframeHTML += ' style="border:' + fb + 'px; width:' + fw + 'px; height:' + fh + 'px;';
                iframeHTML += '"><\/iframe>';
                document.body.innerHTML += iframeHTML;
                iframe = new Object();
                iframe.document = new Object();
                iframe.document.location = new Object();
                iframe.document.location.iframe = document.getElementById(this.iFrameID);
            }
            try {
                if (iframe.contentDocument) {
                    iframeDocument = iframe.contentDocument;
                } else if (iframe.contentWindow) {
                    iframeDocument = iframe.contentWindow.document;
                } else if (iframe.document) {
                    iframeDocument = iframe.document;
                }
                iframeDocument.writeln(this.frameData());
                var is_IE9 = (navigator.userAgent.indexOf("MSIE") != -1);
                if (!is_IE9) {
                    /*#t22: IE9 could hang here*/
                    iframeDocument.close();
                }
            } catch (e) {}
        }
    },
    Play: function(txt, Lang, Speed, Conmode, Gender, License, domain, colorWords, colorSentences, pitchMode, allowAutoscroll, colorDots) {
        document.getElementById(this.iFrameID).contentWindow.vFactDetect2.setAutoScrollAllowed(allowAutoscroll);
        document.getElementById(this.iFrameID).contentWindow.vFactDetect2.SetHttpProtocol(this.HProtocol);
        document.getElementById(this.iFrameID).contentWindow.vFactDetect2.vFact_SendHTML5Data(txt, Lang, Speed, Conmode, Gender, License, domain, colorWords, colorSentences, pitchMode, colorDots);
    },
    Stop: function() {
        document.getElementById(this.iFrameID).contentWindow.vFactDetect2.stopplay();
    },
    getSelectedText: function() {
        /** get text of selection, then clear selection in browser */
        var dest = vFact_encode_to_utf8(document.getElementById(this.iFrameID).contentWindow.vFactDetect2.vFact_getSelectedText());
        vFact_ClearSelection();
        return dest;
    },
    getTextForSpecifiedItems: function(arrayIds) {
        /** get text of selection, then clear selection in browser */
        var dest = document.getElementById(this.iFrameID).contentWindow.vFactDetect2.vFact_getTextForItems(arrayIds);
        dest = dest === null ? null : vFact_encode_to_utf8(dest);
        vFact_ClearSelection();
        return dest;
    },
    setAutoPlayMode: function(Lang, Speed, Conmode, Gender, License, domain, colorWords, colorSentences, pitchMode, allowAutoscroll, colorDots) {
        var that = this;
        document.getElementById(this.iFrameID).contentWindow.vFactDetect2.vFact_ActivateAutoPlay(vFact_emptyplay, navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i), Lang, Speed, Conmode, Gender, License, domain, colorWords, colorSentences, function() {
            that.Stop();
            try {
                document.getElementById(that.iFrameID).contentWindow.vFactDetect2.setAutoScrollAllowed(allowAutoscroll);
                var text = document.getElementById(that.iFrameID).contentWindow.vFactDetect2.vFact_getTextForAutoPlay();
                if (text) {
                    that.Play(text, Lang, Speed, Conmode, Gender, License, domain, colorWords, colorSentences, pitchMode, colorDots);
                }
                vFact_ClearSelection();
            } catch (e) {
                console.log(e.message);
            }
        });
    },
    disableAutoPlayMode: function() {
        document.getElementById(this.iFrameID).contentWindow.vFactDetect2.vFact_DeactivateAutoPlay();
    },
    setEventHandler_OnChangePlaylistStatus: function(eventHandler) {
		var frame = document.getElementById(this.iFrameID);
		if (frame != undefined){
			document.getElementById(this.iFrameID).contentWindow.vFactDetect2.vFact_setEventHandler_OnChangePlaylistStatus(eventHandler);
		}
    }
};
var vFact_HTML5Player = vFact_AudioPlayer;
vFact_ReadSettingCookie();
function vFact_GetBestplayer() {
    var uagent = navigator.userAgent.toLowerCase();
    if ((uagent.search("iphone") > -1) || (uagent.search("ipad") > -1) || (uagent.search("ipad") > -1) || (uagent.search("android") > -1)) {
        return "HTML5";
    } else {
        return "WMP";
    }
}
function Vfact_IsFirefox() {
    var uagent = navigator.userAgent.toLowerCase();
    if (uagent.search("firefox") > -1) {
        return true;
    } else {
        return false;
    }
}
function vFact_makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
function vfact_position() {
    if (!vFact_fixedpos) {
        var data = "position:fixed";
    } else {
        var data = "position:absolute";
    }
    return data;
}
function vFact_removeElement(id) {
    if (document.getElementById(id)) {
        var aframe = document.getElementById(id);
        aframe.parentNode.removeChild(aframe);
    }
}
function vFact_encode_to_utf8(SrcStr) {
    if (textencoding != "UTF-8") {
        return unescape(encodeURIComponent(SrcStr));
    } else {
        return SrcStr
    }
    ;
}
function vFact_isie() {
    return ((navigator.userAgent.indexOf("MSIE") != -1) && (!vFact_isopera()));
}
function vFact_isopera() {
    return (navigator.userAgent.indexOf("Opera") != -1);
}
function vFact_pause(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) {
            return;
        }
    }
}
function vFact_removeAudioPlayer() {
    try {
        if (document.getElementById(iframeID)) {
            var aframe = document.getElementById(iframeID);
            aframe.parentNode.removeChild(aframe);
        }
    } catch (err) {}
}
function vFact_removeiframe() {
    try {
        if (document.getElementById(iframeID)) {
            var aframe = document.getElementById(iframeID);
            aframe.parentNode.removeChild(aframe);
        }
    } catch (err) {}
}
function vFact_checkOS() {
    if (navigator.userAgent.indexOf('Win') != -1) {
        var OpSys = "Win";
    } else {
        var OpSys = "Other";
    }
    return OpSys;
}
function vFact_getAnchorPosition(anchorname) {
    var useWindow = false;
    var coordinates = new Object();
    var x = 0
      , y = 0;
    var use_gebi = false
      , use_css = false
      , use_layers = false;
    if (document.getElementById) {
        use_gebi = true;
    } else if (document.all) {
        use_css = true;
    } else if (document.layers) {
        use_layers = true;
    }
    if (use_gebi && document.all) {
        x = vFact_AnchorPosition_getPageOffsetLeft(document.all[anchorname]);
        y = vFact_AnchorPosition_getPageOffsetTop(document.all[anchorname]);
    } else if (use_gebi) {
        var o = document.getElementById(anchorname);
        x = vFact_AnchorPosition_getPageOffsetLeft(o);
        y = vFact_AnchorPosition_getPageOffsetTop(o);
    } else if (use_css) {
        x = vFact_AnchorPosition_getPageOffsetLeft(document.all[anchorname]);
        y = vFact_AnchorPosition_getPageOffsetTop(document.all[anchorname]);
    } else if (use_layers) {
        var found = 0;
        for (var i = 0; i < document.anchors.length; i++) {
            if (document.anchors[i].name == anchorname) {
                found = 1;
                break;
            }
        }
        if (found == 0) {
            coordinates.x = 0;
            coordinates.y = 0;
            return coordinates;
        }
        x = document.anchors[i].x;
        y = document.anchors[i].y;
    } else {
        coordinates.x = 0;
        coordinates.y = 0;
        return coordinates;
    }
    coordinates.x = x;
    coordinates.y = y;
    return coordinates;
}
function vFact_getAnchorWindowPosition(anchorname) {
    var coordinates = vFact_getAnchorPosition(anchorname);
    var x = 0
      , y = 0;
    if ((!vFact_isopera()) && document.getElementById) {
        if (isNaN(window.screenX)) {
            x = coordinates.x - document.body.scrollLeft + window.screenLeft;
            y = coordinates.y - document.body.scrollTop + window.screenTop;
        } else {
            if (window.frameElement) {
                x = coordinates.x + window.screenX + window.frameElement.offsetLeft;
                y = coordinates.y + window.screenY + window.frameElement.offsetTop;
            } else {
                x = coordinates.x + window.screenX + (window.outerWidth - window.innerWidth) - window.pageXOffset;
                y = coordinates.y + window.screenY + (window.outerHeight - 24 - window.innerHeight) - window.pageYOffset;
            }
        }
    } else if (document.all) {
        x = coordinates.x - document.body.scrollLeft + window.screenLeft;
        y = coordinates.y - document.body.scrollTop + window.screenTop;
    } else if (document.layers) {
        x = coordinates.x + window.screenX + (window.outerWidth - window.innerWidth) - window.pageXOffset;
        y = coordinates.y + window.screenY + (window.outerHeight - 24 - window.innerHeight) - window.pageYOffset;
    }
    coordinates.x = x;
    coordinates.y = y;
    return coordinates;
}
function vFact_AnchorPosition_getPageOffsetLeft(el) {
    var ol = el.offsetLeft;
    while ((el = el.offsetParent) != null) {
        ol += el.offsetLeft;
    }
    return ol;
}
function vFact_AnchorPosition_getWindowOffsetLeft(el) {
    return vFact_AnchorPosition_getPageOffsetLeft(el) - document.body.scrollLeft;
}
function vFact_AnchorPosition_getPageOffsetTop(el) {
    var ot = el.offsetTop;
    while ((el = el.offsetParent) != null) {
        ot += el.offsetTop;
    }
    return ot;
}
function vFact_AnchorPosition_getWindowOffsetTop(el) {
    return vFact_AnchorPosition_getPageOffsetTop(el) - document.body.scrollTop;
}
function vFact_get_selected_text_from_frames(ListFrames) {
    try {
        for (var i = 0; i < ListFrames.length; i++) {
            frame = ListFrames[i];
            if (frame.name == iframeID)
                continue;
            if (frame.window) {
                if (frame.window.getSelection) {
                    txt = frame.window.getSelection();
                    if (txt != '') {
                        return txt;
                    }
                }
            }
            if (frame.document) {
                if (frame.document.getSelection) {
                    txt = frame.document.getSelection();
                    if (txt != '') {
                        return txt;
                    }
                }
                if (frame.document.selection && (!frame.opera)) {
                    if (frame.document.selection.createRange != null) {
                        var range = frame.document.selection.createRange();
                        if (range != null) {
                            txt = range.text;
                            if (txt != '') {
                                return txt;
                            }
                        }
                    }
                }
            }
            if (frame.window) {
                if (frame.window.frames) {
                    if (frame.window.frames.length > 0) {
                        txt = vFact_get_selected_text_from_frames(frame.window.frames);
                        if (txt != '') {
                            return txt;
                        }
                    }
                }
            }
        }
    } catch (e) {}
    return '';
}
function vFact_addEvent(obj, evType, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, fn, false);
        return true;
    } else if (obj.attachEvent) {
        var r = obj.attachEvent("on" + evType, fn);
        return r;
    } else {
        return false;
    }
}
function vFact_showconfigs() {
    var bshow_window = document.getElementById('configpage').style.display == 'none';
    document.getElementById('configpage').style.display = (bshow_window ? "block" : 'none');
}
function vFact_colorboxchange() {
    var radios = document.getElementsByName('vfact_highcolor');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.getElementById('vfact_colortest').style.background = radios[i].value;
            document.getElementById('vFact_color').value = radios[i].value;
            break;
        }
    }
}
function vFact_colorbox1change() {
    var radios = document.getElementsByName('vfact_Senhighcolor');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.getElementById('vfact_colortest1').style.background = radios[i].value;
            document.getElementById('vFact_Sencolor').value = radios[i].value;
            break;
        }
    }
}
function vFact_SetSelectedColor(color) {
    var radios = document.getElementsByName('vfact_highcolor');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value == color) {
            radios[i].checked = true;
            document.getElementById('vFact_color').value = color;
            document.getElementById('vfact_colortest').style.background = color;
        } else {
            radios[i].checked = false;
        }
    }
}
function vFact_SetSelectedSenColor(color) {
    var radios = document.getElementsByName('vfact_Senhighcolor');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value == color) {
            radios[i].checked = true;
            document.getElementById('vFact_Sencolor').value = color;
            document.getElementById('vfact_colortest1').style.background = color;
        } else {
            radios[i].checked = false;
        }
    }
}
function vFact_configboxstyle() {
    if (window.clientWidth) {
        var x = window.clientWidth;
        var y = window.clientHeight;
    } else {
        var x = document.body.clientWidth;
        var y = document.body.clientHeight;
    }
    y = (y / 2) - (yesnoheight / 2);
    x = (x / 2) - (yesnowidth / 2);
    if (vFact_isie()) {
        var toppos = vFact_getthetop() + 100;
    } else {
        var toppos = vFact_getthetop() + 100;
    }
    var data = "POSITION:absolute;LEFT:" + x + "px;TOP:" + toppos + "px;line-height:1;";
    data = data + "WIDTH:" + yesnowidth + "px;HEIGHT:" + yesnoheight + "px;BACKGROUND-IMAGE:url('" + vFactRawFiles + "popup.gif');";
    data = data + "COLOR:black;z-index: 200001;text-align:left;";
    return data;
}
function vFact_configopastyle() {
    var data = '<div style="';
    var toppos = vFact_getthetop();
    data = data + 'display: block; background-color: black;filter:alpha(opacity=' + opacity + ');-moz-opacity:' + opacity / 100 + ';opacity:' + opacity / 100 + ';';
    if (vFact_isie()) {
        data = data + 'width: 100%; height: 100%; position: absolute; left: 0px; top: ' + toppos + 'px; z-index: 50000;"></div>';
    } else {
        data = data + 'width: 100%; height: 100%; position: absolute; left: 0px; top: ' + toppos + 'px; z-index: 50000;"></div>';
    }
    return data;
}
function vFact_configGetShade() {
    var data = '<div id="theconfigshade">' + vFact_configopastyle() + '</div>';
    opacity = 0;
    indexcount = 0;
    return data;
}
/*function vFact_configgetIEVersion(){ var rv = -1; if (navigator.appName == 'Microsoft Internet Explorer') { var ua = navigator.userAgent; var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})"); if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 ); } return rv;}*/
function vFact_closeConfig() {
    vFact_Current_Speedsetting = document.getElementById(const_pafplayerspeed).value;
    vFact_Current_GenderSetting = document.getElementById("vFact_Gender").value;
    vFact_Current_InternetSetting = document.getElementById(const_pafplayerscmode).value;
    /*vFact_Current_LanguageSetting = document.getElementById("vFact_Langs").value;*/
    vFact_Current_Pitchsetting = document.getElementById("vFact_Pitch").value;
    try {
        vFact_Current_ConvMode = document.getElementById("vFact_convmode").value;
    } catch (err) {}
    try {
        vFact_Current_AutoplaySetting = document.getElementById("vFact_Autoplay").value;
    } catch (err) {}
    try {
        vFact_HighLightColor = document.getElementById("vFact_color").value;
        vFact_SentenceColor = document.getElementById("vFact_Sencolor").value;
        vFact_HighlightMode = document.getElementById("vFact_Highmode").value;
    } catch (err) {}
    WritevFactSettingsCookie(vFact_Current_Speedsetting, vFact_Current_InternetSetting, vFact_Current_GenderSetting, vFact_Current_LanguageSetting, vFact_Current_ConvMode, vFact_Current_AutoplaySetting, vFact_Current_Pitchsetting);
    try {
        vFact_removeElement("theconfigshade");
    } catch (err) {}
    try {
        vFact_removeElement("myconfigbox");
    } catch (err) {}
}
/*function vFact_getLanguageOptions(){ var LangData=LANGUAGES.split(","); var data=""; if (vFact_Current_LanguageSetting==""){vFact_Current_LanguageSetting="auto"} for (var i=0; i < LangData.length; i++) { if (LangData[i]==vFact_Current_LanguageSetting){data=data+"<option selected value=\""+LangData[i]+"\">"+LangData[i]+"</option>"; } else{data=data+"<option value=\""+LangData[i]+"\">"+LangData[i]+"</option>" ; } } if ("auto"==vFact_Current_LanguageSetting){data=data+"<option selected value=\"auto\">Automatisk</option>"; } else{data=data+"<option value=\"auto\">Automatisk</option>" ; } return data;}*/
function vFact_getConvModeOptions() {
    var data = "";
    if (vFact_Current_ConvMode == 0) {
        data = data + "<option selected value=\"0\">Nej</option>"
    } else {
        data = data + "<option value=\"0\">Nej</option>"
    }
    if (vFact_Current_ConvMode == 1) {
        data = data + "<option selected value=\"1\">Ja</option>"
    } else {
        data = data + "<option value=\"1\">Ja</option>"
    }
    if (vFact_Current_ConvMode == 2) {
        data = data + "<option selected value=\"2\">Sp&oslash;rg mig</option>"
    } else {
        data = data + "<option value=\"2\">Sp&oslash;rg mig</option>"
    }
    return data;
}
function vFact_getHighModeOptions() {
    var data = "";
    if (vFact_HighlightMode == 1) {
        data = data + "<option selected value=\"1\">Fremh&aelig;v ord</option>"
    } else {
        data = data + "<option value=\"1\">Fremh&aelig;v ord</option>"
    }
    if (vFact_HighlightMode == 2) {
        data = data + "<option selected value=\"2\">Fremh&aelig;v s&aelig;tninger</option>"
    } else {
        data = data + "<option value=\"2\">Fremh&aelig;v s&aelig;tninger</option>"
    }
    if (vFact_HighlightMode == 3) {
        data = data + "<option selected value=\"3\">Fremh&aelig;v s&aelig;tninger og ord</option>"
    } else {
        data = data + "<option value=\"3\">Fremh&aelig;v s&aelig;tninger og ord</option>"
    }
    if (vFact_HighlightMode == 4) {
        data = data + "<option selected value=\"4\">Ingen fremh&aelig;vning</option>"
    } else {
        data = data + "<option value=\"4\">Ingen fremh&aelig;vning</option>"
    }
    return data;
}
function vFact_showconfigbox() {
    showingdialog = true;
    /*vFact_removeiframe();*/
    var vConvModeNo = ""
      , vConvModeYes = ""
      , vConvModeAuto = "";
    var sel1 = ""
      , sel2 = ""
      , sel3 = ""
      , sel4 = ""
      , sel5 = "";
    var scmode_sel1 = ""
      , scmode_sel2 = ""
      , scmode_sel3 = "";
    var gmodeF = ""
      , gmodeM = "";
    var autoplayON = ""
      , autoplayOFF = "";
    var pitch_sel1 = ""
      , pitch_sel2 = ""
      , pitch_sel3 = "";
    vFact_ReadSettingCookie();
    if (vFact_Current_Speedsetting == sp1) {
        sel1 = "selected"
    } else if (vFact_Current_Speedsetting == sp2) {
        sel2 = "selected"
    } else if (vFact_Current_Speedsetting == sp3) {
        sel3 = "selected"
    } else if (vFact_Current_Speedsetting == sp4) {
        sel4 = "selected"
    } else if (vFact_Current_Speedsetting == sp5) {
        sel5 = "selected"
    }
    if (vFact_Current_Pitchsetting == pitch_mode_value1) {
        pitch_sel1 = "selected"
    } else if (vFact_Current_Pitchsetting == pitch_mode_value2) {
        pitch_sel2 = "selected"
    } else if (vFact_Current_Pitchsetting == pitch_mode_value3) {
        pitch_sel3 = "selected"
    }
    if (vFact_Current_InternetSetting == SCMODE1) {
        scmode_sel1 = "selected"
    } else if (vFact_Current_InternetSetting == SCMODE2) {
        scmode_sel2 = "selected"
    } else if (vFact_Current_InternetSetting == SCMODE3) {
        scmode_sel3 = "selected"
    }
    if (vFact_Current_GenderSetting == "M") {
        gmodeM = "selected"
    } else if (vFact_Current_GenderSetting == "F") {
        gmodeF = "selected"
    }
    ;if (vFact_Current_AutoplaySetting == "1") {
        autoplayON = "selected"
    } else if (vFact_Current_AutoplaySetting == "0") {
        autoplayOFF = "selected"
    }
    ;var vFact_TDStyle = "line-height:1em;padding:0px;margin:0px";
    var vFact_SelectStyle = "font-family:Verdana,Ariel;font-size:10px;margin-bottom:1px;height:20px;border:0px;width:150px;padding:0px";
    var vFact_hr = "<tr><td colspan=2 style=\"line-height:2px;padding:0px;margin:0px;height:2px\"><hr style=\"height:1px;color:1px solid black;width=300px;margin-top:0px;margin-bottom:0px;\"></td></tr>";
    var vFact_RadioStyle = "padding:0px;display:block";
    var data = vFact_configGetShade() + '<div id="myconfigbox" style="' + vFact_configboxstyle() + '">';
    data = data + '<img style="MARGIN-TOP:8px;MARGIN-RIGHT:8px" src="' + vFactRawFiles + 'close.gif" accesskey="c" alt="*" onclick="vFact_closeConfig()" align=right>';
    data = data + '<div style="MARGIN:10px;line-height:1;"><img src="' + vFactRawFiles + 'api_logo.gif" alt="*" align=top>&nbsp;<font style="FONT-FAMILY:verdana;FONT-SIZE:12px;FONT-WEIGHT:bold;line-height:1;">';
    data = data + vFact_Configheader + '</font><br><font style="FONT-FAMILY:verdana;FONT-SIZE:12px;">';
    data = data + vFact_Configtext + '</font><br><br>';
    data = data + '<center><table border=0 width=300 cellpadding=0 cellspacing=0 style="text-align:left;line-height:1;" >';
    data = data + '<tr><td colspan=2><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;text-align:left;color:black;line-height:1\" >';
    data = data + '<a href="" accesskey="j" onclick="javascript:vFact_dohelp()" style="font-family:verdana,ariel;font-size:10px;font-weight:bold">Klik her for hj&aelig;lp</a></span></td></tr>' + vFact_hr;
    data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;text-align:left;color:black;line-height:1\" >" + SpeedHeader + "</span></td>";
    data = data + "<td style=\"" + vFact_TDStyle + "\"><select style=\"" + vFact_SelectStyle + "\" id=\"" + const_pafplayerspeed + "\" >";
    data = data + "<option " + sel1 + " value=\"" + sp1 + "\">" + SpeedLevel1 + "</option>";
    data = data + "<option " + sel4 + " value=\"" + sp4 + "\">" + SpeedLevel4 + "</option>";
    data = data + "<option " + sel2 + " value=\"" + sp2 + "\">" + SpeedLevel2 + "</option>";
    data = data + "<option " + sel5 + " value=\"" + sp5 + "\">" + SpeedLevel5 + "</option>";
    data = data + "<option " + sel3 + " value=\"" + sp3 + "\">" + SpeedLevel3 + "</option>";
    data = data + "</select></td></tr>" + vFact_hr;
    data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;text-align:left;color:black;line-height:1\" >" + PitchHeader + "</span></td>";
    data = data + "<td style=\"" + vFact_TDStyle + "\"><select style=\"" + vFact_SelectStyle + "\" id=\"vFact_Pitch\" >";
    data = data + "<option " + pitch_sel1 + " value=\"" + pitch_mode_value1 + "\">" + PitchLevel1 + "</option>";
    data = data + "<option " + pitch_sel2 + " value=\"" + pitch_mode_value2 + "\">" + PitchLevel2 + "</option>";
    data = data + "<option " + pitch_sel3 + " value=\"" + pitch_mode_value3 + "\">" + PitchLevel3 + "</option>";
    data = data + "</select></td></tr>" + vFact_hr;
    data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;text-align:left;color:black;line-height:1\">" + SCModeHeader + "</span></td>";
    data = data + "<td style=\"" + vFact_TDStyle + "\"><select style=\"" + vFact_SelectStyle + "\" id=\"" + const_pafplayerscmode + "\" >";
    data = data + "<option " + scmode_sel1 + " value=\"" + SCMODE1 + "\">" + TitleSCMode1 + "</option>";
    data = data + "<option " + scmode_sel2 + " value=\"" + SCMODE2 + "\">" + TitleSCMode2 + "</option>";
    data = data + "<option " + scmode_sel3 + " value=\"" + SCMODE3 + "\">" + TitleSCMode3 + "</option>";
    data = data + "</select></td></tr>" + vFact_hr;
    data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;color:black;text-align:left;color:black;line-height:1\">" + vFact_GenderTitle + "</span></td>";
    data = data + "<td style=\"" + vFact_TDStyle + "\"><select style=\"" + vFact_SelectStyle + "\" id=\"vFact_Gender\" >";
    data = data + "<option " + gmodeM + " value=\"M\">" + vFact_MaleValue + "</option>";
    data = data + "<option " + gmodeF + " value=\"F\">" + vFact_FemaleValue + "</option>";
    data = data + "</select></td></tr>" + vFact_hr;
    if (vFact_AllowAutoplay) {
        data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;color:black;text-align:left;color:black;line-height:1\">" + vFact_AutoplayTitle + "</span></td>";
        data = data + "<td style=\"" + vFact_TDStyle + "\"><select style=\"" + vFact_SelectStyle + "\" id=\"vFact_Autoplay\" >";
        data = data + "<option " + autoplayON + " value=\"1\">" + vFact_AutoPlayEnabled + "</option>";
        data = data + "<option " + autoplayOFF + " value=\"0\">" + vFact_AutoPlayDisabled + "</option>";
        data = data + "</select></td></tr>" + vFact_hr;
    }
    /* data=data+"<tr><td style=\""+vFact_TDStyle+"\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;color:black;text-align:left;color:black;line-height:1\">"+vFact_LanguageTitle+"</span></td>"; data=data+"<td style=\""+vFact_TDStyle+"\"><select style=\""+vFact_SelectStyle+"\" id=\"vFact_Langs\" >"; data=data+vFact_getLanguageOptions(); data=data+"</select></td></tr>"+vFact_hr;*/
    if (vFact_AllowConv) {
        data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;color:black;text-align:left;color:black;line-height:1\">" + vFact_ConvertTitle + "</span></td>";
        data = data + "<td style=\"" + vFact_TDStyle + "\"><select style=\"" + vFact_SelectStyle + "\" id=\"vFact_convmode\" >";
        data = data + vFact_getConvModeOptions();
        data = data + "</select></td></tr>" + vFact_hr;
    }
    if (vFact_AllowHighLight) {
        data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;color:black;text-align:left;color:black;line-height:1\">" + vFact_HighlightselectTitle + "</span></td>";
        data = data + "<td style=\"" + vFact_TDStyle + "\"><select style=\"" + vFact_SelectStyle + "\" id=\"vFact_Highmode\" >";
        data = data + vFact_getHighModeOptions();
        data = data + "</select></td></tr>" + vFact_hr;
        data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;color:black;text-align:left;color:black;line-height:1\">" + vFact_HighLight_title + "</span></td>";
        data = data + "<td style=\"" + vFact_TDStyle + "\">";
        data = data + "<div style=\"border:1px solid black;width:120px;height:20px;box-sizing:initial;\">";
        data = data + "<div style=\"width:20px;height:20px;background:#F90;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_highcolor\" value=\"#F90\" onChange=\"vFact_colorboxchange()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#0041a2;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_highcolor\" value=\"#0041a2\" onChange=\"vFact_colorboxchange()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#C33;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_highcolor\" value=\"#C33\" onChange=\"vFact_colorboxchange()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#FF3;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_highcolor\" value=\"#FF3\" onChange=\"vFact_colorboxchange()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#F6F;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_highcolor\" value=\"#F6F\" onChange=\"vFact_colorboxchange()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#3FF;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_highcolor\" value=\"#3FF\" onChange=\"vFact_colorboxchange()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div><input id=\"vFact_color\" type=hidden name=\"vFact_color\" value=\"\"></div></div>";
        data = data + "<div id=\"vfact_colortest\" style=\"height:15px;width:120px;text-align:center;border-left:1px solid black;border-right:1px solid black;border-bottom:1px solid black;box-sizing:initial;\"><font color=\"white\" face=\"Verdana, Geneva, sans-serif\" size=\"1\">TEST</font></div>";
        data = data + "</td></tr>";
        data = data + "<tr><td style=\"" + vFact_TDStyle + "\"><span style=\"font-family:verdana,ariel;font-size:10px;font-weight:bold;width:140px;color:black;text-align:left;color:black;line-height:1\">S&aelig;tnings farve</span></td>";
        data = data + "<td style=\"" + vFact_TDStyle + "\">";
        data = data + "<div style=\"border:1px solid black;width:120px;height:20px;box-sizing:initial;\">";
        data = data + "<div style=\"width:20px;height:20px;background:#F90;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_Senhighcolor\" value=\"#F90\" onChange=\"vFact_colorbox1change()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#06F;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_Senhighcolor\" value=\"#06F\" onChange=\"vFact_colorbox1change()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#C33;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_Senhighcolor\" value=\"#C33\" onChange=\"vFact_colorbox1change()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#FF3;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_Senhighcolor\" value=\"#FF3\" onChange=\"vFact_colorbox1change()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#F6F;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_Senhighcolor\" value=\"#F6F\" onChange=\"vFact_colorbox1change()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div style=\"width:20px;height:20px;background:#3FF;float:right;padding:0px\"><input type=\"radio\" name=\"vfact_Senhighcolor\" value=\"#3FF\" onChange=\"vFact_colorbox1change()\" style=\"" + vFact_RadioStyle + "\"></div>";
        data = data + "<div><input id=\"vFact_Sencolor\" type=hidden name=\"vFact_Sencolor\" value=\"\"></div></div>";
        data = data + "<div id=\"vfact_colortest1\" style=\"height:15px;width:120px;text-align:center;border-left:1px solid black;border-right:1px solid black;border-bottom:1px solid black;box-sizing:initial;\"><font color=\"black\" face=\"Verdana, Geneva, sans-serif\" size=\"1\">TEST</font></div>";
        data = data + "</td></tr>";
    }
    data = data + '</table></center>';
    vFact_addHTMLToPage(data);
    vFact_SetSelectedColor(vFact_HighLightColor);
    vFact_SetSelectedSenColor(vFact_SentenceColor);
}
var toolbarbackground = "27_AToolbarback.png";
var playbutton = "27_Aplay.png";
var playbuttonover = "27_Aplay_h.png";
var stopbutton = "27_Astop.png";
var stopbuttonover = "27_Astop_h.png";
var configbutton = "27_Atool.png";
var configbuttonover = "27_Atool_h.png";
var helpbutton = "27_Ahelp.png";
var helpbuttonover = "27_Ahelp_h.png";
var playmarginleft = "50";
var stopmarginleft = "22";
var helpmarginleft = "22";
var configmarginleft = "20";
var toolbarwidth = "177";
var toolbarheight = "23";
var operaplaybuttonheight = "23";
var operaplaybuttonwidth = "23";
var operaplaybuttonbottommargin = "0";
var noborder = 'border-left:0px;border-right:0px;border-top:0px;border-bottom:0px;padding-right:0px;padding-top:0px;padding-left:0px;padding-bottom:0px;';
function ietoolbarcode1() {
    var code = "<div id=\"PAFTOOLBAR\" style=\"position:absolute;left:" + vFact_leftoffset + "px;top:" + vFact_topoffset + "px;z-index:49999;visibility:visible;width:" + toolbarwidth + "px;height:" + toolbarheight + "px;background:url(" + vFactRawFiles + toolbarbackground + ");background-repeat:no-repeat\">";
    code = code + "<div style=\"width:" + toolbarwidth + "px;height:" + toolbarheight + "px;margin-left:0px;margin-top:0px;";
    code = code + "\">";
    code = code + "<input type=image src='" + vFactRawFiles + playbutton + "' alt=\"" + PlayButtonAltText + "\" style=\"" + noborder + "margin-left:" + playmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + playbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + playbutton + "'\" ACCESSKEY=\"" + vfact_playkey + "\" ";
    code = code + "onclick=\"javascript:vFact_doplay()\" id=image1>";
    code = code + "<input type=image src='" + vFactRawFiles + stopbutton + "' alt=\"" + StopButtonAltText + "\" style=\"" + noborder + "margin-left:" + stopmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + stopbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + stopbutton + "'\" ACCESSKEY=\"" + vfact_stopkey + "\" ";
    code = code + "onclick=\"javascript:document.location.href=document.location.href;\" ID=Image2>";
    code = code + "<input type=image src='" + vFactRawFiles + configbutton + "' alt=\"" + ConfigButtonAltText + "\" style=\"" + noborder + "margin-left:" + configmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + configbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + configbutton + "'\" ACCESSKEY=\"" + vfact_settingskey + "\" ";
    code = code + "onclick=\"javascript:vFact_showconfigbox();\" ID=Image3>";
    code = code + "<input type=image src='" + vFactRawFiles + helpbutton + "' alt=\"" + HelpButtonAltText + "\" style=\"" + noborder + "margin-left:" + helpmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + helpbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + helpbutton + "'\" ACCESSKEY=\"" + vfact_helpkey + "\" ";
    code = code + "onclick=\"javascript:vFact_dohelp();\" ID=Image4>";
    code = code + "</div></div>";
    return code;
}
function notietoolbarcode1() {
    var code = "<div id=\"PAFTOOLBAR\" style=\"" + vfact_position() + ";left:" + vFact_leftoffset + "px;top:" + vFact_topoffset + "px;z-index:49999;visibility:visible;width:" + toolbarwidth + "px;height:" + toolbarheight + "px;background:url(" + vFactRawFiles + toolbarbackground + ");background-repeat:no-repeat\">";
    code = code + "<div style=\"width:" + toolbarwidth + "px;height:" + toolbarheight + "px;margin-left:0px;margin-top:0px;";
    code = code + "\">";
    code = code + "<input type=image src='" + vFactRawFiles + playbutton + "' alt=\"" + PlayButtonAltText + "\" style=\"" + noborder + "margin-left:" + playmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + playbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + playbutton + "'\" ACCESSKEY=\"" + vfact_playkey + "\" ";
    code = code + "onclick=\"javascript:vFact_doplay()\" id=image1>";
    code = code + "<input type=image src='" + vFactRawFiles + stopbutton + "' alt=\"" + StopButtonAltText + "\" style=\"" + noborder + "margin-left:" + stopmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + stopbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + stopbutton + "'\" ACCESSKEY=\"" + vfact_stopkey + "\" ";
    code = code + "onclick=\"javascript:document.location.href=document.location.href;\" ID=Image2>";
    code = code + "<input type=image src='" + vFactRawFiles + configbutton + "' alt=\"" + ConfigButtonAltText + "\" style=\"" + noborder + "margin-left:" + configmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + configbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + configbutton + "'\" ACCESSKEY=\"" + vfact_settingskey + "\" ";
    code = code + "onclick=\"javascript:vFact_showconfigbox();\" ID=Image3>";
    code = code + "<input type=image src='" + vFactRawFiles + helpbutton + "' alt=\"" + HelpButtonAltText + "\" style=\"" + noborder + "margin-left:" + helpmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + helpbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + helpbutton + "'\" ACCESSKEY=\"" + vfact_helpkey + "\" ";
    code = code + "onclick=\"javascript:vFact_dohelp();\" ID=Image4>";
    code = code + "</div></div>";
    return code;
}
function operatoolbarcode1() {
    var code = "<div id=\"PAFTOOLBAR\" style=\"" + vfact_position() + ";left:" + vFact_leftoffset + "px;top:" + vFact_topoffset + "px;z-index:49999;visibility:visible;width:" + toolbarwidth + "px;height:" + toolbarheight + "px;background:url(" + vFactRawFiles + toolbarbackground + ");background-repeat:no-repeat\">";
    code = code + "<div style=\"width:" + toolbarwidth + "px;height:" + toolbarheight + "px;margin-left:0px;margin-top:0px;";
    code = code + "\">";
    code = code + "<input type=image src='" + vFactRawFiles + playbutton + "' alt=\"" + PlayButtonAltText + "\" style=\"" + noborder + "margin-left:" + playmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + playbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + playbutton + "'\" ACCESSKEY=\"" + vfact_playkey + "\" ";
    code = code + "onclick=\"javascript:vFact_doplay()\" id=image1>";
    code = code + "<input type=image src='" + vFactRawFiles + stopbutton + "' alt=\"" + StopButtonAltText + "\" style=\"" + noborder + "margin-left:" + stopmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + stopbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + stopbutton + "'\" ACCESSKEY=\"" + vfact_stopkey + "\" ";
    code = code + "onclick=\"javascript:document.location.href=document.location.href;\" ID=Image2>";
    code = code + "<input type=image src='" + vFactRawFiles + configbutton + "' alt=\"" + ConfigButtonAltText + "\" style=\"" + noborder + "margin-left:" + configmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + configbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + configbutton + "'\" ACCESSKEY=\"" + vfact_settingskey + "\" ";
    code = code + "onclick=\"javascript:vFact_showconfigbox();\" ID=Image3>";
    code = code + "<input type=image src='" + vFactRawFiles + helpbutton + "' alt=\"" + HelpButtonAltText + "\" style=\"" + noborder + "margin-left:" + helpmarginleft + "px;margin-top:0px\" ";
    code = code + "onmouseover=\"this.src='" + vFactRawFiles + helpbuttonover + "'\" onmouseout=\"this.src='" + vFactRawFiles + helpbutton + "'\" ACCESSKEY=\"" + vfact_helpkey + "\" ";
    code = code + "onclick=\"javascript:vFact_dohelp();\" ID=Image4>";
    code = code + "</div></div>";
    return code;
}
function vFactCaller() {
    if (posrelativeto != "") {
        try {
            thisone = document.getElementById(posrelativeto);
            var therelplace = vFact_findPos(thisone);
            vFact_leftoffset = vFact_leftoffset + therelplace[0];
            vFact_topoffset = vFact_topoffset + therelplace[1];
        } catch (e) {}
    }
    extendedplayer = true;
    if (vFact_active) {
        if (vFact_isie()) {
            var code = ietoolbarcode1();
        } else if (vFact_isopera()) {
            var code = operatoolbarcode1();
        } else {
            var code = notietoolbarcode1();
        }
        vFact_addHTMLToPage(code);
        vFact_checktoolbar();
    } else {
        if (readActCookie()) {
            vFact_leseAct();
        }
        if (vFact_empty != "") {
            vFact_activatetoolbar(document.getElementById(vFact_empty));
        }
    }
}
function vFact_GetProtocol() {
    var proto = 'http://';
    proto = location.protocol.toLowerCase();
    return proto;
}
function startleseweb() {
    vFactCaller();
    var proto = vFact_GetProtocol();
    vFact_HTML5Player.init(proto, '#FFAAAA');
}
vFact_addEvent(window, 'load', startleseweb);
