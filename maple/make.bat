:: make files for maple highlight
cd ../tool
:: install amd-loader library
if not exist node_modules/amd-loader (
    npm install amd-loader
)
node tmlanguage.js ../maple/syntaxes/maple.json
:: build ACE library
cd ..
:: install ACE
if not exist node_modules (
    npm install
)
node Makefile.dryice.js
:: add snippets
node maple/mkSnippets.js >build/src/snippets/maple.js
:: open test page
start maple/maple.html