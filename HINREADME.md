============================================================
============================================================
Installing
Forked news-challenge folder from DF to my own GitHub account, then cloned the folder onto my local machine.
On VSC terminal, inside news-challenge folder, set up the library with the following commands:
npm i (install node modules), npm i axios dotenv (install axios to make http requests from node.js), npm i --save react-router-dom@5.2.0 (install routing). 
Modified package.json: changed the scripts in order to run project after updated to latest version of node/nvm.
To run program: "npm start"
To run tests: "npm test"
============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Structure
1 = Component Hierarchy
2 = Static Versions
3 = Identifying State
4 = Identifying Where State Should Live
5 = Adding Inverse Data Flow

Component Hierarchy - version1
Components || Colour || Content
header     || red    || title, loading status
body       || blue   || useState, useEffect, image, caption`
footer     || green  || text

Component Hierarchy - version2
Components         || Colour || Content
header             || red    || title, loading status
body               || blue   || useState, useEffect
news-article-list  || pink   || image, caption
footer             || green  || text
------------------------------------------------------
------------------------------------------------------

============================================================
============================================================
Steps
Began the project with all functions living inside body component in the TTD way to ensure the functions are working. Then slowly decomposed body component into many components.
============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Tests
<!-- header.test.jsx -->
Test 1 = header should match the snapshot

<!-- footer.test.jsx -->
Test 1 = footer should match the snapshot

<!-- body.test.jsx -->
Test 1 = useState, getNewsArticle, useEffect', async

<!-- NewsArticle.test.jsx -->
Test 1 = render the correct headline

<!-- getRequest.test.jsx -->
Test 1 = getRequest function same as getNewsArticle function in body
------------------------------------------------------
------------------------------------------------------

============================================================
============================================================
Other
Cant get body.test.jsx and NewsArticle.test.jsx working

============================================================
============================================================