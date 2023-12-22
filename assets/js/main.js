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

async function  main() {
    // We are under an iframe, we are good.
    if (window != window.parent) {
        return;
    }

    // We are not under an iframe, we need to provide a home button
    // for our main main domain.
    const html = `
        <style>
            .cm-round-button {
                position: fixed;
                bottom: 15px;
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
        </style>
        <a title="CodeMelted - PWA" href="https://codemelted.com"><img class="cm-round-button" src="https://codemelted.github.io/assets/images/icons/phone-home.png" /></a>
    `;
    document.body.innerHTML += html;
}
main();
