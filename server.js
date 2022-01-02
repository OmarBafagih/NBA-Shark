chrome.runtime.onInstalled.addListener(() => {
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

console.log("NICE NCIE NCIE");



app.listen(PORT);



});


