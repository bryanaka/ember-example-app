var DevEvent = DS.Model.extend({
	title: DS.attr('string'),
	startTime: DS.attr('date'),
	endTime: DS.attr('date'),
	description: DS.attr('string')
});

export default DevEvent;