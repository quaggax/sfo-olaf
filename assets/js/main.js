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