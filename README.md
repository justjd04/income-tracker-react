<h1>Income Tracker Using React</h1>

<p>Used React components, React hooks such as; useState, useRef and useEffect. Used array map and sort to list and sort the income items.</p>

<h2>The Published Income Tracker App:</h2>

<p>https://justjd04.github.io/income-tracker-react/</p>

<p><a href="https://justjd04.github.io/income-tracker-react/"><img src="income-tracker-react.png" alt="income-tracker-react app" width="500" height="500"></a></p>

<h2>Commands to create-react-app:</h2>

<p>npx create-react-app income-tracker-react</p>
<p>cd income-tracker-react</p>
<p>code .</p>
<p>npm start</p>

<!--
src
remove app.test.js, setupTest.js App.css, logo.svg, serviceWorker/reportWebVitals

App.js
remove logo and app.css

index.js
remove import serviceWorker/reportWebVitals
remove reportWebVitals function below with comment

App.js
import React, { useState, useEffect } from 'react';

all components in components folder
create components/Header.js

App.js
import Header from './components/Header';

Header.js
rfce
don't forget semicolon end of import and export

Header component is complete
create another component under components folder
-->

<h2>Commands used to publish react files in github:</h2>

<p>Go to package.json</p>
<p>Add:"homepage": "https://justjd04.github.io/income-tracker-react",</p>
<p>Format:https://UserName.github.io/Project-name</p>

<p>Under scripts</p>
<p>Add:</p>
<p>"predeploy": "npm run build",</p>
<p>"deploy": "gh-pages -d build",</p>

<p>cmd:</p>
<p>git remote add origin https://justjd04.github.io/income-tracker-react</p>
<p>git remote set-url origin https://justjd04.github.io/income-tracker-react</p>
<p>npm run build</p>
<p>npm run deploy</p>
<p>(ERR! gh-pages is not recognized Solution:npm install gh-pages --save-dev)</p>

<h2>Push using Git Bash:</h2>

<p>cd income-tracker-react</p>
<p>git remote add origin https://github.com/justjd04/income-tracker-react.git</p>
<p>git remote</p>
<p>git status</p>
<p>git add .</p>
<p>git commit -m "initial commit"</p>
<p>git push -u origin master</p>
