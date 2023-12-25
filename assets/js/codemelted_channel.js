/*
===============================================================================
MIT License

© 2023 Mark Shaffer. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
===============================================================================
*/

// TODO - import codemelted_fullstack module

/**
 * Opens a new browser window as a popup.
 * @param {string} url URL protocol to open
 * @param {string} [windowName] Optional target name for the window.
 * @param {number} [width] Optional width of the window.
 * @param {number} [height] Optional height of the window.
 * @returns {Window}
 */
function popupWindow(url, windowName, width = undefined, height = undefined) {
    const w = width ? width : 900;
    const h = height ? height : 500;
    const top = (screen.height - h) / 2;
    const left = (screen.width - w) / 2;
    return window.open(
        url,
        windowName,
        `toolbar=no, location=no, directories=no, status=no, ` +
        `menubar=no, scrollbars=no, resizable=yes, copyhistory=no, ` +
        `width=${w}, height=${h}, top=${top}, left=${left}`
    );
}

/**
 * Sets up the button onclick handlers for the fixed header social icons of
 * the page.
 */
function setupSocialHandlers() {
    // Get the buttons
    const btnDevSupport = document.getElementById("btnDevSupport");
    const btnDevJSON = document.getElementById("btnDevJSON");
    const btnDevGitHub = document.getElementById("btnDevGitHub");
    const btnTwitter = document.getElementById("btnTwitter");
    const btnYouTube = document.getElementById("btnYouTube");

    // Setup the handlers
    if (btnDevSupport) {
        btnDevSupport.onclick = (e) => {
            e.preventDefault();
            popupWindow("https://buymeacoffee.com/codemelted");
        }
    }

    if (btnDevJSON) {
        btnDevJSON.onclick = (e) => {
            e.preventDefault();
            const href = window.location.href.includes("content")
                ? "https://content.codemelted.com/feed.json"
                : "https://developer.codemelted.com/feed.json";
            popupWindow(href);
        }
    }

    if (btnDevGitHub) {
        btnDevGitHub.onclick = (e) => {
            e.preventDefault();
            popupWindow("https://github.com/codemelted");
        }
    }

    if (btnTwitter) {
        btnTwitter.onclick = (e) => {
            e.preventDefault();
            popupWindow("https://twitter.com/codemelted");
        }
    }

    if (btnYouTube) {
        btnYouTube.onclick = (e) => {
            e.preventDefault();
            popupWindow("https://youtube.com/@codemelted");
        }
    }
}

async function main() {
    setupSocialHandlers();
    // TODO: Hookup our codemelted_fullstack module broadcast channel
}
main();