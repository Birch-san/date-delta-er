#!/usr/bin/env node
var moment = require('moment');

var now = moment();
var someOClock = moment().hour(2).startOf('hour');
while(someOClock.isBefore(now)) {
	someOClock.add(1, 'days');
}

console.log(someOClock.diff(now, 'seconds'));