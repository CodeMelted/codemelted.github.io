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
            popupWindow("https://developer.codemelted.com/feed.json");
        }
    }

    if (btnDevGitHub) {
        btnDevGitHub.onclick = (e) => {
            e.preventDefault();
            popupWindow("https://github.com/codemelted");
        }
    }
}

async function  main() {
    setTimeout(() => {
        // Add a home button for the PWA to our page.
        const html = `
            <style>
                .cm-round-button {
                    position: fixed;
                    bottom: 75px;
                    right: 15px;
                    display: block;
                    width: 80px;
                    height: 80px;
                    line-height: 80px;
                    border: 2px solid black;
                    border-radius: 50%;
                    text-align: center;
                    text-decoration: none;
                    background: #555777;
                    box-shadow: 0 0 3px gray;
                    font-size: 20px;
                    font-weight: bold;
                }
                @media print {
                    .cm-round-button {
                        display: none;
                    }
                }
            </style>
            <a title="CodeMelted - PWA" href="https://codemelted.com"><img class="cm-round-button" src="https://codemelted.github.io/assets/images/icons/phone-home.png" /></a>
        `;
        document.body.innerHTML += html;
        setupSocialHandlers();
        // TODO: Hookup our codemelted_fullstack module broadcast channel
    }, 500);
}
main();
