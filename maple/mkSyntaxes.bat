REM make files for maple highlight
cd ../tool
REM install amd-loader library
if not exist node_modules\amd-loader (
    npm install amd-loader
)
node tmlanguage.js ../maple/syntaxes/maple.json
REM build ACE library
cd ..
node Makefile.dryice.js
REM open test page
start maple/maple.html