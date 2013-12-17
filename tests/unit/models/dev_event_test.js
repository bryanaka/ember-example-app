/* jshint undef: false */
import DevEvent from 'appkit/models/dev_event';
module('Unit - Model');

function hasDevEventAttr(attr, attrType) {
	isEmberDataAttribute(DevEvent, attr, attrType);
}

test('exists', function(){
	ok(DevEvent, "expected DevEvent to exist");
});

test('has a title string attribute', function() {
	hasDevEventAttr('title', 'string');
});

test('has a description', function(){
	hasDevEventAttr('description', 'string');
});

test('has a start time', function() {
	hasDevEventAttr('startTime', 'date');
});

test('has an end time', function() {
	hasDevEventAttr('endTime', 'date');
});