# Tague's New Tab Page

https://chrome.google.com/webstore/detail/tagues-new-tab-page/gpikjebkoliccjgjndkdklcngadcpplp

I built this because, as of late, I have been getting better performance out of Chrome than
Firefox on my computer, but don't like that it shows your recent page history on the New Tab
Page. Other custom New Tab Page extensions seem suspiciously large or have a strange impact on
performance, sometimes requesting permissions that an extension of that sort shouldn't need.
Hence, I made my own.

It's smaller and faster than the others I have tried.

## Contributors Welcome

This New Tab Page is a modular system. Each module consists of a JS file and some HTML
markup.

Modules must follow the `<Thing>Display` naming pattern and properly extend the `Display`
class as specified in `Display.js`.

I would especially appreciate any suggestions for a new style for the reminder list.
I hate the way I've designed it but can't really think of a better style.