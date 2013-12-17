document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

window.startApp          = require('appkit/tests/helpers/start_app')['default'];
window.isolatedContainer = require('appkit/tests/helpers/isolated_container')['default'];

function exists(selector) {
  return !!find(selector).length;
}

function getAssertionMessage(actual, expected, message) {
  return message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
}

function equal(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.equal.call(this, actual, expected, message);
}

function strictEqual(actual, expected, message) {
  message = getAssertionMessage(actual, expected, message);
  QUnit.strictEqual.call(this, actual, expected, message);
}
// is this a better API?
var EmberTest = {
	DS: {
		hasAttr: function hasAttr(model, attr, type) {
			var attrMeta = model.metaForProperty(attr);
			equal(attrMeta.type, type, String(model)+" - "+ attr +" must be a "+type+" type");
			ok(attrMeta.isAttribute, String(model)+"should have a " + attr + " attribute");
		},
		isAttr: function isAttr(model, attr){
			ok(model.metaForProperty(attr).isAttribute, String(model)+"should have a " + attr + " attribute");
		},
		isType: function isType(model, attr, type) {
			equal(model.metaForProperty(attr).type, type, String(model)+" - "+ attr +" must be a "+type+" type");
		}
	}
};
// make this curry-able
function isEmberDataAttribute(model, attr, attrType) {
	var attrMeta = model.metaForProperty(attr);
	equal(attrMeta.type, attrType, String(model)+" - "+ attr +" must be a "+attrType+" type");
	ok(attrMeta.isAttribute, String(model)+"should have a " + attr + " attribute");
}

window.exists = exists;
window.equal = equal;
window.strictEqual = strictEqual;
window.isEmberDataAttribute = isEmberDataAttribute;