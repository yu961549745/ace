# Maple Support
Usage: run `make.bat`.

Contains 4 steps:
1. add maple highlight. use `tool/tmlanguage.js` parse `maple/syntexes/maple.json`.
1. add maple snippets. use `maple/mkSnippets.js` make `/lib/ace/snippets/maple.snippets` and `/lib/ace/snippets/maple.js`.
1. build ace library.
1. run the test page `maple/maple.html`.