var htmlTag = document.getElementsByTagName('html')[0];

function ToggleDarkMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (htmlTag.classList.contains('terminal-mode')) {
            htmlTag.classList.remove('terminal-mode');
        } else {
            htmlTag.classList.toggle('dark-mode');
        }
    } else {
        if (htmlTag.classList.contains('terminal-mode')) {
            htmlTag.classList.remove('terminal-mode');
            htmlTag.classList.add('dark-mode');
        } else {
            htmlTag.classList.toggle('dark-mode');
        }
    }
}

function ToggleTerminalMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (htmlTag.classList.contains('dark-mode')) {
            htmlTag.classList.remove('dark-mode');
            htmlTag.classList.add('terminal-mode');
        } else if (htmlTag.classList.contains('terminal-mode')) {
            htmlTag.classList.remove('terminal-mode');
            htmlTag.classList.add('dark-mode');
        } else {
            htmlTag.classList.add('terminal-mode');
        }
    } else {
        if (htmlTag.classList.contains('dark-mode')) {
            htmlTag.classList.remove('dark-mode');
            htmlTag.classList.add('terminal-mode');
        } else {
            htmlTag.classList.toggle('terminal-mode');
        }
    }
}

/* This function sets the target of HTML anchors to "_blank" if they point to a different hostname (domain basically) */
function ExternalLinks() {
    var anchorElements = document.getElementsByTagName("a");
    for (var i = 0; i < anchorElements.length; i++) {
        var anchorElement = anchorElements[i];
        anchorElement.getAttribute("href") && anchorElement.hostname !== location.hostname && (anchorElement.target = "_blank");
    }
}
ExternalLinks();