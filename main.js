var moment = require('moment'); // require

var myDate = new Date();
var npm_date = moment(myDate).format('LL'); 
console.log(npm_date);