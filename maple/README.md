# Maple Support
Usage: run `make.bat`.

Contains 4 steps:
+ add maple highlight. use `tool/tmlanguage.js` parse `maple/syntexes/maple.json`.
+ add maple snippets. use `maple/mkSnippets.js` make `/lib/ace/snippets/maple.snippets` and `/lib/ace/snippets/maple.js`.
+ build ace library.
+ run the test page `maple/maple.html`.