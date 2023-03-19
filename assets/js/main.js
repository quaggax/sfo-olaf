var htmlTag = document.getElementsByTagName('html')[0];
var cookiePrompt = document.getElementById('cookie-prompt');

function CookiesAcknowledged() {
    if (cookiePairs["cookies-acknowledged"] == 1) {
        return true;
    } else if (cookiePairs["cookies-acknowledged"] == 0) {
        return false;
    }
}

function ShowCookiePrompt() {
    cookiePrompt.style = "display: block;";
}

function HideCookiePrompt() {
    cookiePrompt.style = "display: none;";
}

function ProceedToSetTheme() {
    AcknowledgeCookies();
    CreateCookieObject();
    HideCookiePrompt();
    if (cookiePrompt.dataset.button == "dark") {
        ToggleDarkMode();
    } else if (cookiePrompt.dataset.button == "terminal") {
        ToggleTerminalMode();
    } else if (cookiePrompt.dataset.button == "auto") {
        ToggleAutoMode();
    }
}

function ToggleAutoMode() {
    if (CookiesAcknowledged() == true) {
        htmlTag.classList = "auto-mode";
        SetCookie("theme", "auto-mode", dateCookieExpires);
    } else {
        cookiePrompt.dataset.button = "auto";
        ShowCookiePrompt();
    }
}

function ToggleDarkMode() {
    if (CookiesAcknowledged() == true) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (htmlTag.classList.contains('terminal-mode') || htmlTag.classList.contains('light-mode')) {
                htmlTag.classList = "dark-mode";
                SetCookie("theme", "dark-mode", dateCookieExpires);
            } else if (htmlTag.classList.contains('dark-mode') || htmlTag.classList.contains('auto-mode')) {
                htmlTag.classList = "light-mode";
                SetCookie("theme", "light-mode", dateCookieExpires);
            }
        } else {
            if (htmlTag.classList.contains('terminal-mode') || htmlTag.classList.contains('light-mode') || htmlTag.classList.contains('auto-mode')) {
                htmlTag.classList = "dark-mode";
                SetCookie("theme", "dark-mode", dateCookieExpires);
            } else if (htmlTag.classList.contains('dark-mode')) {
                htmlTag.classList = "light-mode";
                SetCookie("theme", "light-mode", dateCookieExpires);
            }
        }
    } else {
        cookiePrompt.dataset.button = "dark";
        ShowCookiePrompt();
    }
}

function ToggleTerminalMode() {
    if (CookiesAcknowledged() == true) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (htmlTag.classList.contains('dark-mode') || htmlTag.classList.contains('light-mode') || htmlTag.classList.contains('auto-mode')) {
                htmlTag.classList = "terminal-mode";
                SetCookie("theme", "terminal-mode", dateCookieExpires);
            } else if (htmlTag.classList.contains('terminal-mode')) {
                htmlTag.classList = "dark-mode";
                SetCookie("theme", "dark-mode", dateCookieExpires);
            }
        } else {
            if (htmlTag.classList.contains('dark-mode') || htmlTag.classList.contains('light-mode') || htmlTag.classList.contains('auto-mode')) {
                htmlTag.classList = "terminal-mode";
                SetCookie("theme", "terminal-mode", dateCookieExpires);
            } else if (htmlTag.classList.contains('terminal-mode')) {
                htmlTag.classList = "light-mode";
                SetCookie("theme", "light-mode", dateCookieExpires);
            }
        }
    } else {
        cookiePrompt.dataset.button = "terminal";
        ShowCookiePrompt();
    }
}

/* This function sets the target of HTML anchors to "_blank" if they point to a different hostname (domain basically) */
function ExternalLinks() {
    var anchorElements = document.getElementsByTagName("a");
    for (var i = 0; i < anchorElements.length; i++) {
        var anchorElement = anchorElements[i];
        anchorElement.getAttribute("href") && anchorElement.hostname !== location.hostname && (anchorElement.target = "_blank");
        /* the && (logical AND) returns the value of the first 'false' expression (eg. empty string); if all expressions are true it returns the value of the last one. if there is a 'false' expression the rest of the statement isn't even called.
        read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation */
        /* in this case the statements checks if the href attribute even has a value. if yes, the code comapres the anchors hostname to the current pages hostname. if they are different, the statement between the parenthesis is returned. this sets the target attribute to "_blank". */
    }
}
ExternalLinks();