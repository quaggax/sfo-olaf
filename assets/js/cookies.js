// cookie script – yummy

function SetCookie(name, value, expires) {
    var domain = document.location.hostname;
    document.cookie = name + "=" + value + ";expires=" + expires + ";domain=" + domain + ";secure";
}

var dateNow = new Date();
var dateInOneWeek = dateNow.getTime() + 604800000;
var dateCookieExpires = new Date(dateInOneWeek).toUTCString();

function AcknowledgeCookies() {
    SetCookie("cookies-acknowledged", 1, dateCookieExpires);
}

var cookiePairs = new Object();

function CreateCookieObject() {
    var cookies = document.cookie.split("; ");
    for (var j = 0; j < cookies.length; j++) {
        var temp = cookies[j].split("=");
        cookiePairs[temp[0]] = temp[1];
    } // creates an object with cookie names as property and values as value
}
CreateCookieObject();

var htmlTag = document.getElementsByTagName('html')[0];

if (cookiePairs["theme"] == "light-mode") {
    htmlTag.classList = "light-mode";
} else if (cookiePairs["theme"] == "dark-mode") {
    htmlTag.classList = "dark-mode";
} else if (cookiePairs["theme"] == "terminal-mode") {
    htmlTag.classList = "terminal-mode";
}