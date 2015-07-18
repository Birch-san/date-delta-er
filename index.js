#!/usr/bin/env node
var moment = require('moment');

var userArgs = process.argv.slice(2);
var hours = userArgs.shift(userArgs) || 2;
var mins = userArgs.shift(userArgs) || 0;

var now = moment();
var someOClock = moment().hour(hours).minute(mins).startOf('minute');
while(someOClock.isBefore(now)) {
	someOClock.add(1, 'days');
}

console.log(someOClock.diff(now, 'seconds')||moment.duration(1, "day").asSeconds());