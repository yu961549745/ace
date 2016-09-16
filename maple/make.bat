:: make files for maple highlight
cd ../tool
if not exist node_modules (
    :: install tool
    npm install
)
if not exist node_modules/amd-loader (
    :: install amd-loader library
    npm install amd-loader
)
node tmlanguage.js ../maple/syntaxes/maple.json
:: add snippets
cd ../maple
node mkSnippets.js
:: build ACE library
cd ..
if not exist node_modules (
    :: install ACE
    npm install
)
node Makefile.dryice.js
:: open test page
start maple/maple.html